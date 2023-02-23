---
title: 'Python import の仕組みを理解する'
excerpt: 'Python import の仕組みを理解する話'
coverImage: '/assets/cover/sota-lab-icon.png'
date: '2021-10-14'
author:
  name: Sota Masuda
  picture: '/assets/blog/authors/sota.jpeg'
ogImage:
  url: '/assets/cover/sota-lab-icon.png'
tags: ['dev', 'learn', 'python']
slug: understanding-python-import-structure
---

## この記事のモチベーション

- ある程度大きなプログラムをPythonで書こうとするとき、プログラムをパッケージやモジュールに分割して実装していくことはよくある話
- ただ、そのときにPythonのimport 関連のエラーによく遭遇し、そのたびに検索して、暫定対策を実施している。
- この記事を通してPythonのImport機能に関する情報を整理して、今後PythonのImport周りの問題を迅速に解決できるようにする

## 基本

基本的な事柄についてはこの記事に丁寧に書かれている

[Pythonのモジュールのimportの仕組みについて勉強する - delhi09の勉強日記](https://kamatimaru.hatenablog.com/entry/2020/06/02/130146)

簡単にまとめると

- Import時に検索対象となるパスは `sys.path` に登録されている
- `sys.path` には以下のパスが登録される
    - Pythonインタプリタを起動したスクリプトが存在するディレクトリの絶対パス
    - `PYTHONPATH` という環境変数に設定したディレクトリのパス（ `:` で連結する）
    - 各Python環境でデフォルトで設定されているパス（標準ライブラリなどが存在している場所と思われる）
    - 公式ドキュメント：[https://docs.python.org/ja/3/library/sys.html?highlight=sys path#sys.path](https://docs.python.org/ja/3/library/sys.html?highlight=sys%20path#sys.path)
- `__init__.py` は Python3.3 以降では必須ではなくなった（PEP420によるもの [参考](https://www.python.org/dev/peps/pep-0420/#packaging-implications) ）

## 実例

上記記事を同じく参照しながら記載する。最もよく見るパターンとして以下の構成が考えられる。これは正しく機能するとのこと。

```
/root
  - main.py
  - /module/
    - hello.py
```

```python
from module.hello import hello

hello()
```

```python
def hello():
    print("Hello World!")
```

```bash
$ python main.py
Hello World!
```

別モジュールは、起動スクリプトより下の階層に配置することが推奨されている。

[https://docs.python.org/ja/3.9/tutorial/modules.html#](https://docs.python.org/ja/3.9/tutorial/modules.html#)

よくやらかすパターンが、以下のようにメインスクリプト用ディレクトリとモジュール用ディレクトリを分けてしまうケース。これだと `sys.path` に読み込みたいモジュールのディレクトリが登録されないので、 `from ..xxx.yyy import xxx` みたいな記述で対処しなければならない。

が、これで結構ハマることがあるし、Pythonらしくない書き方ではないかと思う。

```
/root
  - main/
    - main.py
  - /module/
    - hello.py
```