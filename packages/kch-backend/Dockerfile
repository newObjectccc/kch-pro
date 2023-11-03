FROM node:18

# kch-pro 根目录
WORKDIR ../../

COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build:kch-backend

EXPOSE 3000

CMD ["npm", "run", "start"]