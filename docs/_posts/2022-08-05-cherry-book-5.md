---
layout: post
title:  "Learning ruby by the cherry book! (Chapter 5: Hash & Symbol)"
date:   2022-08-03 00:00:00 +0900
categories: blog
tags:
  - Ruby
  - Programming
---

プログラミング言語の再学習として[プロを目指す人のためのRuby入門［改訂2版］](https://gihyo.jp/book/2021/978-4-297-12437-3)を読み始めましたので、気になる点をまとめます。

### 5.2.2 ハッシュの繰り返し処理

```ruby
currencies = { 'japan' => 'yen', 'us' => 'dollar', 'india' => 'ruppe' }
currencies.each do |k, v|
  puts "#{k}: #{v}"
end

currencies.each do |k_v|
  puts "#{k_v[0]}: #{k_v[1]}"
end

# どちらもおなじ
# japan: yen
# us: dollar
# india: ruppe
```

### 5.2.3 ハッシュの比較・要素数の取得・要素の削除

```ruby
# 比較
a = {'x' => 1, 'y' => 2}
b = {'x' => 1, 'y' => 2}
# 同じ値ならtrue
a == b #=> true

c = {'y' => 2, 'x' => 1}
# 並び順が違ってもtrue
a == c #=> true

d = {'y' => 2, 'x' => 10}
# valueが異なるとfalse
a == d #=> false


# 削除
a.delete('x') #=> 1
a #=> {"y"=>2}
```

### 5.3.1 シンボルと文字列の違い

```ruby
# Classが違う
:apple.class #=> Symbol
'apple'.class #=> String

# シンボルのほうが比較が高速
## 同じシンボルは同じオブジェクト、同じ文字列は、異なるオブジェクトになる
## そのためシンボルのほうがメモリの使用効率がよい。
:apple.object_id #=> 1515868
:apple.object_id #=> 1515868
:apple.object_id #=> 1515868
'apple'.object_id #=> 70154894261080
'apple'.object_id #=> 70154894255260
'apple'.object_id #=> 70154894274160
### メモ： Interger型も同じ数値は同じオブジェクト指す
1.class #=> Integer
1.object_id #=> 3
1.object_id #=> 3
1.object_id #=> 3

# シンボルは破壊てきな操作ができない
## 値を変更させたくない場合に有効
```

**ハッシュのキーに使うと文字列よりも高速に値を取り出すことができる**

**case文の条件に使う場合も処理効率がいい**
```ruby
status = :done

case status
when :todo
  # 処理
when :doing
  # 処理
when :done
  # 処理
end
```

## 5.5 convert_lengthの実装
[nk-ty.github.io/sample/ruby-book at main · nk-ty/nk-ty.github.io](https://github.com/nk-ty/nk-ty.github.io/tree/main/sample/ruby-book)

### 5.6.2 **でハッシュを展開させる

```ruby
h = { us: 'dollar', india: 'rupee' }
{ japan: 'yen', **h } #=> { japan: 'yen', us: 'dollar', india: 'rupee' }

# 上と同じ
{ japan: 'yen' }.merge(h)
```

### 5.6.9 ハッシュのデフォルト値

```ruby
h = {}
h[:foo] #=> nil

h = Hash.new('hello')
h[:foo] #=> 'hello'

h = Hash.new('hello') #=> {}
h #=> {}
h[:hoge] #=> "hello"
a = h[:hoge] #=> "hello"
b = h[:bar] #=> "hello"
# 毎回同じオブジェクトが代入される
a.object_id #=> 70335178448700
b.object_id #=> 70335178448700
a.equal?(b) #=> true
# 破壊的な変更を行うと影響がある
a.upcase!  #=> "HELLO"
a #=> "HELLO"
b #=> "HELLO"

# ブロックでデフォルト値を定義
h = Hash.new { 'hello' }
h = Hash.new { 'hello' } #=> {}
a = h[:fuga] #=> "hello"
b = h[:fuga] #=> "hello"
# 異なるオブジェクトを返す
a.object_id #=> 70335177821840
b.object_id #=> 70335177871540
# 破壊的変更を加えても影響なし
a.upcase!  #=> "HELLO"
b #=> "hello"
```

### &.演算子（ぼっち演算子）
nil対策になる。
レシーバーがnilの場合にメソッドを呼び出すとNoMethodErrorになるが、&.演算子を使うと`nil`を返すので、エラーにならない

```ruby
nil.upcase #=> NoMethodError (undefined method `upcase' for nil:NilClass)
nil&.upcase # => nil
```
