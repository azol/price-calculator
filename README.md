# Price Calculator

Hetzner Price Calculator

## Workflow for development with docker

```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

open http://127.0.0.1:3000 for price calculator
open http://127.0.0.2:3001 for Browser Sync's webinterface

## Workflow for pruction container

```
docker-compose build
docker-compose up
```

open http://127.0.0.1:81/price_calculator.html for price calculator

## Workflow for local build

Assuming `gulp` and `bower` are installed globally:

    $ npm install
    $ bower install
    $ gulp serve
    $ gulp

Resulting file is placed in `dist` directory.

### Run in Docker

docker run --restart=always --name price_calculator -d -p 81:80 -v /home/alex/dockers/price_calculator:/usr/share/nginx/html:ro nginx
