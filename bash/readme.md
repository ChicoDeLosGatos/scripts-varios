# Utilidades para bash en Linux

## Procedimiento up

**Descripción:** Mueve todos los archivos .html a una  nueva carpeta que se llamará como el primer argumento que se introduzca al llamar a up.
***Nota:*** *Es util para las practicas con simuladores de Arquitectura e Ingenieria de Computadores, en 3º de Ingeniería Informática.*

## Sintaxis

```
  up pruebas
```
Esto creará una carpeta pruebas en la carpeta en la que estés y todos los archivos .html generados en esta carpeta se moverán a la nueva carpeta pruebas.
De este modo:

```
  mips-m -d c -c pnt1 -a 5 -f code.s
  up code0
```
Guardará todos los resultados generados por el simulador `mips-m` al procesar el archivo `code.s` en una carpeta llamada `code0`.
