FROM ubuntu:18.04 as basic_software

RUN apt update
RUN apt dist-upgrade -y
RUN apt install -y npm make g++ git
RUN npm install bower -g
RUN npm install gulp -g


FROM basic_software as build_deps

RUN mkdir /app
WORKDIR /app

ADD package.json /app
ADD package-lock.json /app
ADD bower.json /app

RUN npm install
RUN bower install --allow-root


FROM build_deps as price_calculator
WORKDIR /app
ADD . /app
RUN gulp

FROM nginx
COPY --from=price_calculator /app/dist/price_calculator.html /usr/share/nginx/html/

