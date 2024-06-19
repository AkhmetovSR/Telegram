FROM node:lts-slim
WORKDIR /tg/
COPY public/ /tg/public
COPY src/ /tg/src
COPY package.json/ /tg/
RUN npm install
CMD ["($env:HTTPS = 'true') -and (npm start)"]