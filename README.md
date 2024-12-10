# Palindromo challenge

Muestra si la palabra o frase ingresadas por el usuario son palindromas o no.

## Configuracion

instalar los siguientes paquetes dentro de la carpeta "client".

```bash
npm install axios react-toastify autoprefixer
```
configuracion de package.json (client)
```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.9",
    "next": "15.0.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-toastify": "^10.0.6"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "15.0.4",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16"
  }
}
```

## Iniciar el proyecto

```
npm run dev
```

## Configuracion (backend)
instalar los siguientes paquetes npm dentro de la carpeta "server".
```
npm install cors dotenv express morgan nodemon uuid.
```
configuracion de package.json (server)
```
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js --ignore client"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.7",
    "uuid": "^11.0.3"
  }
}
```

## Iniciar servidor (backend)
```
npm run dev.
```
