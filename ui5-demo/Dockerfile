FROM node:12

RUN npm install -g http-server && npm install -g @ui5/cli
COPY src src
RUN cd src && npm install -y && ui5 build
EXPOSE 8080
WORKDIR src/dist
CMD ["http-server"]
