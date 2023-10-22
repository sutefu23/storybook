# 課題１

下記のE2Eテストコマンドで実行されます。

## GUI
```
npx cypress open
```

## CLI
```
npm run start 
npx cypress run
```

# 課題２
> 前の課題で作成したStorybookを更新して、引き分け状態を表示するStoryを追加してください

課題に書かれているようにindex.tsxまで引き上げてステータスをバケツリレーするのは違和感があったので、StatusBarとしてまずコンポーネントを切り分けた。

ただしヒントに書かれてるような実装はせず、今回のDraw!判定に関してはBoardコンポーネントに「Winに該当せず、盤上が満たされていたらDraw」というロジックを書き足した形だったので、squaresを配置するだけでDraw!と出た。

- StatusBarストーリー
http://localhost:6006/?path=/story/components-statusbar--default

- BoardコンポーネントのDrawストーリー
http://localhost:6006/?path=/story/components-board--draw-board

