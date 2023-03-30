# FROM nginx
FROM nginx
WORKDIR /stepin-template
ADD ./dist .
ADD ./build/nginx.conf /etc/nginx/conf.d/
EXPOSE 8080
