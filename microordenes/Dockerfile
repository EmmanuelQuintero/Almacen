FROM node

EXPOSE 3003

WORKDIR /microordenes

COPY controllers /microordenes/controllers
COPY models /microordenes/models
COPY index.js /microordenes

RUN npm init --yes
RUN npm install express morgan mysql mysql2 axios

CMD node index.js
