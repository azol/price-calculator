deploy:
	rsync dist/price_calculator.html 192.168.7.2:/var/www/html/

build:
	gulp
