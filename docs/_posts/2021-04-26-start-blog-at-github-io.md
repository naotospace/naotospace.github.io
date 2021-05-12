---
layout: post
title:  "Start blog at github pages"
date:   2021-04-26 22:27:08 +0900
categories: blog
tags:
  - github
  - jekyll
  - ruby
  - markdown
  - blog
---

github pages に 技術的なメモを残していこうと思います。

## Links
はじめに参考リンクのご紹介
- [setting-up-a-github-pages-site-with-jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
- [jekyllrb-ja.github.io/resources](http://jekyllrb-ja.github.io/resources/)
- [Jekyll 環境の構築（テーマは Gem 化された Minimal Mistakes）！](https://www.mk-mode.com/blog/2019/01/27/jekyll-with-minimal-mistakes/)

## Log

1. リポジトリ作成

    [github.com/naotospace/naotospace.github.io](https://github.com/naotospace/naotospace.github.io)

2. jekyllの初期設定
```bash
mkdir docs
cd docs
gem install bundler jekyll
jekyll new .
ls -l1
  404.html
  Gemfile
  Gemfile.lock
  _config.yml
  _includes
  _posts
  _site
  index.markdown
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

6. Footerをカスタマイズ

    Footerにブログ名が２つも表示されていたので修正しました。

    1. `includes` ディレクトリ を追加
    2. `includes/footer.html` を作成
        ```html
        <footer class="site-footer h-card">
          <data class="u-url" href="/"></data>

          <div class="wrapper">
            <div class="footer-col-wrapper">
              <div class="footer-col footer-col-2">
                <ul class="social-media-list">
                  <li>
                    <a href="https://github.com/{{ site.github_username }}">
                      <svg class="svg-icon"><use xlink:href="/assets/minima-social-icons.svg#github"></use></svg>
                      <span class="username">{{ site.github_username }}</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/{{ site.twitter_username }}">
                      <svg class="svg-icon"><use xlink:href="/assets/minima-social-icons.svg#twitter"></use></svg>
                      <span class="username">{{ site.twitter_username }}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-col footer-col-3">
                  <p>SET/QA/DevOpsEngineer | I'll show my knowledge and awesome experience!</p>
              </div>
            </div>
          </div>
        </footer>
        ```
    3. `_config.yaml`の値を使えるように修正

        `site.github_username`や`site.twitter_username` を 二重の半角波括弧で囲むと使えるようになります

        [4876d6b37c8c754/docs/_includes/footer.html#L6](https://github.com/naotospace/naotospace.github.io/blob/4876d6b37c8c754/docs/_includes/footer.html#L6)
