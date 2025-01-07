FROM node:22.12.0-slim
WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y openssl

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run prisma:generate

EXPOSE 3000

CMD ["node", "dist/main"]
