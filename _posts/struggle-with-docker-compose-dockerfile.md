---
title: 'やや複雑な構造を持つディレクトリにおける compose+Dockerfile の書き方でハマった話'
excerpt: 'やや複雑な構造を持つディレクトリにおける compose+Dockerfile の書き方でハマった話'
coverImage: '/assets/cover/sota-lab-icon.png'
date: '2021-10-14'
author:
  name: Sota Masuda
  picture: '/assets/blog/authors/sota.jpeg'
ogImage:
  url: '/assets/cover/sota-lab-icon.png'
tags: ['dev', 'docker']
slug: struggle-with-docker-compose-dockerfile
---


## この記事の概要

- 本格的なプロダクト開発環境において `Dockerfile` と `docker-compose.yml` を記述するときは、細かい仕様をよく理解していないとハマる
- 今回はDockerのビルドコンテキストという概念を正しく理解していなかったためにハマった話を記述する

## Note

こういうフォルダ構成

```bash
grpc-services/
  - services-1/
	  - microservice-a/
	    - docker/Dockerfile
	    - (*.py)
	    - run-server.sh
	  - microservice-b/
      - docker/Dockerfile
	    - (*.py)
	    - run-server.sh

microservice-controller/
  - docker/Dockerfile
  - (*.py)
  - run-server.sh

protos/
  - ms-proto/
    - xxxx.proto
  - build.sh
  - clean.sh

docker-compose.yml
```

docker-compose.yml の build セクション書くときのヒント

[docker-compose.ymlのbuild設定はとりあえずcontextもdockerfileも埋めとけって話 - Qiita](https://qiita.com/sam8helloworld/items/e7fffa9afc82aea68a7a)

Dockerfileを記述するときは、 docker-compose.ym の services.service.build.context で記載した箇所がカレントディレクトリと考えてCOPYコマンドなどを記述する。

結論こうなった

```yaml
version: "3"

services:
  microservice-controller:
    build:
      context: .
      dockerfile: ./microservice_controller/docker/Dockerfile

  microservice-a:
    build:
      context: .
      dockerfile: ./grpc-services/services-1/microservice-a/docker/Dockerfile

  microservice-b:
    build:
      context: .
      dockerfile: ./grpc-services/services-1/microservice-b/docker/Dockerfile
```

```docker
FROM python:3.9-buster as build
RUN apt-get -y update && apt-get -y install python3 python3-pip
RUN pip install grpcio-tools==1.41.0 python-json-logger==2.0.1

COPY ./protos /protos
WORKDIR /protos
RUN ./build.sh

WORKDIR /
COPY ./microservice_controller /app
RUN cp -r /protos/gen-py /app
WORKDIR /app
CMD ["./run-server.sh"]
```

```docker
FROM python:3.9-buster as build
RUN apt-get -y update && apt-get -y install python3 python3-pip
RUN pip install grpcio-tools==1.41.0 python-json-logger==2.0.1 datadog==0.41.0

COPY ./protos /protos
WORKDIR /protos
RUN ./build.sh

WORKDIR /
COPY ./grpc-services/services-1/microservice-a/ /app
RUN cp -r /protos/gen-py /app
WORKDIR /app
CMD ["/app/run-server.sh"]
```

あと、直接的には関係ないけど、改善した項目として `ADD` —> `COPY` に変えた

以下参考

[DockerfileにてなぜADDよりCOPYが望ましいのか - Qiita](https://qiita.com/momotaro98/items/bf34eef176cc2bdb6892)

更に、今回の話とは直接関係ないけど、以下を参照して突貫工事で作ったDockerfileを見直したい

特に、不用意にイメージが肥大化していそうなところ、共通化すべきところを共通化できていないところなど

[https://matsuand.github.io/docs.docker.jp.onthefly/develop/develop-images/dockerfile_best-practices/#ビルドコンテキストの理解](https://matsuand.github.io/docs.docker.jp.onthefly/develop/develop-images/dockerfile_best-practices/#%E3%83%93%E3%83%AB%E3%83%89%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%AE%E7%90%86%E8%A7%A3)