### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/colorpixng /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
