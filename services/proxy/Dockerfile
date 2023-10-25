FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8888
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]