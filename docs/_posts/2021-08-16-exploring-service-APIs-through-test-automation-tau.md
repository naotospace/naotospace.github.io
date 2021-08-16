---
layout: post
title:  "Study in TAU : Exploring Service APIs through Test Automation"
date:   2021-08-16 00:00:00 +0900
categories: blog
tags:
  - Test automation
  - API Testing
  - tau
  - Amber Race
---

Test Automatioin Universityの[Exploring Service APIs through Test Automation](https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/)のまとめです。

## 1 Intro to API Testing
- APIはプログラム間でやり取りするためのゲート
- リクエスト（エンドポイント、ヘッダー、ボディ）
- レスポンス（ステータスコード、ヘッダー、ボディ）
- Amazon Suggestion APIのサンプル
  - Chrome developerツールなどでBodyやステータスコードを確認できる
- 開発者にとってのAPIで大事なこと
  - APIが正しいこと、契約が想定通りに尊重されること
  - 価値を提供していること（必要な情報の表示やデータの処理）
  - 直感的でプログラミングに用いやすい
- APIはパブリックであることも頭に入れる
  - 期待通りの使われ方がされるとは限らない
  - 多くの企業がAPIを公開している
    - ドキュメントも充実しているのでみることを推奨します
- Chrome/Firefoxのデベロッパーツールで確認できる
  - xhr
- Mobileでの確認
  - ProxyツールのFiddler, Charlesを使う
- 目標は通信が正しく行われるようにすること、テストの目標は通信が適切に行われていることを確認すること

## 2 Postman
- [Installing and updating \| Postman Learning Center](https://learning.postman.com/docs/getting-started/installation-and-updates/)
- Basic Requests
  - Collectionからリクエスト先のエンドポイントを入力する
    ex. http://worldtimeapi.org/api/timezone/Asia/Tokyo
- Importing Requests
  - Amazon を開き、Developer tool > Network > XHR(Amazonでフィルタリング)
  - Copy as cURLでコピーする
  - CollectionのImportからRaw textでインポート
  - Sendすると確認できる
  - POSTリクエストも同様の操作でインポート可能
- API Play ground
  - [Restful-Booker](https://restful-booker.herokuapp.com/)
  - シンプルなAPIでバグが有るので練習に適している
  - APIドキュメントも用意されている
- PostmanではCollectionというくくりで設定を保存することができる
- PUT/POSTの違い
  - PUTは更新、POSTは追加
  - PUT はべき等であり、呼び出し回数が1回でも複数回でも同じ効果になります（副作用がありません）が、連続して同じ POST を実行すると、注文を複数回渡してしまうなどの追加の影響が発生する可能性があります。
    - 参考： [PUT - HTTP \| MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Methods/PUT)

## 3 API Test Strategy (POISED)

- "POISED" heuristic strategy でテストを網羅していく
  - Parameters
  - Output
  - Interop
  - Security
  - Errors
  - Data

- 先にローカルでRestFul Booker APIを起動する
  - Clone [GitHub - mwinteringham/restful-booker: Web Service for the workshop](https://github.com/mwinteringham/restful-booker)
  - [コンテナ起動](https://github.com/mwinteringham/restful-booker#installation)
  - [Restful-booker API Docs](https://restful-booker.herokuapp.com/apidoc/index.html)

- 環境の追加と変数設定
  ![postman variable 2](/assets/images/2021-08-16-exploring-service-APIs-through-test-automation-tau/Postman_variables_2.png)

  ![postman variable 3](/assets/images/2021-08-16-exploring-service-APIs-through-test-automation-tau/Postman_variables_3.png)
- Basic認証の設定

### 3.1 Parameters
- パラメータの考え方は他のテストの境界値と同じ
- 空文字や空白、nullを与えるとどうなるかとかもある
- True/Falseを期待している場合に空文字を与えるとエラーになる

### 3.2 Output
- レスポンス自体だけでなく、ステータスコード、ロギングなども
- 例えば予約削除APIのレスポンスが201 Created だと分かりづらいので不適切だといえる
- Headerによる出力形式の変更も確認するポイント( 例. application/xmlを送信するとXMLが出力されること )
- ステータスコードの以外にも何が原因でその状態になっているかの手がかりを出力するようにしているかもチェックするべき

### 3.3 Interoperability( Interop ) 相互運用性

- 利用者やビジネス上のニーズを満たせる作りなっているかの確認
- 日付をyyyy-mm-dd とするか、dd-mm-yyyyとするか、どちらも受け取るか
- どのようなクエリで呼び出すのか、また返却するかを利用者のニーズに合わせて検討する必要がある

### 3.4 Security
- UIレベルで対策が取られていてもプロキシやデベロッパーツールでAPI通信を確認され悪用される可能性があるため対策が必要

### 3.5 Error Handling (Exceptions)
- 悪意のあるハッカーや開発者が不適切なリクエストを送る可能性があるため適切に処理する必要がある
  - 不正なID/Passwordを送った場合に200 OKではなく401 Unauthorizedを返却すべき
  - 不正なパラメータの場合に400 Bad requestと返却する

### 3.6 Data
- APIの多くはデータを操作する（作成・削除・更新・取得）
- APIのレスポンスとして200OKが帰ってくるのを確かめるだけでは不完全
  - DBの確認もしくはデータ呼び出しAPIの返却値を確認して期待通りの状態を作れたか確認する必要がある
- データ量が増えた場合のパフォーマンスについてもチェックする必要がある（スケーラビリティ）
  - 1000件のデータが有る場合の呼び出し
  - 1000件のデータの登録


## 4. API Automation in Postman

### 4.1 Basic tests
- スクリプトによるテスト実装
- Testsタブに実装できる
- Chaiを使っている

  ```javascript
  pm.test("Status code is 200", function () {
	pm.response.to.have.status(200);
  });
  ```

### 4.2 Data-driven tests
- Bodyで変数を使う
  ```json
  {
      "firstname" : "{{firstname}}",
      "lastname" : "{{lastname}}",
      "totalprice" : 111,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2019-01-01"
      },
      "additionalneeds" : "Breakfast"
  }
  ```
- Datadrivenのテストコード
  ```javascript
  var fn = pm.variables.get("firstname");
  var ln = pm.variables.get("lastname");

  pm.test("Check first name" + fn, function () {
  	var jsonData = pm.response.json();
  	pm.expect(jsonData.booking.firstname).to.eql(fn);
  });

  pm.test("Check last name" + ln, function () {
  	var jsonData = pm.response.json();
  	pm.expect(jsonData.booking.lastname).to.eql(ln);
  });
  ```
- CSVを読み込ませて実行できる
  ```
  firstname,lastname
  Naoto,kishino
  まんが,Taro
  ```

### 4.3 Advanced Tests
- [Postman JavaScript reference \| Postman Learning Center](https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/)にスクリプトの使い方がある

### 4.4 Continuous Integration with Newman
- Newmanを使うとCUIでPostmanのテストが実行できるようになる
  - [Running collections on the command line with Newman \| Postman Learning Center](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)