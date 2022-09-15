begin
  # 定義してないメソッド呼び出しエラーを発生させる
  'abc'.foo
rescue ZeroDivisionError
  puts "ゼロで除算したエラー"
end