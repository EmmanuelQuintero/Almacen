FROM node

EXPOSE 3001

WORKDIR /microusuarios

COPY controllers /microusuarios/controllers
COPY models /microusuarios/models
COPY index.js /microusuarios

RUN npm init --yes
RUN npm install express morgan mysql mysql2 axios

CMD node index.js
