FROM node:16.14.0
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . ./

ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT

ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_API_PORT=${REACT_APP_API_PORT}

RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "build"]
