# Price Calculator

Hetzner Price Calculator

## Workflow

Assuming `gulp` and `bower` are installed globally:

    $ npm install
    $ bower install
    $ gulp serve
    $ gulp

Resulting file is placed in `dist` directory.

## Run in Docker

docker run --restart=always --name price_calculator -d -p 81:80 -v /home/alex/dockers/price_calculator:/usr/share/nginx/html:ro nginx
