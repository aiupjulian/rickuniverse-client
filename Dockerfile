FROM node:16 as build
ARG REACT_APP_API_URL
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV REACT_APP_API_URL $REACT_APP_API_URL
RUN REACT_APP_API_URL=${REACT_APP_API_URL} \
  npm run build

FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
