FROM node:carbon-slim

# Create app directory
WORKDIR /us_ag

# RUN apk add --no-cache bash
RUN wget -O /bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /bin/wait-for-it.sh

# Install app dependencies
COPY package.json /us_ag/
RUN npm install

# Bundle app source
COPY . /us_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
