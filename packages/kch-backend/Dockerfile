FROM node:18

# kch-pro 根目录
WORKDIR /app

COPY . .

USER root
RUN npm install -g pnpm
RUN pnpm install
RUN ls
RUN npm run build

EXPOSE 3000

CMD ["pnpm", "-F", "kch-backend", "start:prod"]