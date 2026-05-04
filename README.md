# Backend - Sistema de Gestión de Pañol

API REST desarrollada para gestionar el inventario y movimientos de productos en un sistema de pañol. Este backend permite registrar, consultar y administrar productos, sirviendo como base para una aplicación web de control de inventario.

---

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- Nodemon (entorno de desarrollo)
- CORS
- Dotenv

---

## Estructura del proyecto

src/
  ├── config/        # Configuración de base de datos
  ├── controllers/   # Lógica de negocio
  ├── models/        # Acceso a datos (queries)
  ├── routes/        # Definición de endpoints
  └── index.js       # Punto de entrada del servidor

---

## Instalación

1. Clonar repositorio

git clone <url-del-repo>
cd backend-panol

2. Instalar dependencias

npm install

3. Configurar variables de entorno

Crear archivo `.env` en la raíz:

PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=panol
DB_PASSWORD=tu_password
DB_PORT=5432

4. Ejecutar servidor

npm run dev

---

## Base de datos

Crear base de datos en PostgreSQL:

CREATE DATABASE panol;

Tabla inicial:

CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  modelo TEXT,
  cantidad INT
);

---

## Endpoints disponibles

GET /productos

POST /productos

Body ejemplo:

{
  "nombre": "Taladro",
  "modelo": "Bosch X",
  "cantidad": 10
}

---

## Estado del proyecto

En desarrollo

Actualmente incluye:
- Servidor Express configurado
- Conexión a base de datos PostgreSQL
- CRUD básico de productos (parcial)

Pendiente:
- Gestión de movimientos (entradas/salidas)
- Validación de stock
- Autenticación de usuarios
- Control de roles
- Deploy

---

## Notas

- Proyecto desarrollado como parte de práctica profesional.
- Enfocado en resolver necesidades reales del área de operaciones y servicios.
