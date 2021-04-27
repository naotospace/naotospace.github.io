---
layout: post
title:  "Start blog at github pages"
date:   2021-04-26 22:27:08 +0900
categories: blog
---

github pages に 技術的なメモを残していこうと思います。

## Links
- [setting-up-a-github-pages-site-with-jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
- [jekyllrb-ja.github.io/resources](http://jekyllrb-ja.github.io/resources/)


## Log

1. リポジトリ作成

    [github.com/naotospace/naotospace.github.io](https://github.com/naotospace/naotospace.github.io)

2. jekyllの初期設定
```bash
mkdir docs
cd docs
gem install bundler jekyll
jekyll new .
ls -l
    total 48
    -rw-r--r--  1 nk  staff   419 Apr 27 00:45 404.html
    -rw-r--r--  1 nk  staff   938 Apr 27 00:19 Gemfile
    -rw-r--r--  1 nk  staff  7561 Apr 26 23:45 Gemfile.lock
    -rw-r--r--  1 nk  staff  1954 Apr 27 00:51 _config.yml
    drwxr-xr-x  3 nk  staff    96 Apr 27 00:39 _posts
    drwxr-xr-x  7 nk  staff   224 Apr 27 00:32 _site
    -rw-r--r--  1 nk  staff   175 Apr 26 22:27 index.markdown
```

3. Gemfileの修正

    githubの手順にはバージョン指定されていたが、github-pagesのバージョン指定はなしにした。

    ```ruby
    source "https://rubygems.org"

    gem "minima", "~> 2.5"
    gem "github-pages", group: :jekyll_plugins
    group :jekyll_plugins do
      gem "jekyll-feed", "~> 0.12"
    end

    # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
    # and associated library.
    platforms :mingw, :x64_mingw, :mswin, :jruby do
      gem "tzinfo", "~> 1.2"
      gem "tzinfo-data"
    end

    # Performance-booster for watching directories on Windows
    gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
    ```

4. Localで確認
    ```bash
    bundle exec jekyll serve
    ```
    `--livereload` をつけるとブラウザを更新しなくても自動でリロードされる
    ```bash
    bundle exec jekyll serve --livereload
    ```

5. push

これだけで公開されました 🥳
