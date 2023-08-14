FROM ubuntu
USER root
RUN apt update -y
RUN apt install nodejs -y
RUN apt install npm -y
copy . .
RUN npm install
RUN chmod -R 777 node_modules
ENTRYPOINT ["npm","run","start"]
