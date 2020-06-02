FROM node:13-buster-slim
WORKDIR /usr/node/app/
COPY package.json .
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start-dev"]