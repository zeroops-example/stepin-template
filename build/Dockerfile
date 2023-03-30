# FROM nginx
FROM reg.hrlyit.com/library/nginx
WORKDIR /stepin-template
ADD ./dist .
ADD ./build/nginx.conf /etc/nginx/conf.d/
EXPOSE 8080
