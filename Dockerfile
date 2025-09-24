FROM node:20.18.1-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
FROM node:20.18.1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8000

# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 8000

CMD ["npm", "run", "start"]