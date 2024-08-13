#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

git init

# 部署到自定义域域名
echo 'horzhiyuan.com' > CNAME

git add -A
git commit -m 'deploy'

# 部署到 Github
git push -f git@github.com:ReformedCola/reformedcola.github.io.git master

cd -