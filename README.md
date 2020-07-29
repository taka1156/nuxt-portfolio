# nuxt-portfolio

taka のポートフォリオサイトです(https://nuxt-takasportfolio.netlify.com)

# 使用したもの

- Nuxt.js
- StoryBook
- HTML
- CSS
- JavaScript

CDN

- google font
- google Material Icon
- ~~BootStrap4~~

素材

- SVG PORN (https://svgporn.com/)
- EC design (http://design-ec.com)

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
