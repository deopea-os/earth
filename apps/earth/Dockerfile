# * Pruner * #
FROM node:18 AS pruner

WORKDIR /app

COPY ./ ./

# Prune
RUN npx -y turbo prune --scope="@deopea.os/earth" --docker
# * Pruner * #

# * Builder * #
FROM node:18 AS builder

WORKDIR /app

# Install
COPY .gitignore ./
COPY --from=pruner \
  # sources
  /app/out/json/ \
  /app/out/package-lock.json \
  # destination
  ./

# Install
RUN npm ci --omit="dev"

# Build
COPY --from=pruner /app/out/full/ ./
RUN npx turbo build --filter="@deopea.os/earth"
# * Builder * #

# * Runner * #
FROM node:18 AS runner

WORKDIR /app

# User
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

COPY --from=builder /app/apps/earth/package.json .
COPY --from=builder --chown=app:app /app/apps/earth/dist dist
COPY --from=builder --chown=app:app /app/apps/earth/server server

CMD npm start
