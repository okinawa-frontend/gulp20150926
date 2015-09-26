# OkinawaFrontend 2015/09/26
[2015-09-22 05:56]

## 今日の方針
- Gulp入門
	- インストールから簡単なgulpの操作まで行います
- 幾つか課題を用意してみたので、暇な人はどんどん進んでもらうか、もくもく勉強していただくか周りの支援をお願いします！
- 注意事項
	- windowsではあまり試してないのでうまくいかない部分があると思います。お声がけください。
	- 僕もあまり慣れてはいませんので、間違っているところなどありましたらご指摘ください。
	- せっかくお集まりいただきましたので、お互い助け合いでやっていきましょう
- 聞きたいこと
    - デザイナ/エンジニアの比率
    - JavaScriptやsassはつかってますか？
    - OSの比率
        - コマンドライン使ってますか？

## Gulpとは
- タスクランナーツール
- 基本的にはGruntと同じく、Node.js上で動作するタスク自動化のためのビルドツールです。ソースファイルのminify（圧縮）やLESSなどメタ言語のコンパイルなどを実行できます。
 設定ファイルは、とてもシンプルに記述でき、可読性も高くなっています。そして、Node.jsのStream API（データの流れを抽象化するインターフェース）を使って並列実行されるため（同期実行も可能です）、素早く動作します。
 拡張性にも優れており、Gruntと同じように独自プラグインを定義することも可能です。  
[便利なGruntの弱点を補うgulp.jsのインストールと使い方](http://www.atmarkit.co.jp/ait/articles/1408/19/news035.html)

## Gruntとの比較
同じタスクランナーであるGruntもありますが、gulpのほうが後発です。
- Gruntよりコードが短くてすむ
- Gruntより動作が早い
- pluginはGrunt(5,000位)よりは少ない(Gulpは1,800位)
- 情報量はGruntのほうがちょっと上。
- 厳格な運用ルールを決めるならGruntのほうが良さそう。

## Gulpができること
[gulp.js その1 概要・基本](http://qiita.com/oreo3@github/items/e69818837a13003a10bc)
- Webサーバー/ライブリロード（gulp-connec）
- ライブリロードのみ（gulp-livereload）
- Sass、Compass、CoffeeScript、Jadeなどのコンパイル
- HTMLからJade,markdown,プレーンテキストに変換（gulp-html2xxxx）
- CSS中に点在したメディアクエリーをまとめる（gulp-combine-media-queries）
- CSSベンダープリフィックスの管理（gulp-autoprefixer）*指定でエラーが出るらしい
- CSSプロパティ並び順整理（gulp-csscomb）
- コードの連結（gulp-concat）
- コードの圧縮（gulp-minify-html,）
- コードの整形（gulp-prettify,）
- CSSスプライト生成
- 画像圧縮（gulp-imagemin）
- markdownをPDFに変換（gulp-markdown-pdf）
- 画像サイズ変換（gulp-image-resize）
- コード構文チェック Lint
- ファイル書き出し
- 圧縮/解凍（gulp-zip,gulp-unzip,gulp-untar）
- FTPアップロード（gulp-ftp,gulp-sftp）
- 文字コード変換
- 実体参照変換（gulp-entity-convert）
- DataURI化（gulp-base64,gulp-css-base64,gulp-data-uri）
- Bower（gulp-bower-files）
- JSON,YAML,XML,PLIST,CSV の相互変換（gulp-convert,gulp-csv2json,gulp-xml2json）
- HTMLテーブルをCSVに変換（gulp-table2csv）
- サイトマップ作成（gulp-sitemap-files）
- sitemap.xml生成（gulp-sitemap）
- 通知センターに通知（gulp-notify）
- Webページのスクリーンショット撮影（gulp-webshot）
- Angular関連

## Gulpを動かすには

### node.js
 - Node.jsとはサーバーサイドJavaScriptの実行環境です。2009年にRyan Dahl氏によって開発され、Google Chrome用JavaScript実行エンジン（V8）で動作します。

### npm
- 「npm」とはNode.jsのモジュールを管理するためのツールです。Node.jsにはさまざまなモジュールが公開されており、npmを使うことで簡単にインストールできます。また、自分でモジュールを作成して公開する場合にもnpmを使用します。

[いまさら聞けないNode.jsの基礎知識とnpm、Gulpのインストール](http://www.atmarkit.co.jp/ait/articles/1501/09/news040.html)

## work1
gulpを使うにはnode.js(npm)が必要です。
node.jsをインストールしてみましょう。

https://nodejs.org/en/download/

### npmリポジトリについて

## work2
gulpのインストールと作業ディレクトリの初期化

- gulpのグローバルインストール
```
npm gulp -g install
```

- ディレクトリの初期化
```
npm init
```

- gulpのローカルインストール
```
npm gulp install --save-dev
```

### npmの構成について
```
.
├── gulpfile.js
├── node_modules
└── package.json

```

## work3
gulpの機能とファイルのコピー


### gulpの機能
* src指定
```
gulp.src(globs[, options])
```
* コピー先指定
```
gulp.dest(path)
```
* task指定
```
gulp.task(name[, deps], fn)
```
* 連続処理
```
gulp.pipe(fn)
```
* task実行
```
gulp.run(tasks…[, cb])
```
* ファイルの変更を監視
```
gulp.watch(glob, cb)
```

**src→destへファイルをコピーしてみましょう**


## work4
**hamlとsassを変換してみよう**
- hamlとは  
http://unitopi.com/html-haml/
- sassとは  
http://codezine.jp/article/detail/7695

- 使うモジュール
	- haml変換
		```
		npm install gulp-haml --save-dev
		
		```
	- sass変換
		```
		npm install gulp-sass --save-dev
		
		```


## work5
**ファイルの変更に応じて自動でコンパイルさせよう**

- 使うモジュール
	- ファイルの変更を監視
	```
	gulp.watch(glob, cb)
	```
	- 失敗してもtaskを停止させない(altJSの変換など)
	```
	npm install gulp-pulmber --save-dev
	```

## work6
**ページのパフォーマンスを上げる(css/画像の圧縮)**

- 使うモジュール
	- 画像圧縮
	```
	npm install gulp-imagemin --save-dev
	npm install imagemin-pngquant --save-dev
	```
	- CSSをまとめる
	```
	npm install gulp-concat-css --save-dev 
	```
	- CSSを小さく
	```
	npm install gulp-minify-css --save-dev
	```

## work7
**CSSスタイルガイドの作成**  
[CSSスタイルガイド - FrontNote](http://frontainer.com/frontnote/)  
[github](https://github.com/frontainer/frontnote)

- 使うモジュール
	- スタイルガイド（frontnote）
	```
	npm install gulp-frontnote --save-dev
	```

## work8
**ローカルでウェブサーバーを立ち上げて同期させる**
- 使うモジュール
	- gulp-webserver
	- gulp-browser-sync

## work9
**AltJSのコンパイルとrequire**
- 使うモジュール
	- gulp-coffee
	- browserify

[gulpとBrowserifyでJSをビルドしてみた](http://qiita.com/seanchas_t/items/96fbb63e5fe36f94a42e)

## 参考
- [便利なGruntの弱点を補うgulp.jsのインストールと使い方](http://www.atmarkit.co.jp/ait/articles/1408/19/news035.html)
- [Gulp.js入門 – コーディングを10倍速くする環境を作る方法まとめ](http://liginc.co.jp/web/tutorial/117900)
- [gulp.js その1 概要・基本](http://qiita.com/oreo3@github/items/e69818837a13003a10bc)
- [osscafe/gulp-cheatsheet](https://github.com/osscafe/gulp-cheatsheet)

