FROM node:18

WORKDIR /usr/local/earth

COPY package*.json ./
COPY apps/earth/package.json apps/earth/package.json

RUN npm -w apps/earth ci --omit="dev" --ignore-scripts

RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

COPY --chown=app:app apps/earth/dist apps/earth/dist
COPY --chown=app:app apps/earth/server apps/earth/server

CMD npm -w apps/earth start
