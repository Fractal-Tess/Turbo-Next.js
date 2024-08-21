FROM node:20.16.0-alpine3.20 AS base
 
FROM base AS runner
WORKDIR /app
 
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY ./apps/analytics/next.config.js .
COPY ./apps/analytics/package.json .
COPY ./apps/analytics/.next/standalone .
COPY ./apps/analytics/.next/static ./apps/analytics/.next/static
COPY ./apps/analytics/public ./apps/analytics/
 
ENV HOST=0.0.0.0
ENV PORT=4000
ENV FQDN=localhost:4000

CMD node apps/analytics/server.js
