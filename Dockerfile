# 1. Construcción de la app
FROM node:24-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código y generar el build
COPY . .
RUN npm run build

# 2. Servir con Nginx
FROM nginx:alpine

# Copiar los archivos de build al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Arrancar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
