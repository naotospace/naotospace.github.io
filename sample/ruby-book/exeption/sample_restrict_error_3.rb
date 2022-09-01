begin
  # 定義してないメソッド呼び出しエラーを発生させる
  'abc'.foo
rescue ZeroDivisionError, NoMethodError => e
  puts "ゼロで除算したか、未定義のメソッド呼び出しエラーが発生したよ"
  puts "エラー: #{e.class}, #{e.message}"
end