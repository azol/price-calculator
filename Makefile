all: build deploy

deploy:
	rsync dist/price_calculator.html /home/alex/dockers/price_calculator/

build:
	gulp
