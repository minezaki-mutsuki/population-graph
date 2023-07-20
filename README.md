## デプロイ
vercel : https://population-graph-phi.vercel.app/
## 使用技術
言語 : TypeScript<br>
フレームワーク : React<br>
スタイリング : CSS
テスト : jest<br>
UIテスト : storybook<br>
リンター : ESLint<br>
フォーマッター : Prettier<br>

## セットアップ手順
1. プロジェクト立ち上げ（create-react-app）
2. ESLint設定
3. storybook設定（npx storybook init）
4. chromaticによるstorybookのCI/CD設定

## 工夫、努力した点
- atomic designによるコンポーネントの分割
    
- 初めてのテストコード
  - コンポーネントが持つべき役割を満たしているかテストした
    
- chromaticを利用してCI/CDにstorybookを導入
  - PRで作成したコンポーネントのUIや挙動を確認できる
  - unit testだけでなくstorybookでのUIのテストでコンポーネント設計の確実性の向上
    
- コンポーネント設計
  - 出来る限り抽象的に、使いまわせるよう配慮した
  - propsでデータを受け渡せるようにした
  - 受け渡すデータの処理は祖先コンポーネントであるpages単位で処理
    
- 環境変数を設定してAPI_KEYが流出しないよう配慮
  
- ビューとロジックの分離
  - pages単位では、modelsフォルダに特定の処理を担う関数を書き、indexではその関数を実行するだけにして記述を最小限にした
    
- 可読性の高いコード、設計
  - コンポーネントや関数、classなどの命名は分かりやすくした
  - 処理は関数にまとめた
    
- 動作が軽くなるよう配慮
  - 余計にAPIや関数の処理を実行しないようにした

- セマンティック要素を正しく使用したマークアップ

- 感覚的で分かりやすいUI
  - デザインには力を入れた
  - 統一感のあるデザイン

- レスポンシブデザイン
  - 画面幅によって見た目が崩れないようにした

- cssのコードはできる限り最小限に抑えた

- loading画面の実装
  - APIから都道府県データを取得するまで表示

- 改めて基礎から学習し直しながらコードを書いた

## 改善点
- 人口タイプを切り替えた時に一瞬グラフが消える
  - 切り替えるタイミングでpopulationDataのstateを更新して再レンダリングされるためであると予想

- categoriesのテストコードを書くことができなかった
