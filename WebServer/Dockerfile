FROM node:slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]

#docker run --network pyaseexercises_mongo-net ase-nodeapp