FROM node:13-buster-slim
WORKDIR /usr/node/app/
COPY package.json .
RUN npm install
EXPOSE 3001
COPY . .
CMD ["node", "server.js"]