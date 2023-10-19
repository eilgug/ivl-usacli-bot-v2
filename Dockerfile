FROM node:18-bullseye-slim

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

RUN apt-get update \
    && apt-get upgrade -y

COPY . ./application

WORKDIR /application

RUN if ["$NODE_ENV" = "production"]; then npm i --omit=dev; else npm i && npm i -g nodemon; fi

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start; else npm run dev; fi"]
