# Solución para cuando te cargas la carpeta root del usuario `/home/<username>`:
1. Acceder al boot del sistema `Shift+Esc` cuando inicia.
2. Elegir la opción de iniciar modo recovery.
3. Acceder a la consola root del sistema.
4. Ejecutar `mount -rw -o remount /` para volver a montar la carpeta raiz del sistema.
5. Ejecutar comand `passwd` para cambiar la contraseña del usuario root.
6. Reiniciar y en el panel de login pulsar `Ctrl+Alt+F1` para acceder a consola.
7. Login desde  consola como root.
8. Acceder a la carpeta home de los usuarios con `cd /home`
9. Ejecutar `mv ./<username> ./<username>.bak` para realizar una copia de la carpeta raiz del usuario.
10. Ejecutar `mkdir <username>` para crear una nueva carpeta raiz del usuario
11. Ejecutar `chown -R <username>:<username> /home/<username>` para darle acceso al usuario.
12. Mover todos los archivos que **no sean del sistema** de la carpeta `<username>.bak` a la carpeta `<username>`
