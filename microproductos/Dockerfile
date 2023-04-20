FROM node

EXPOSE 3002

WORKDIR /microproductos

COPY controllers /microproductos/controllers
COPY models /microproductos/models
COPY index.js /microproductos

RUN npm init --yes
RUN npm install express morgan mysql mysql2 axios

CMD node index.js
