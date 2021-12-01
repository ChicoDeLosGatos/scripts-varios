# Solución para cuando plesk te dice que no tienes alguna herramienta

En este caso en particular, se necesitaba el acceso desde consola a comandos de composer (que a su vez usa comandos de php), y a npm.

## Paso 1: Lo que ya tenemos
Ver si los tenemos en nuestro entorno. Para ello ejecutar
```
ls /usr/bin | grep lo_que_busques
```
Si aparecen resultados, significa que el recurso que buscas es accesible, pero si al intentar usarlo te aparece un mensaje tal como este:
```
...: No such file or directory in Plesk.
```
significa que probablemente el recurso tiene una dependencia directa de otro recurso que no tienes en el entorno. En mi caso, composer estaba en el entorno, pero PHP no.

## Paso 2: Lo que necesitamos
Averiguar qué versión de PHP tenemos instalada en el servidor (no sea que la liemos), en mi caso, la 7.4. Adicionalmente, comprobé que tampoco tenía ni node ni npm en mi entorno, así que localicé cuales eran los que necesitaba.

## Paso 3: La resolución
Finalmente, una vez localizadas las versiones de los recursos que necesitamos, en plesk, si tienes instalados los recursos, se encontrarán en la siguiente dirección: `/opt/plesk/tu_recurso`.

De este modo, procedemos a crear enlaces simbólicos de los recursos que necesitamos y los crearemos desde la dirección donde están los recursos que te acabo de facilitar, hacia la dirección que hemos consultado en el Paso 1. De ese modo ejecutando:
```
ln -s /opt/plesk/php/7.4/bin/php /usr/bin/php
ln -s /opt/plesk/node/12/bin/node /usr/bin/node
ln -s /opt/plesk/node/12/bin/npm /usr/bin/npm
```
Solucionamos el problema de dependencias que teníamos con el recurso de composer, pudiendo utilizarlo a partir de ahora y, además, también podremos utilizar los comandos del gestor de paquetes de node, así como del propio node.