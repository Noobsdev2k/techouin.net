#!/bin/bash

# Kiểm tra xem tệp .env.example có tồn tại không
if [ ! -f .env.example ]; then
    echo "Tệp .env.example không tồn tại."
    exit 1
fi

# Sao chép tệp .env.example thành .env
cp .env.example .env

# Mảng chứa các biến môi trường cần điền giá trị
variables=(
    "MONGO_INITDB_ROOT_USERNAME=root"
    "MONGO_INITDB_ROOT_PASSWORD=admin"
    "MONGO_PORT=27017"
    "MONGO_DATABASE=mermartvn"
    "POSTGRESQL_USERNAME=root"
    "POSTGRESQL_PASSWORD=admin"
    "POSTGRESQL_DATABASE=mermartvn"
    "POSTGRESQL_PORT=5432"
    "KAFKA_PORT=9092"
    "CLIENT_PORT=3000"
    "ADMIN_PORT=5173"
    "NGINX_PORT=80"
    "PROXY_PORT=8888"
    "NODE_ENV=\"production\""
)


# Điền giá trị cho từng biến môi trường trong tệp .env
for variable in "${variables[@]}"; do
    sed -i "s|^${variable%=*}=.*|${variable}|g" .env
done

cp client/.env.example client/.env

variables=(
    "SERVER_PORT=8888"
    "CLIENT_PORT=localhost:8888/api"
)
for variable in "${variables[@]}"; do
    sed -i "s|^${variable%=*}=.*|${variable}|g" client/.env
done

cp services/auth/.env.example services/auth/.env

variables=(
    ## Config server port
    "PORT=8080"
    "UV_THREADPOOL_SIZE=4"
    "SERVICE_NAME=ecommerce"
    "NODE_ENV=development"

    ## Config mongodb
    "MONGO_ENABLE=true"
    "MONGO_HOST=mongo"
    "MONGO_PORT=27017"
    "MONGO_USERNAME=admin"
    "MONGO_PASSWORD=admin"
    "MONGO_DATABASE=techouin.net"
)
for variable in "${variables[@]}"; do
    sed -i "s|^${variable%=*}=.*|${variable}|g" services/auth/.env
done

echo "mongodb://admin:admin@mongo:27017/techouin.net?authSource=admin" >> services/auth/.env

## store
cp services/store/.env.example services/store/.env

variables=(
    ## Config server port
    "PORT=8080"
    "UV_THREADPOOL_SIZE=4"
    "SERVICE_NAME=ecommerce"
    "NODE_ENV=development"

    ## Config mongodb
    "MONGO_ENABLE=true"
    "MONGO_HOST=mongo"
    "MONGO_PORT=27017"
    "MONGO_USERNAME=admin"
    "MONGO_PASSWORD=admin"
    "MONGO_DATABASE=techouin.net"
)
for variable in "${variables[@]}"; do
    sed -i "s|^${variable%=*}=.*|${variable}|g" services/auth/.env
done

echo "mongodb://admin:admin@mongo:27017/techouin.net?authSource=admin" >> services/auth/.env

# Kiểm tra xem docker-compose có được cài đặt không
if ! command -v docker-compose &> /dev/null; then
    echo "docker-compose chưa được cài đặt."
    exit 1
fi

# Chạy docker-compose
docker-compose up -d

echo "Đã chạy docker-compose với tệp .env đã điền dữ liệu."