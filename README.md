# Unchained News 🟩
> Aplicación para la optimización de lectura de noticias digitales y libre de sesgos.
---
## Descripción 
El presente código forma parte de una constelación de servicios que, en conjunto, trabajan para conseguir el objetivo deseado.
En particular, la presente aplicación, es la parte visual e interactiva (el frontend). A través de esta, el usuario final de la aplicación puede navegar entre las pantallas y ejecutar diferentes acciones. Estas consultas seran enviadas por este servicio al backend, y se muestra al usuario la respuesta final de dicho proceso.


## Pre-requisitos

Este programa fue diseñado para ser utilizado con las siguientes especificaciones:
* [Node 18.16.0](https://nodejs.org/es/blog/release/v18.16.0)
* [npm 9.5.1](https://www.npmjs.com/package/npm/v/9.5.1)
* [React 18.2.0](https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022)

Si bien la utilización de otras versiones pueden permitir la ejecución del programa, no se puede asegurar su correcto funcionamiento.

Además, todos los servicios backends deben estar incializados y ejecutándose correctamente.

## Instalación

Use la librería de npm para asegurarse para instalar las dependencias necesarias mediante el comando a continuación.

```bash
npm install
```

Esto descarga todas las dependencias y las alamacena en la carpeta `node_modules` del directorio raíz. 

## Ejecución

En una terminal, ejecute el archivo principal con el siguiente comando (asegúrese de estar en la carpeta raíz del proyecto).

```bash
npm start
```

Se abrirá por default un navegador web con la aplicación ejecutandose en el servidor `http://localhost` (probablemente en el puerto `3000`).

## Uso

Para comenzar a utilizar los servicios de la aplicación debe crearse un usuario. 
Automáticamente, la aplicación debería incializarse en la pantalla de login, pero en caso de no hacerlo, dirigase manualmente a la siguiente dirección (suponiendo que el puerto utilizado sea `3000`):
```
http://localhost:3000/login
```
Una vez realizado el registro, se debe realizar el login correspondiente a la aplicación y posteriormente se puede navegar sin problemas por la misma


## Autores
Caneva, Gianfranco

## Contacto

Por cualquier sugerencia, problema o inconveniente comunicarse con `gfocaneva@gmail.com`