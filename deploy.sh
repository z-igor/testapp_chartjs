set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy Test-App-with-vue-chartjs-material-design'

git push -f git@github.com:z-igor/testapp_chartjs.git master:gh-pages

cd -