FROM node:14-alpine 
LABEL maintainer "Chatree Kunjai <soloman.tc@gmail.com>"
RUN mkdir -p /home/newconsensus/
WORKDIR /home/newconsensus/
COPY . /home/newconsensus/
ADD ./package.json /home/newconsensus/
RUN npm install
RUN npm cache clean --force
EXPOSE 4200 
CMD [ "npm", "run", "start" ]
