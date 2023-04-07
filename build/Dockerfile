# FROM nginx
FROM reg.hrlyit.com/library/nginx
WORKDIR /stepin-template/stepin
ADD ./dist .
ADD ./build/nginx.conf /etc/nginx/conf.d/
EXPOSE 8080
