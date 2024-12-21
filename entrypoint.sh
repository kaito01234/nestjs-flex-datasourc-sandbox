#!/bin/sh

# 環境変数を結合
export DATABASE_URL="${DB_PROTOCOL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?connection_limit=${DB_CONNECTION_LIMIT}&pool_timeout=${DB_POOL_TIMEOUT}"

# アプリケーションを起動
exec "$@"
