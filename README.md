# nuxt-portfolio

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/taka1156/nuxt-portoflio/firebase%20deploy) ![test](https://github.com/taka1156/nuxt-portoflio/workflows/test/badge.svg?branch=add%2Fgithub-actions) [![Coverage Status](https://coveralls.io/repos/github/taka1156/nuxt-portoflio/badge.svg)](https://coveralls.io/github/taka1156/nuxt-portoflio) ![GitHub last commit](https://img.shields.io/github/last-commit/taka1156/nuxt-portoflio)

taka1156のポートフォリオサイトです(https://www.taka1156.site)

# 使用したもの

- Nuxt.js
- StoryBook
- HTML
- CSS
- JavaScript

素材

- [SVG PORN](https://svgporn.com/)
- [EC design](http://design-ec.com)
- [Google Material Icon](https://material.io/resources/icons/?style=baseline)

# 変更点など

- 2019/10/19
  github pages から Netlify に移行<br>

- 2020/2/5
  vue-typer廃止<br>

- 2020/3/14<br>
  画像に`.PNG`や`.png`など大文字・小文字が混じっていたので一回全ての画像を削除して追加し直した。<br>

- 2020/3/22<br>
  Home.vueとApp.vueに機能を追加したが、otherブランチに移動した。(あとで名前を変える)

- 2020/3/24<br>
  [【Vue.js】propsを使う時は命名に注意。サンプルコード有](https://dev83.com/vue-props/)を参考に変数を見直し。

- 2020/3/25<br>
  [Vue.jsでのレンダリングが遅い - teratail](https://teratail.com/questions/138888)を参考に画像の読み込みを変えようとしたがうまくいかなかった。<br>
  (原因は、マスタッシュ構文がチラ見えするのを防ぐらしいので画像は関係ないか、v-if、v-showの優先度が高いかのどちらか？)

- 2020/4/23<br>
  BootStrapを廃止したプロジェクトを別リポジトリに移動

- 2020/05/17<br>
  nuxt.js + microCMSの環境に移行<br>
  OGPの設定

- 2020/07/29<br>
 アトミックデザインを一部模倣

- 2020/07/29<br>
 StoryBook追加

- 2020/08/14<br>
  lighthouseで出たaltとlang要素が設定されてない警告を修正

- 2020/08/15<br>
  yarn.lockでコンフリクトが発生したためnode_modulesを消して再インストール。<br>
  ビルドコマンド修正<br>
  最終的に[Create New App using Yarn create nuxt-app works in dev mode but fail after being published to firebase hosting #7892](https://github.com/nuxt/nuxt.js/issues/7892#issuecomment-671956507)を参考に修正
