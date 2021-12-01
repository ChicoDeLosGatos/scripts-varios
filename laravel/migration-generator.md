# Generar modelos y migraciones desde una base de datos existente

1. Lanzar `composer require --dev "kitloong/laravel-migrations-generator"`.
2. Lanzar `composer require orangehill/iseed`
3. Asegurarse de que la ruta que hay en la variable `path` de `vendor/orangehill/iseed/src/config/config.php` es la misma que la de los seeders de tu aplicación. Si no lo es, actualizarla.
4. Lanzar `composer require reliese/laravel`.
5. Añadir el proveedor `Reliese\Coders\CodersServiceProvider::class` en `config/app.php`.
6. Lanzar `php artisan vendor:publish --tag=reliese-models`.
7. Asegurarse de que la información de conexión en el archivo `.env` es correcta.
8. Lanzar `php artisan code:models` para generar los modelos.
9. Lanzar `php artisan migrate:generate` para generar las migraciones.
10. Lanzar `php artisan seed users,roles,user_roles --force` para generar las semillas (en este caso seria de las tablas users, roles y user_roles).
