### インストール
```
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

### テスト実行
```
npx playwright test
```

### レポート閲覧
エラーが無ければレポートがブラウザで表示されないので書きコマンドを打つと表示されます。
```
npx playwright show-report
```

### スナップショットファイル
下記に入るようにしています。

/.shapshots

- [初回画面](.snapshots/tictactoe.spec.ts-snapshots/初回実行.png)
- [赤くした画面](.snapshots/tictactoe.spec.ts-snapshots/赤くした画面.png)
- [4x3にした画面](.snapshots/tictactoe.spec.ts-snapshots/4x3にした画面.png)

テストを実行すると/testsディレクトリが実行されスナップショットが下記に生成されます。

[.snapshots/tictactoe.spec.ts-snapshots/-SSR-画面表示-1-chromium-linux.png](.snapshots/tictactoe.spec.ts-snapshots/-SSR-画面表示-1-chromium-linux.png)

### WSLのスナップショットで文字化けするとき
```
sudo apt-get install fonts-ipafont-gothic fonts-ipafont-mincho
```