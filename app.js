const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  // 'X-ADOBESIGN_CLIENTID'ヘッダーから値を取得
  const clientId = req.get('X-ADOBESIGN_CLIENTID');

  // リクエストボディを表示
  console.log('Request Body:', req.body);

  // レスポンスヘッダに値を設定
  res.setHeader('X-AdobeSign-ClientId', clientId);

  // レスポンスコード200を返す
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
