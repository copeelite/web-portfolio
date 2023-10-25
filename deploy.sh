#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
scp -r  build/* fmeng18@20.84.84.136:/var/www/20.84.84.136/
echo "Deployment complete"
