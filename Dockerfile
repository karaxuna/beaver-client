FROM node:21-alpine

# Define working dir
WORKDIR /usr/src/app

# Copy deps
COPY package*.json ./
RUN true

# Install deps
RUN npm i --loglevel notice --unsafe-perm

# Build
COPY ./index.js .

# CMD
CMD [ "npm", "start" ]
