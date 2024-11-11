# Базовый образ для Python
FROM python:3.10-slim

# Установка рабочего каталога
WORKDIR /app

# Копирование requirements.txt для установки зависимостей
COPY requirements.txt /app/

# Установка зависимостей
RUN pip install -r requirements.txt

# Копирование остальных файлов
COPY . /app/

# Запуск приложения
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]