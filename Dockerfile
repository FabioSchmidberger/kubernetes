FROM node:boron

COPY application.js application.js
RUN npm install http && npm install dockerode

CMD ["node application.js"]
