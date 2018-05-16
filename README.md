# line-echo-bot

メッセージをエコーバックするだけのLINEボットです。
このプログラムはGoogle Cloud Functionsで動作します。

## インストール
### LINE Bot の Channel を作成

* LINE Developers で For Developer プランの Channel を作成してください

### Google Cloud Functions に Function を作成
* GCPコンソールで Google Cloud Functions を作成してください
* `index.js` と `package.json` をコピーして、Cloud Functions に貼り付けてください
* 貼り付けた `index.js` を以下のように編集します
    * `channelAccessToken` に Channel のアクセストークン（ロングターム）をペーストしてください
    * `channelSecret` に Channel の Channel Secret をペーストしてください
* 実行する関数に echo を入力してください
* Function を保存してください

### LINE Bot Channel の設定を変更

* Webhook送信を利用するに変更してください
* Webhook URLを Cloud Function のHTTPトリガーURLに変更してください
* 自動応答メッセージを利用しないに変更してください

## 使い方

* Channel のQRコードをLINEアプリで読み込んでください
* Bot に対してメッセージを送信してください
