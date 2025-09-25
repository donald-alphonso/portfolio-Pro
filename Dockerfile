FROM node:20.18.1-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
FROM node:20.18.1-alpine AS runner

WORKDIR /app

RUN npm install -g serve

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/out ./out
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE $PORT

CMD ["sh", "-c", "serve -s out -l $PORT"]