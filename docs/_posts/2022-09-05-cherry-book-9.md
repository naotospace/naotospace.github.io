---
layout: post
title:  "Learning ruby by the cherry book! (Chapter 9: Exeption)"
date:   2022-09-05 00:00:00 +0900
categories: blog
tags:
  - Ruby
  - Programming
---

プログラミング言語の再学習として[プロを目指す人のためのRuby入門［改訂2版］](https://gihyo.jp/book/2021/978-4-297-12437-3)を読み始めましたので、気になる点をまとめます。


# 例外時の出力の読み解き方

```
# ruby 2.6.3
irb(main):001:0> 1 + '10'
Traceback (most recent call last):
        5: from /usr/bin/irb:23:in `<main>'
        4: from /usr/bin/irb:23:in `load'
        3: from /Library/Ruby/Gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>'
        2: from (irb):1
        1: from (irb):1:in `+'
TypeError (String can't be coerced into Integer)
```

``` (String can't be coerced into Integer)```

例外に関するメッセージ

直訳：文字列を整数に変換することはできません

```TypeError```

例外のクラス名

Rubyでは例外クラスのインスタンスになっている

型に関するエラーであることを示している


```
Traceback (most recent call last):
  5: from /usr/bin/irb:23:in `<main>'
  4: from /usr/bin/irb:23:in `load'
  3: from /Library/Ruby/Gems/2.6.0/gems/irb-1.0.0/exe/irb:11:in `<top (required)>'
  2: from (irb):1
  1: from (irb):1:in `+'
```

1 ~ 5まで呼出履歴となっている

# 例外を補足する

```ruby
puts 'Start.'
begin
  1 + '10'
rescue
  puts '例外発生したよ'
end
puts 'End.'
```

```bash
# 実行結果
ruby sample/ruby-book/exeption/sample.rb
Start.
例外発生したよ
End.
```

## 例外オブジェクトから情報取得

```
begin
  1 / 0
rescue => e
  puts "エラークラス: #{e.class}"
  puts "エラーメッセージ: #{e.message}"
  puts "バックトレース: \n#{e.backtrace.reverse.join("\n")}"
end
```

```bash
# 出力
ruby sample/ruby-book/exeption/sample_error_info.rb
エラークラス: ZeroDivisionError
エラーメッセージ: divided by 0
バックトレース:
sample/ruby-book/exeption/sample_error_info.rb:2:in `<main>'
sample/ruby-book/exeption/sample_error_info.rb:2:in `/'
```

## 補足する例外を限定する

```ruby
begin
  1 / 0
rescue ZeroDivisionError
  puts "ゼロで除算したエラー"
end
```

`ZeroDivisionError`は補足されて、例外終了しない
```bash
ruby sample/ruby-book/exeption/sample_restrict_error.rb
ゼロで除算したエラー
```

別の例外クラスのエラーを発生させると捕捉されない
```ruby
begin
  # 定義してないメソッド呼び出しエラーを発生させる
  'abc'.foo
rescue ZeroDivisionError
  puts "ゼロで除算したエラー"
end
```
```bash
ruby sample/ruby-book/exeption/sample_restrict_error_2.rb
Traceback (most recent call last):
sample/ruby-book/exeption/sample_restrict_error_2.rb:3:in `<main>': undefined method `foo' for "abc":String (NoMethodError)
```

### 複数のエラーを補足する

#### 例外クラスによって処理を分ける
```ruby
begin
  # 定義してないメソッド呼び出しエラーを発生させる
  'abc'.foo
rescue ZeroDivisionError
  puts "ゼロで除算したエラーが発生したよ"
rescue NoMethodError
  puts "未定義のメソッド呼び出しエラーが発生したよ"
end
```

#### 同じ処理を呼び出す

```ruby
begin
  # 定義してないメソッド呼び出しエラーを発生させる
  'abc'.foo
rescue ZeroDivisionError, NoMethodError
  puts "ゼロで除算したか、未定義のメソッド呼び出しエラーが発生したよ"
end
```

エラー情報を取得する
```ruby
begin
  # 定義してないメソッド呼び出しエラーを発生させる
  'abc'.foo
rescue ZeroDivisionError, NoMethodError => e
  puts "ゼロで除算したか、未定義のメソッド呼び出しエラーが発生したよ"
  puts "エラー: #{e.class}, #{e.message}"
end
```


# 例外クラスの継承関係

- StandardError # 通常のプログラムで発生しやすいエラーのスーパークラス
  - RunTimeError
  - NameError
    - NoMethodError
  - TypeError
  - ArgumentError
  - その他Error
- 特殊なエラー（NoMemoryError, SystemExitなど）

rescue節に何も指定しない場合に補足されるのはStandardErrorとそのサブクラスになる

指定した場合はそのクラスとサブクラスが補足される

```ruby
begin
  # 例外
rescue
  # StandardErrorとそのサブクラスのみ補足
rescue NameError
  # NameErrorとそのサブクラスのみ補足
end
```