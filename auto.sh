#!/bin/sh
# 先cd到ui-components文件
cd ui-components/
# 然后拉代码
git pull origin master
# 然后执行npm i & build
npm i
npm build
# 最后重启nginx
/usr/local/nginx/sbin/nginx -s reload