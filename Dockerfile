FROM node:14.1.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY .babelrc ./

COPY src/ src/

RUN yarn build

FROM node:14.1.0-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json /usr/src/app/yarn.lock ./

RUN yarn install --production

COPY --from=builder /usr/src/app/dist/ dist/

CMD ["node", "dist/index.js"]