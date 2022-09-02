FROM node:16.17.0

ENV APP_ROOT /var/www

RUN mkdir -p $APP_ROOT

RUN apt-get update && \
  apt-get install -y git bash && \
  npm i -g create-react-app jshint

# COPY package.json $APP_ROOT
# COPY package-lock.json $APP_ROOT

WORKDIR $APP_ROOT

# RUN npm install
COPY . $APP_ROOT

EXPOSE 8888

CMD [ "npm", "run", "dev" ]
