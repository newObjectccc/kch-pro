FROM node:18

# kch-pro 根目录
WORKDIR /app

COPY . .

USER root
RUN npm install -g pnpm
RUN pnpm install
RUN npm run build

EXPOSE 3000

RUN ["ll"]
CMD ["ll", "&&", "pnpm", "-F", "kch-backend", "start:prod"]