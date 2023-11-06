FROM node:18

# kch-pro 根目录
WORKDIR /app

COPY . .

USER root
RUN npm install -g pnpm
RUN pnpm install
RUN npm run build

EXPOSE 80

CMD ["pnpm", "-F", "kch-backend-api-gateway", "start:prod"]