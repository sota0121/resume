---
title: 'Go に入門する'
excerpt: 'Go に入門する話'
coverImage: '/assets/cover/sota-lab-icon.png'
date: '2021-09-15'
author:
  name: Sota Masuda
  picture: '/assets/blog/authors/sota.jpeg'
ogImage:
  url: '/assets/cover/sota-lab-icon.png'
tags: ['dev', 'golang', 'learn']
slug: joinning-the-gopher
---

## きっかけ

職場で golang 製ツールの機能追加を任されて、いろいろと調べてSlackに垂れ流してたら以下のようなやりとりがあった。

わたし「golang わからんから勉強するー」

同僚　「お、ええやん。こんなところ勉強したらええんちゃう」

わたし「おけ、並列処理まわりコード書きながら調べてみるわー」

同僚　「 **Please Share it  !** 」

---

## 本記事の目的

1. まずはGo入門ということで、学習につかえそうなリンクをここにまとめる
2. 直近の目標（有りたい姿）を定義する
3. 直近のアクションプランを記載する

---

## 学習に使えそうなリンク集

こんなもんはだいたい誰かが作っている。

したがって、ここでは

- 参考資料としてリンク集を載せる
- その中から自分が使ってみようと思うものをピックアップして載せる

### ピックアップしたリンク集

以前から思っていたが公式サイト（一部有志のほぼ公式みたいなものもあるが）が充実しているみたいだ。Rustも同じでかなり learning resources が潤沢。

- **公式リソース：長くお世話になる**
    - [https://golang.org/](https://golang.org/)
    - [https://golang.org/doc/effective_go.html](https://golang.org/doc/effective_go.html)
- Sandbox / Playground / Samples
    - [http://go-tour-jp.appspot.com](http://go-tour-jp.appspot.com/#1)
    - [https://gobyexample.com/](https://gobyexample.com/)
        - jp : [https://oohira.github.io/gobyexample-jp/](https://oohira.github.io/gobyexample-jp/)
    - [http://play.golang.org/](http://play.golang.org/)
- **ハブ的なリソース：困ったらここ**
    - [https://github.com/golang/go/wiki](https://github.com/golang/go/wiki)
    - [http://tmrts.com/go-patterns/](http://tmrts.com/go-patterns/)
    - [https://go.dev/blog/pipelines](https://go.dev/blog/pipelines)
- **便利ツール：生産性を上げる**
    - [http://go-search.org/](http://go-search.org/)
    - [http://godoc.org/](http://godoc.org/)
    - [https://gowalker.org/](https://gowalker.org/)

### 参考：リンク集のリンク集

[Goを勉強しはじめた時にたどり着いたリンク集 - Qiita](https://qiita.com/taizo/items/8157b772d914f9929314)

[Go言語の初心者が見ると幸せになれる場所　#golang - Qiita](https://qiita.com/tenntenn/items/0e33a4959250d1a55045)

[Best Resources to Learn Golang (Go)](https://www.amarchenkova.com/posts/best-resources-to-learn-golang-go)

[Top 5 online resources to learn Go from scratch in 2020](https://golang.cafe/blog/my-5-favourite-online-resources-to-learn-golang-from-scratch.html)

---

## 直近の目標

- 基本的な制御構文を扱い、基本的なアルゴリズムを実装できる
- 簡単なCLIツールが作れる
- Goで簡単なAPIサーバーが作れる
- Goでビルトインパッケージを使ったテストが書ける
- 並行処理がある程度使いこなせる

---

## 直近のアクションプラン

1. Go で 簡単 cat コマンド ( -n option追加 )を実装
    1. topic : cli , fileio
2. Go で 簡単時計APIサーバーを実装 ( param : tz )
    1. topic : http , time
3. 上記プログラムのテストを書く
4. Go concurrency patterns を読む、そこから思いついたサンプルを作って理解度を確かめる
    1. [https://go.dev/blog/pipelines](https://go.dev/blog/pipelines)