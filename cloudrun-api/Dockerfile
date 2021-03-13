FROM node:12-buster AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
RUN npm run build


FROM node:12-buster-slim AS runner

WORKDIR /opt/app
COPY --from=builder /app/dist ./
COPY package.json package-lock.json ./
RUN npm ci --production
USER node
EXPOSE 3000
CMD ["node", "/opt/app/index.js"]
