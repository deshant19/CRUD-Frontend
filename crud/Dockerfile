FROM node:12.2.0-alpine
WORKDIR /crud
ENV PATH /crud/node_modules/.bin:$PATH
COPY package.json /crud/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
CMD ["npm", "start"]
