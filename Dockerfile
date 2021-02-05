FROM ubuntu:20.04 as basic_software

ENV TZ=Europe/Kaliningrad
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update
RUN apt dist-upgrade -y
RUN apt install -y npm make g++ git
RUN npm install gulp -g


FROM basic_software as build_deps

RUN mkdir /app
WORKDIR /app

ADD package.json /app
ADD package-lock.json /app

RUN npm install


FROM build_deps as price_calculator
WORKDIR /app
ADD . /app
RUN gulp

FROM nginx:1.18.0
COPY --from=price_calculator /app/dist/price_calculator.html /usr/share/nginx/html/

