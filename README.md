# Proyecto Frontend en React Native con Expo

¡Bienvenido a nuestro proyecto de frontend en React Native con Expo! Este documento te guiará para clonar el repositorio, instalar las dependencias necesarias y poner en marcha la aplicación en tu dispositivo o emulador.

## Requisitos

Asegúrate de tener instalados los siguientes programas en tu computadora:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (se instala automáticamente con Node.js)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (puedes instalarlo globalmente con `npm install -g expo-cli`)

## Clonar el Repositorio

Para comenzar, necesitas clonar el repositorio a tu máquina local. Abre una terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/tu-usuario/Estructuras-de-datos---Front.git
```
Recuerda reemplazar tu-usuario con tu nombre de usuario de Github.

## Instalar las dependencias
Una vez clonado el repositorio, ingresa a este e instala las dependencias:
```bash
cd Estructuras-de-datos---Front.git
npm install
```

## Ejecuta la aplicación
Con las dependencias instaladas, solo resta iniciar la aplicacion:
```bash
expo start
```

## Configuracion de variable de entorno
Al ejecutar el comando anterior, se te desplegaran varias opciones para trabajar en el codigo, tales como un emulador de Ios o Andriod, o, como se utilizó en este desarrollo, por medio de la aplicación de expo para Android.
Descarga la aplicación Expo Go en la PlayStore, y escanea el codigo Qr que se genero al ejecutar el comando expo start.
Antes de escanear el codigo Qr, es importante que crees un archivo config.env.js en el root del proyecto. y en este agrega lo siguiente:
```bash
export const BASE_URL = 'http://Ip-proporcionada-por-expo:3000/api/v1'
```
Al ejecutar el expo start, ademas del Qr, te generara un enlace expo://direccion. Copia esa dirección en el config.env.js y reemplaza el puerto (El número que aparece despues de los :), por el puerto del backend. En este caso el puerto 3000
