FROM node:18 

WORKDIR /usr/App

COPY . .

EXPOSE 3000
# required for docker desktop port mapping


CMD ["npm", "start"]