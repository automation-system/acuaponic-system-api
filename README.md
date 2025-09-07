# Generar prisma
$ npx prisma generate

# Aplica migraciones
$ npx prisma migrate deploy


# Levanta en producción
$ npm run build
$ npm run start:prod

# Ejecutando en segundo plano
$ nohup npm run start:prod > api.log 2>&1 &
# nohup → evita que el proceso muera al cerrar SSH.
# > api.log 2>&1 → redirige logs a un archivo (api.log).
# & → lo manda al background.

# Para verificar que está corriendo:
$ ps aux | grep node

# Para matar el proceso:
kill -9 <PID>