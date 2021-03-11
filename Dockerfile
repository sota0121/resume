FROM node:alpine

WORKDIR /scripts

COPY . .

# root ユーザーでは開発しない
RUN adduser -D app && \
    addgroup app app && \
    chown -v -R app:app /scripts

# apkはalpineのパッケージマネージャ
RUN apk update && \
    apk add --no-cache git curl && \
    apk add --no-cache  chromium && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

# ホットリロード
ENV CHOKIDAR_USEPOLLING=true
RUN yarn install

USER app

EXPOSE 8080

CMD ["/bin/sh"]
