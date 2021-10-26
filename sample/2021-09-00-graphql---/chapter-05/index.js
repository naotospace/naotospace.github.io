const { ApolloServer } = require(`apollo-server-express`)
const express = require(`express`)
const expressPlayground = require(`graphql-playground-middleware-express`).default
const { readFileSync} = require(`fs`)

const { GraphQLScalarType } = require('graphql')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = readFileSync(`./typeDefs.graphql`, `UTF-8`)

// 1. ユニークIDをインクリメントするための変数を定義
// var _id = 0
var users = [
    { "githubLogin": "mHattrup", "name": "Mike Hattrup"},
    { "githubLogin": "gPlake", "name": "Glen Plake"},
    { "githubLogin": "sSchmidt", "name": "Scot Schmidt"}
]
var photos = [
    {
        "id": "1",
        "name": "Dropping the Htert Chute",
        "description": "The Heart chute is one of my favorite chutes",
        "category": "ACTION",
        "githubUser": "gPlake",
        "created": "3-28-1977"
    },
    {
        "id": "2",
        "name": "B",
        "description": "Desc B",
        "category": "SELFIE",
        "githubUser": "sSchmidt",
        "created": "1-2-1985"
    },
    {
        "id": "3",
        "name": "C",
        "description": "Desc C",
        "category": "LANDSCAPE",
        "githubUser": "sSchmidt",
        "created": "2018-04-15T19:09:57.308Z"
    },
]

var tags = [
    { "photoID": "1", "userID": "gPlake" },
    { "photoID": "2", "userID": "sSchmidt" },
    { "photoID": "2", "userID": "mHattrup" },
    { "photoID": "2", "userID": "gPlake" },
]

const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos
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
        name: `DateTime`,
        description: `A valid date time value.`,
        parseValue: value => new Date(value),
        serialize: value => new Date(value).toISOString(),
        parseLiteral: ast => ast.value
    })
};

var app = express()

const server = new ApolloServer({ typeDefs, resolvers });

// Expressにミドルウェアを追加
server.applyMiddleware({ app })

app.get(`/`, (req, res) => res.end(`Welcome to the PhotoShare API`))
app.get(`/playground`, expressPlayground({ endpoint: `graphql` }))

app.listen( { port: 4000}, () =>
    console.log(`GraphQL Server running @ http://localhost:4000${server.graphqlPath}`)
)