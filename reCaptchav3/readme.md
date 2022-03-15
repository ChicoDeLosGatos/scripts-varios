# ReCaptcha v3 
## Paso 1
Accedemos a la [consola de Google](https://console.cloud.google.com/projectselector2/security/recaptcha) y creamos un nuevo proyecto o seleccionamos uno existente.

## Paso 2
Creamos una clave, introduciendo un nombre visisble para identificarla, eligiendo la plataforma en la que se va a usar (en este caso "sitio web") y añadiendo los dominios en los que se usará el reCaptcha. Podemos configurar el reCaptcha de la manera que más nos convenga.

## Paso 3
Guardamos el token `key` y la clave `secret`, y añadimos el código `.js` en el frontend, y el código `.php` en el backend. 
