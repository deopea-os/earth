FROM node:18
ARG PORT
ARG DOTENV_KEY
ARG NODE_ENV

RUN test -n "$PORT"
RUN test -n "$DOTENV_KEY"
RUN test -n "$NODE_ENV"

WORKDIR /usr/local/earth

COPY package*.json ./
COPY apps/earth/package.json apps/earth/package.json
COPY apps/earth/.env.vault apps/earth/.env.vault

RUN npm -w apps/earth ci --omit="dev" --ignore-scripts

RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

COPY --chown=app:app apps/earth/dist apps/earth/dist
COPY --chown=app:app apps/earth/server apps/earth/server

ENV NODE_ENV=${NODE_ENV}
ENV DOTENV_KEY=${DOTENV_KEY}
ENV PORT=${PORT}

EXPOSE $PORT

CMD npm -w apps/earth start
