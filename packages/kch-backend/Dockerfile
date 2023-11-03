FROM node:18

# kch-pro 根目录
WORKDIR ../../

COPY . .

USER root
RUN npm install -g pnpm
RUN pnpm install
RUN npm run build:kch-backend

EXPOSE 3000

CMD ["pnpm", "-F", "kch-backend", "start:prod"]