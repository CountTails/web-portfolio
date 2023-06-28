FROM nginx:alpine

COPY public/ /app/public

COPY ./nginx.conf /etc/nginx/nginx.conf
