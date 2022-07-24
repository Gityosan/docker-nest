FROM node:16.13.1-alpine
WORKDIR /api
COPY package*.json /api/
RUN npm i && \
  npm i -g @nestjs/cli
CMD ["npm", "run", "start:dev"]