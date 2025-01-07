# Prisma の datasource url を動的に設定する

PrismaのConnection poolはdatasource urlに設定する必要があります
しかし、datasource urlはアプリケーション内で文字を結合することができず、環境変数設定前に結合しておく必要がある

コンテナ起動時にdatasource urlを生成することで、`pool_timeout`, `connection_limit` を個別の環境変数で設定できることを目的としている

# アプリケーションへのリクエスト方法

- データベースに登録する
```
curl -X POST -H "Content-Type: application/json" -d '{"id":1, "name":"taro", "email":"taro@example.com"}' http://host.docker.internal:3000/user
```

- 登録した内容を全件取得する
```
curl http://host.docker.internal:3000/user
```
