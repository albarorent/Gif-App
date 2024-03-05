# Etapa de construcción
FROM node:lts-alpine as build-stage

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de la aplicación
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Compilar la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:1.21.6-alpine as production-stage

# Copiar los archivos compilados de la etapa de construcción a la imagen de nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar el servidor nginx en modo daemon
CMD ["nginx", "-g", "daemon off;"]
