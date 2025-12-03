# Руководство по деплою Swiss Tech Solutions

## Текущая инфраструктура

### Сервер
- **Провайдер:** Timeweb Cloud
- **IP:** 89.19.214.13
- **OS:** Ubuntu 24.04 LTS
- **Тариф:** Cloud Server (2 vCPU, 2GB RAM, 30GB NVMe)
- **Стоимость:** ~499₽/мес

### Установленное ПО
- Node.js 20.x (via NodeSource)
- npm
- PM2 (process manager)
- Nginx (reverse proxy)
- Git

---

## Быстрый деплой (обновление)

### Команда одной строкой
```bash
ssh root@89.19.214.13 "cd /var/www/swiss-tech && git pull && npm install && npm run build && pm2 restart swiss-tech"
```

### Пошагово
```bash
# 1. Подключение к серверу
ssh root@89.19.214.13

# 2. Переход в директорию проекта
cd /var/www/swiss-tech

# 3. Получение изменений
git pull

# 4. Установка зависимостей (если есть новые)
npm install

# 5. Сборка проекта
npm run build

# 6. Перезапуск приложения
pm2 restart swiss-tech
```

---

## Первичная установка (с нуля)

### 1. Подготовка сервера

```bash
# Обновление системы
apt update && apt upgrade -y

# Установка необходимых пакетов
apt install -y curl git nginx

# Установка Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Проверка версий
node -v  # v20.x.x
npm -v   # 10.x.x

# Установка PM2
npm install -g pm2
```

### 2. Клонирование проекта

```bash
# Создание директории
mkdir -p /var/www
cd /var/www

# Клонирование репозитория
git clone https://github.com/Zemlyaclick/swiss-tech.git
cd swiss-tech

# Установка зависимостей
npm install

# Сборка проекта
npm run build
```

### 3. Настройка PM2

```bash
# Запуск приложения
pm2 start npm --name "swiss-tech" -- start

# Автозапуск при перезагрузке
pm2 startup systemd
pm2 save

# Проверка статуса
pm2 status
pm2 logs swiss-tech
```

### 4. Настройка Nginx

```bash
# Создание конфигурации
nano /etc/nginx/sites-available/swiss-tech
```

**Содержимое файла:**
```nginx
server {
    listen 80;
    server_name 89.19.214.13;  # Заменить на домен

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активация конфигурации
ln -s /etc/nginx/sites-available/swiss-tech /etc/nginx/sites-enabled/

# Проверка конфигурации
nginx -t

# Перезапуск Nginx
systemctl restart nginx
systemctl enable nginx
```

---

## Настройка домена

### 1. DNS записи (в GoDaddy/другом регистраторе)

| Тип | Имя | Значение | TTL |
|-----|-----|----------|-----|
| A | @ | 89.19.214.13 | 600 |
| A | www | 89.19.214.13 | 600 |

### 2. Обновление Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # ... остальная конфигурация
}
```

### 3. SSL сертификат (Let's Encrypt)

```bash
# Установка Certbot
apt install -y certbot python3-certbot-nginx

# Получение сертификата
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Автообновление (добавляется автоматически)
certbot renew --dry-run
```

---

## Мониторинг

### PM2 команды

```bash
# Статус всех приложений
pm2 status

# Логи приложения
pm2 logs swiss-tech

# Логи в реальном времени
pm2 logs swiss-tech --lines 100

# Мониторинг ресурсов
pm2 monit

# Информация о приложении
pm2 info swiss-tech

# Перезапуск
pm2 restart swiss-tech

# Остановка
pm2 stop swiss-tech

# Удаление из PM2
pm2 delete swiss-tech
```

### Nginx логи

```bash
# Access логи
tail -f /var/log/nginx/access.log

# Error логи
tail -f /var/log/nginx/error.log
```

### Системные ресурсы

```bash
# Использование диска
df -h

# Использование памяти
free -h

# Процессы
htop
```

---

## Troubleshooting

### Приложение не запускается

```bash
# Проверить логи PM2
pm2 logs swiss-tech --lines 200

# Проверить порт
lsof -i :3000

# Убить процесс на порту
kill -9 $(lsof -t -i:3000)

# Перезапустить
pm2 restart swiss-tech
```

### Nginx ошибки

```bash
# Проверить конфигурацию
nginx -t

# Проверить статус
systemctl status nginx

# Перезапустить
systemctl restart nginx
```

### Проблемы с памятью

```bash
# Очистка npm кэша
npm cache clean --force

# Удаление node_modules и переустановка
rm -rf node_modules
npm install
```

### Сборка падает (Out of Memory)

```bash
# Увеличить swap
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Сделать постоянным
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
```

---

## Backup

### Ручной backup

```bash
# Создание архива
cd /var/www
tar -czvf swiss-tech-backup-$(date +%Y%m%d).tar.gz swiss-tech/

# Скопировать на локальную машину
scp root@89.19.214.13:/var/www/swiss-tech-backup-*.tar.gz ./
```

### Автоматический backup (cron)

```bash
crontab -e
```

Добавить:
```
0 3 * * * tar -czvf /backups/swiss-tech-$(date +\%Y\%m\%d).tar.gz /var/www/swiss-tech
```

---

## Полезные алиасы

Добавить в `~/.bashrc` на сервере:

```bash
alias st-logs='pm2 logs swiss-tech'
alias st-restart='pm2 restart swiss-tech'
alias st-deploy='cd /var/www/swiss-tech && git pull && npm install && npm run build && pm2 restart swiss-tech'
alias st-status='pm2 status'
```

Активировать:
```bash
source ~/.bashrc
```

---

## Чеклист деплоя

- [ ] Код запушен в main ветку
- [ ] `git pull` на сервере
- [ ] `npm install` (если есть новые зависимости)
- [ ] `npm run build` успешно завершен
- [ ] `pm2 restart swiss-tech`
- [ ] Проверить сайт в браузере
- [ ] Проверить логи на ошибки

---

*Последнее обновление: 3 декабря 2025*
