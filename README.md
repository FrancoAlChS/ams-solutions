# Prueba Técnica - Tienda de Dispositivos Móviles

Este proyecto es una prueba técnica para una tienda de dispositivos móviles. Utiliza Node.js v20 como entorno de ejecución, y se puede gestionar las dependencias con npm o pnpm.

## Índice

- [Prueba Técnica - Tienda de Dispositivos Móviles](#prueba-técnica---tienda-de-dispositivos-móviles)
  - [Índice](#índice)
  - [Descripción](#descripción)
  - [Requisitos](#requisitos)
  - [Cómo encender el proyecto](#cómo-encender-el-proyecto)
    - [1. Clonar el repositorio](#1-clonar-el-repositorio)
    - [2. Instalar las dependencias](#2-instalar-las-dependencias)
    - [3. Iniciar el proyecto](#3-iniciar-el-proyecto)
  - [Scripts Disponibles](#scripts-disponibles)

## Descripción

Este proyecto simula una tienda de dispositivos móviles donde los usuarios pueden ver diferentes productos y agregarlos al carrito.

## Requisitos

- **Node.js**: v20 (o superior)
- **npm** o **pnpm**: Se puede utilizar cualquiera de estas herramientas para gestionar las dependencias.

## Cómo encender el proyecto

Para comenzar a trabajar con el proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local usando Git:

```bash
git clone https://github.com/tu-usuario/tienda-moviles.git
```

### 2. Instalar las dependencias

Navega al directorio del proyecto e instala las dependencias con npm o pnpm:

Si estás utilizando npm:

```bash
cd tienda-moviles
npm install
```

Si prefieres usar pnpm:

```bash
cd tienda-moviles
pnpm install
```

### 3. Iniciar el proyecto

Una vez instaladas las dependencias, puedes encender el servidor de desarrollo con el siguiente comando:

Si estás usando npm:

```bash
npm start
```

Si estás usando pnpm:

```bash
pnpm start
```

Esto iniciará la aplicación y podrás acceder a la tienda desde tu navegador en:

```arduino
http://localhost:3000
```

## Scripts Disponibles

En el proyecto se encuentran algunos scripts útiles para el desarrollo y la gestión de la aplicación:

- npm start o pnpm start: Inicia el servidor en modo de producción.
- npm run test o pnpm test: Ejecuta las pruebas unitarias.
- npm run build o pnpm build: Realiza una compilación para producción.
- npm run lint o pnpm lint: Ejecuta el linter.
