FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install @types/node@16 --save-dev
RUN npm install -g @angular/cli@17.0.0

COPY . .

RUN if [ ! -f ngsw-config.json ]; then \
      ng add @angular/pwa --project=ng-fokus --skip-confirmation; \
    else \
      echo "ngsw-config.json already exists, skipping ng add @angular/pwa"; \
    fi

RUN ng build --configuration production 


FROM nginx:alpine

COPY --from=build /app/dist/ng-fokus/browser    /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
