FROM node:slim as build-stage
RUN apt update
RUN mkdir /usr/app
COPY . /usr/app
WORKDIR /usr/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build

FROM nginx:1.26
#RUN apt update
#RUN apt install snapd -y
#RUN apt remove certbot
# RUN snap install --classic certbot -y
# RUN ln -s /snap/bin/certbot /usr/bin/certbot
RUN rm -rf /etc/nginx/sites-enabled
RUN rm -rf /var/www
RUN rm -rf /etc/nginx/nginx.config
RUN mkdir /etc/letsencrypt
RUN mkdir /etc/letsencrypt/live
RUN mkdir /etc/letsencrypt/live/lbrty.space
COPY fullchain.pem /etc/letsencrypt/live/lbrty.space
COPY privkey.pem /etc/letsencrypt/live/lbrty.space
COPY privkey.pem /etc/letsencrypt/live/lbrty.space
COPY cert.pem /etc/letsencrypt/live/lbrty.space
COPY chain.pem /etc/letsencrypt/live/lbrty.space
#RUN rm -rf /etc/letsencrypt/
COPY options-ssl-nginx.conf /etc/letsencrypt
COPY ssl-dhparams.pem /etc/letsencrypt
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*

COPY default /etc/nginx/sites-enabled
COPY nginx.conf /etc/nginx
COPY --from=build-stage /usr/app/build /var/www

ENTRYPOINT ["nginx", "-g", "daemon off;"]




#COPY package.json package.json
#COPY package-lock.json package-lock.json
#COPY . .