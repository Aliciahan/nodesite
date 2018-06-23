#!/bin/bash

ssh root@a-realme "cd /root/nodesite && git pull && pm2 restart www"
