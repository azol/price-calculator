# Price Calculator

Hetzner Price Calculator

## Workflow for development with docker

```console
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

open http://127.0.0.1:3000 for price calculator

open http://127.0.0.2:3001 for Browser Sync's webinterface

## Workflow for production container

```console
docker-compose build
docker-compose up
```

open http://127.0.0.1:81/price_calculator.html for price calculator

## Workflow for local build

Assuming `gulp` is installed globally:

    $ npm install
    $ gulp serve
    $ gulp

Resulting file is placed in `dist` directory.

## Prepare release information

* update `releaseDate` and `recentChanges` in `changes.js`

## Share `price_calculator.html` with colleagues

* get `price_calculator.html` from production container and zip it:

```console
docker cp $(docker-compose ps -q price_calculator_web):/usr/share/nginx/html/price_calculator.html ./dist/
zip -j dist/price_calculator.zip dist/price_calculator.html
```

* share `html` file from ./dist/ with Arno Pirner via rocket chat
* upload `zip` file from ./dist to [iwiki](https://iwiki.hetzner.company/Datei:price_calculator.zip)


### Run in Docker

docker run --restart=always --name price_calculator -d -p 81:80 -v /home/alex/dockers/price_calculator:/usr/share/nginx/html:ro nginx
