FROM node:16.14.0
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
COPY . .
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x wait-for-it.sh
CMD ["npm", "start"]
