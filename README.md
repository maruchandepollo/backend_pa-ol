# Backend - Sistema de Gestión de Pañol

API REST desarrollada para gestionar inventario y movimientos de productos en un sistema de pañol. Permite controlar stock en tiempo real, registrar entradas y salidas, y mantener trazabilidad de los movimientos.

---

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- mysql2
- Nodemon
- CORS
- Dotenv

---

## Estructura del proyecto

src/
  ├── config/        # Conexión a base de datos
  ├── models/        # Acceso a datos
  ├── controllers/   # Lógica de negocio
  ├── routes/        # Endpoints
  └── index.js       # Inicialización del servidor

---

## Instalación

1. Clonar repositorio

git clone <url-del-repo>
cd backend-panol

2. Instalar dependencias

npm install

3. Configurar variables de entorno

Crear archivo `.env`:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=panol

4. Ejecutar servidor

npm run dev

---

## Base de datos

Crear base de datos:

CREATE DATABASE panol;
USE panol;

Tablas:

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  modelo VARCHAR(100),
  cantidad INT
) ENGINE=InnoDB;

CREATE TABLE movimientos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  producto_id INT,
  tipo VARCHAR(20),
  cantidad INT,
  persona VARCHAR(100),
  area VARCHAR(100),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (producto_id) REFERENCES productos(id)
) ENGINE=InnoDB;

---

## Endpoints

### Productos

GET /productos  
Obtiene todos los productos

POST /productos  
Crea un producto

Body:

{
  "nombre": "Taladro",
  "modelo": "Bosch",
  "cantidad": 5
}

---

### Movimientos

POST /movimientos  
Registra entrada o salida de productos y actualiza el stock

Body:

{
  "producto_id": 1,
  "tipo": "salida",
  "cantidad": 2,
  "persona": "Juan",
  "area": "Operaciones"
}

---

## Lógica de negocio

- Las salidas descuentan stock
- Las entradas aumentan stock
- No se permite stock negativo
- Se utilizan transacciones para asegurar consistencia
- Cada movimiento queda registrado con fecha automática

---

## Estado del proyecto

En desarrollo

Actualmente incluye:
- CRUD de productos
- Registro de movimientos
- Control de stock en tiempo real
- Validaciones básicas
- Manejo de errores

Pendiente:
- Autenticación de usuarios
- Control de roles
- Filtros y reportes de movimientos
- Exportación de datos
- Deploy

---

## Notas

- Proyecto desarrollado como parte de práctica profesional
- Orientado a uso real en el área de operaciones y servicios
