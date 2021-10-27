const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const expressPlayground = require('graphql-playground-middleware-express').default
const { readFileSync, access} = require('fs')
const { MongoClient } = require('mongodb')
require('dotenv').config()
const fetch = require('node-fetch')

const { GraphQLScalarType } = require('graphql')

const typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')

const requestGithubToken = credentials =>
    fetch(
        'https://github.com/login/oauth/access_token',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(credentials)
        }
    )
    .then(res => res.json())
    .catch(error => {
        throw new Error(JSON.stringify(error))
    })

const requestGithubUserAccount = token =>
    fetch(
        `https://api.github.com/user`,
        {
            method: 'GET',
            headers: {
                Authorization: 'token ' + token
            }
        },
    )
    .then(res => res.json())

const authorizeWithGithub = async credentials => {
    const { access_token } = await requestGithubToken(credentials)
    const githubUser = await requestGithubUserAccount(access_token)
    return { ...githubUser, access_token }
}

const resolvers = {
    Query: {
        totalPhotos: (parent, args, { db }) =>
            db.collection('photos')
                .estimatedDocumentCount(),
        allPhotos: (parent, args, { db }) =>
            db.collection('photos')
                .find()
                .toArray(),
        totalUsers: (parent, args, { db }) =>
            db.collection('users')
                .estimatedDocumentCount(),
        allUsers: (parent, args, { db }) =>
            db.collection('users')
                .find()
                .toArray(),
        me: (parent, args, { currentUser }) => currentUser,
    },
    Mutation: {
        postPhoto(parent, args) {
            // 2. 新しい写真を作成し、idを生成する
            var newPhoto = {
                id: _id++,
                ...args.input,
                // 写真投稿時に現在の日時を登録
                created: new Date()
            }
            photos.push(newPhoto)

            // 3. 新しい写真を返す
            return newPhoto
        },
        async githubAuth(parent, { code }, { db }) {
            let {
                message,
                access_token,
                avatar_url,
                login,
                name
            } = await authorizeWithGithub({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                code
            })

            if (message) {
                throw new Error(message)
            }

            let latestUserInfo = {
                name,
                githubLogin: login,
                githubToken: access_token,
                avatar: avatar_url
            }

            const { ops:[user] } = await db
                .collection('users')
                .replaceOne({ githubLogin: login }, latestUserInfo, { upsert: true })

            return { user, token: access_token }
        }
    },
    Photo: {
        url: parent => `http://yoursite.com/img/${parent.id}.jpg`,
        postedBy: parent => {
            return users.find(u => u.githubLogin === parent.githubUser)
        },
        taggedUsers: parent => tags
            // 対象の写真が関係するタグの配列を返す
            .filter(tag => tag.photoID === parent.id)
            // タグの配列をユーザーIDの配列に変換する
            .map(tag => tag.userID)
            // ユーザーIDの配列をユーザーオブジェクトに変換する
            .map(userID => users.find(u => u.githubLogin === userID))
    },
    User: {
        postedPhotos: parent => {
            return photos.filter(p => p.githubUser === parent.githubLogin)
        },
        inPhotos: parent => tags
            // 対象のユーザが関係しているタグの配列を返す
            .filter(tag => tag.userID === parent.id)
            // タグの配列をPhoto IDの配列に変換する
            .map(tag => tag.photoID)
            // Photo IDの配列をPhotoオブジェクトに変換する
            .map(photoID => photos.find(p => p.id === photoID))
    },
    // カスタムスカラーを定義（parseValue, serialize, parseLiteralを定義する）
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'A valid date time value.',
        parseValue: value => new Date(value),
        serialize: value => new Date(value).toISOString(),
        parseLiteral: ast => ast.value
    })
};


async function start() {
    const app = express()

    const MONGO_DB = process.env.DB_HOST
    const client = await MongoClient.connect(MONGO_DB, { useNewUrlParser: true })
    const db = client.db()
    const context = { db }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            const githubToken = req.headers.authorization
            const currentUser = await db.collection('users').findOne({ githubToken })
            return { db, currentUser }
        }
    });

    await server.start()
    // Expressにミドルウェアを追加
    server.applyMiddleware({ app })

    app.get('/', (req, res) => res.end('Welcome to the PhotoShare API'))
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

    app.listen( { port: 4000}, () =>
        console.log(
            `GraphQL Server running @ http://localhost:4000${server.graphqlPath}`
        )

    )
}
start()