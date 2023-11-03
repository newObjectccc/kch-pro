FROM node:18

# kch-pro 根目录
WORKDIR ../../

COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm -F kch-backend build

EXPOSE 3000

CMD ["pnpm", "-F", "kch-backend", "start:prod"]