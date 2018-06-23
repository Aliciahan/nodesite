#!/bin/bash

ssh root@a-real.me "cd /root/nodesite && git pull && pm2 restart www"
