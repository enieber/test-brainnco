FROM node:16-alpine as base

WORKDIR /app

COPY ./backend/package.json .
COPY ./backend/yarn.lock .

ARG SERVER_PORT
ENV SERVER_PORT "$SERVER_PORT"
EXPOSE "$SERVER_PORT"



# --------- Production ---------------
FROM base as production
ENV NODE_ENV=production
RUN yarn install --production
COPY ./backend .

CMD ["npm", "start"]



# --------- Develop -------------------
FROM base as dev
ENV NODE_ENV=development

RUN yarn global add nodemon
RUN yarn

COPY ./backend .

CMD ["npm", "run", "dev"]
