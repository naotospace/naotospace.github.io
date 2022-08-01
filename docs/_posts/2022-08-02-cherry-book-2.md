---
layout: post
title:  "Learning ruby by the cherry book! (Chapter 2)"
date:   2022-08-02 00:00:00 +0900
categories: blog
tags:
  - Ruby
  - Programming
---

プログラミング言語の再学習として[プロを目指す人のためのRuby入門［改訂2版］](https://gihyo.jp/book/2021/978-4-297-12437-3)を読み始めましたので、気になる点をまとめます。

## 2.10.4 case文
基本的な文法

```ruby
case .. # 対象のオブジェクトや式
when a
  # 処理
when b
  # 処理
else
  # どれにも一致しない場合の処理
end
```

複数の値でマッチさせることができる

```ruby
country = 'アメリカ'
case country
when 'japan', '日本'
  'こんにちは'
when 'us', 'アメリカ'
  'Hello'
else
  '???'
end
#=> "Hello"
```

caseの式を省略すると最初にTrueになる処理を行う

```ruby
country = 'us'
case
when country == 'japan'
  'こんにちは'
when  country == 'us'
  'Hello'
else
  '???'
end
#=> "Hello"
```

最後に評価された式を返すので変数に入れることもできる

```ruby
country = 'us'
message =
	case
	when country == 'japan'
  	'こんにちは'
	when  country == 'us'
	  'Hello'
	else
	  '???'
	end
	
puts message
#=> "Hello"
```

また分岐にはRangeオブジェクトや正規表現オブジェクト、クラスオブジェクトを使うことができる。

## 2.10.5 条件演算子（三項演算子）

```ruby
n = 11
if n > 10
  '10より大きい'
else
  '10以下'
end
#=> 10より大きい

# 条件演算子で書き換え
n = 11
n > 10 ? '10より大きい' : '10以下'
#=> 10より大きい

## 結果を変数に代入することも可能
message = n > 10 ? '10より大きい' : '10以下'
puts message
#=> '10より大きい'
```

返って読みづらくなることもあるのでコードの可読性を考慮しながら使うこと。

## 2.11 メソッド定義についてもっと詳しく

### 2.11.1 デフォルト値付きの引数

```ruby
def greet(country = 'japan')
  if country == 'japan'
    'こんにちは'
  else
    'hello'
  end
end

greet #=> こんにちは
greet('us') #=> hello

# デフォ有無を混在することも可
def greet(country, num = 1)
 	# 処理
end

# メソッドの戻り値などを設定することもできる
def greet(country, now = Time.now, message = bar)
  # 処理
end

def bar
  'BAR'
end

# 第1引数を第2引数のデフォにすることもか
def point(x, y = x)
  # 処理
end

## 第2引数を第1引数のデフォにはできない
def point(x = y, y)
  p x, y
end
point(1)
#=> NameError: undefined local variable or method `y' for main:Object
#   in `point'
```

### 2.11.2と3 ?,!で終わるメソッド

?で終わるメソッドは慣習として真偽値を返す

!で終わるメソッドは!がついていないメソッドよりも危険という意味を持つ

変数名には?,!はつけられない

**「コラム：!で終わるメソッドは破壊的メソッドであるは間違い」**

- 同じ動作で破壊的・非破壊的メソッドの療法がある場合は!がつくと破壊的であるというのは正しい
- 破壊的であっても非破壊的メソッドがない場合は!が付かない
- 破壊的かどうか関係なく、安全、非安全なメソッドがある場合は!がつく

### 2.11.4 エンドレスレスメソッド定義

Ruby 3.0から登場した記法。

便利な場合もあるが、3.0時点では実験的機能という位置づけなので、3.1では仕様変更となる場合もあるので注意。

```ruby
def greet
  'Hello'
end

def greet = 'Hello'

# 呼び方はどちらも同じ
greet
#=> 'Hello'

# 引数あり
def add(a, b)
  a + b
end

def add a, b = a + b

```



## 2.12 その他

**ガベージコレクション**
自動的に使用されなかったオブジェクトを回収し、メモリを開放する

**エイリアスメソッド**
```
'hello'.length
'hello'.size
```

**式と文**

式：値を返し、結果を変数に代入できるもの

文：値を返さず、変数に代入しようとすると構文エラーになるもの

if文も値を返す（if式のほうが適している）

**疑似変数**

```ruby
true
false
self
__FILE__
__LINE__
__ENCODING__
```

### 2.12.5. 参照の概念の理解

Rubyの変数にはオブジェクトそのものではなく、オブジェクトへの参照が格納される。

変数を変数に渡すと元のオブジェクトと同じ変数を参照する。

```ruby
a = 'hello'
b = 'hello'
a.object_id
#=> 70101841430320
b.object_id
#=> 70101864957360 # aとは違うオブジェクト

c = b
c.object_id
#=> 70101864957360 # bと同じオブジェクトを参照

def m(d)
  d.object_id
end
m(c)
#=> 70101864957360 # c(b)と同じオブジェクトを参照

# .equal?で同じオブジェクトか判定できる
a.equal?(b)
#=> false
b.equal?(c)
#=> true

b.upcase!
p c
=> "HELLO" # cも変更される
```



```
a ---- [hello]
b ---- [hello]
c -----┘
  └ b -┘
  メソッドm
```

### 2.12.8 puts/print/p/pp

puts/printは一般ユーザ向け

p/ppは開発者向け

```ruby
'abc'.to_s
#=> "abc"
'abc'.inspect
#=> "\"abc\""
```

表をよく見ておく


### 2.10.4 case文

基本

```ruby
case .. # 対象のオブジェクトや式
when a
  # 処理
when b
  # 処理
else
  # どれにも一致しない場合の処理
end
```

複数の値でマッチ

```ruby
country = 'アメリカ'
case country
when 'japan', '日本'
  'こんにちは'
when 'us', 'アメリカ'
  'Hello'
else
  '???'
end
#=> "Hello"
```

caseの式を省略すると最初にTrueになる処理を行う

```ruby
country = 'us'
case
when country == 'japan'
  'こんにちは'
when  country == 'us'
  'Hello'
else
  '???'
end
#=> "Hello"
```

最後に評価された式を返すので変数に入れることもできる

```ruby
country = 'us'
message =
	case
	when country == 'japan'
  	'こんにちは'
	when  country == 'us'
	  'Hello'
	else
	  '???'
	end

puts message
#=> "Hello"
```

また分岐にはRangeオブジェクトや正規表現オブジェクト、クラスオブジェクトを使うことができる。

### 2.10.5 条件演算子（三項演算子）

```ruby
n = 11
if n > 10
  '10より大きい'
else
  '10以下'
end
#=> 10より大きい

# 条件演算子で書き換え
n = 11
n > 10 ? '10より大きい' : '10以下'
#=> 10より大きい

## 結果を変数に代入することも可能
message = n > 10 ? '10より大きい' : '10以下'
puts message
#=> '10より大きい'
```

返って読みづらくなることもあるのでコードの可読性を考慮しながら使うこと。

## 2.11 メソッド定義についてもっと詳しく

### 2.11.1 デフォルト値付きの引数

```ruby
def greet(country = 'japan')
  if country == 'japan'
    'こんにちは'
  else
    'hello'
  end
end

greet #=> こんにちは
greet('us') #=> hello

# デフォ有無を混在することも可
def greet(country, num = 1)
 	# 処理
end

# メソッドの戻り値などを設定することもできる
def greet(country, now = Time.now, message = bar)
  # 処理
end

def bar
  'BAR'
end

# 第1引数を第2引数のデフォにすることもか
def point(x, y = x)
  # 処理
end

## 第2引数を第1引数のデフォにはできない
def point(x = y, y)
  p x, y
end
point(1)
#=> NameError: undefined local variable or method `y' for main:Object
#   in `point'
```

### 2.11.2/3 ?/!で終わるメソッド

?で終わるメソッドは慣習として真偽値を返す

!で終わるメソッドは!がついていないメソッドよりも危険という意味を持つ

変数名には?,!はつけられない

**「!で終わるメソッドは破壊的メソッドであるは間違い」**

- 同じ動作で破壊的・非破壊的メソッドの療法がある場合は!がつくと破壊的であるというのは正しい
- 破壊的であっても非破壊的メソッドがない場合は!が付かない
- 破壊的かどうか関係なく、安全、非安全なメソッドがある場合は!がつく

### 2.11.4 エンドレスレスメソッド定義

Ruby 3.0から登場した記法。

便利な場合もあるが、3.0時点では実験的機能という位置づけなので、3.1では仕様変更となる場合もあるので注意。

```ruby
def greet
  'Hello'
end

def greet = 'Hello'

# 呼び方はどちらも同じ
greet
#=> 'Hello'

# 引数あり
def add(a, b)
  a + b
end

def add a, b = a + b


```

## 2.12 その他

ガベージコレクション

- 自動的に使用されなかったオブジェクトを回収し、メモリを開放する

エイリアスメソッド

```
'hello'.length
'hello'.size
```

式と文

式：値を返し、結果を変数に代入できるもの

文：値を返さず、変数に代入しようとすると構文エラーになるもの	

if文も値を返す（if式のほうが適している）

疑似変数

```ruby
true
false
self
__FILE__
__LINE__
__ENCODING__
```

### 2.12.5参照の概念の理解

Rubyの変数にはオブジェクトそのものではなく、オブジェクトへの参照が格納される。

変数を変数に渡すと元のオブジェクトと同じ変数を参照する。

```ruby
a = 'hello'
b = 'hello'
a.object_id
#=> 70101841430320
b.object_id
#=> 70101864957360 # aとは違うオブジェクト

c = b
c.object_id
#=> 70101864957360 # bと同じオブジェクトを参照

def m(d)
  d.object_id
end
m(c)
#=> 70101864957360 # c(b)と同じオブジェクトを参照

# .equal?で同じオブジェクトか判定できる
a.equal?(b)
#=> false
b.equal?(c)
#=> true

b.upcase!
p c
=> "HELLO" # cも変更される
```

```
a ---- [hello]
b ---- [hello]
c -----┘
  └ b -┘
  メソッドm
```



### 2.12.8 puts/print/p/pp

puts/printはto_sで文字列に変換されるため一般ユーザ向け

p/ppはinspectで文字列化され、開発者向けの情報を含むため開発者向け

```ruby
'abc'.to_s
#=> "abc"
'abc'.inspect
#=> "\"abc\""
```

表 2-1 putsメソッド、printメソッド、pメソッド、ppメソッドの違い

|メソッド|出力後の改行|配列の表示|文字列変換|戻り値|
-------|-----------|--------|--------|-----|
|puts|あり|要素ごとに改行|to_s|nil|
|print|なし|改行しない|to_s|nil|
|p|あり|改行しない|inspect|引数のオブジェクト|
|pp|あり|見やすく整形|inspectに似た方法|引数のオブジェクト|
