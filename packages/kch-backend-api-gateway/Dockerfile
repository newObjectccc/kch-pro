FROM node:18

# kch-pro 根目录
WORKDIR /app

COPY . .

USER root
# RUN npm install -g pnpm
# RUN pnpm install
RUN npm install
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]