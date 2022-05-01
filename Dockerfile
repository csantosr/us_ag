FROM node:carbon-slim

# Create app directory
WORKDIR /us_ag

# Install app dependencies
COPY package.json /us_ag/
RUN npm install

# Bundle app source
COPY . /us_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
