# Базовый образ для Node.js
FROM node:lts-buster

# Установка рабочего каталога
WORKDIR /app

# Копирование package.json для установки зависимостей
COPY package.json ./package.json

# Установка зависимостей
RUN npm cache clean --force
RUN npm instal

# Копирование остальных файлов
COPY . .

# Сборка приложения
RUN npm run build

# Публикация портов
EXPOSE 3000

# Запуск приложения
ENTRYPOINT ["npm", "run", "start"]