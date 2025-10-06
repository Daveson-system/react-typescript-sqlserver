# 🔧 Backend API - Node.js + Express + SQL Server

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![SQL Server](https://img.shields.io/badge/SQL_Server-MSSQL-CC2927?style=flat&logo=microsoft-sql-server)

Backend RESTful API para aplicación web con Node.js, Express y Microsoft SQL Server.

---

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Scripts](#scripts)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Base de Datos](#base-de-datos)
- [Desarrollo](#desarrollo)

---

## 📝 Descripción

API RESTful construida con Node.js y Express que proporciona servicios backend para la aplicación React. Se conecta a una base de datos Microsoft SQL Server para gestión de datos.

---

## 🛠️ Tecnologías

| Paquete     | Versión | Propósito                       |
| ----------- | ------- | ------------------------------- |
| **express** | 5.1.0   | Framework web para Node.js      |
| **mssql**   | 11.0.1  | Driver de Microsoft SQL Server  |
| **cors**    | 2.8.5   | Middleware para CORS            |
| **dotenv**  | 17.2.2  | Gestión de variables de entorno |
| **morgan**  | 1.10.1  | Logger HTTP para desarrollo     |
| **nodemon** | 3.1.10  | Auto-restart en desarrollo      |

---

## 📦 Requisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **SQL Server** 2019+ o SQL Server Express
- **Windows, Linux o macOS**

---

## 🚀 Instalación

### 1. Navegar al directorio del backend

```bash
cd api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del directorio `api`:

```bash
touch .env  # Linux/Mac
# o
New-Item .env  # Windows PowerShell
```

---

## ⚙️ Configuración

### Archivo `.env`

Configura las siguientes variables de entorno:

```env
# Configuración del servidor
PORT=3000
NODE_ENV=development

# Configuración de SQL Server
DB_SERVER=localhost
DB_DATABASE=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_PORT=1433

# Opciones de conexión (opcional)
DB_ENCRYPT=true
DB_TRUST_SERVER_CERTIFICATE=true

# JWT (cuando se implemente)
JWT_SECRET=tu_secreto_super_seguro_aqui
JWT_EXPIRES_IN=24h

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Configuración de SQL Server

#### Opción 1: SQL Server local

```env
DB_SERVER=localhost
DB_DATABASE=mi_aplicacion
DB_USER=sa
DB_PASSWORD=TuContraseñaSegura123
```

#### Opción 2: SQL Server Express

```env
DB_SERVER=localhost\\SQLEXPRESS
DB_DATABASE=mi_aplicacion
DB_USER=sa
DB_PASSWORD=TuContraseñaSegura123
```

#### Opción 3: Azure SQL Database

```env
DB_SERVER=tu-servidor.database.windows.net
DB_DATABASE=tu_base_de_datos
DB_USER=tu_usuario@tu-servidor
DB_PASSWORD=TuContraseña123
DB_ENCRYPT=true
```

---

## 📜 Scripts

| Script         | Comando       | Descripción                               |
| -------------- | ------------- | ----------------------------------------- |
| **Desarrollo** | `npm run dev` | Inicia servidor con nodemon (auto-reload) |
| **Producción** | `npm start`   | Inicia servidor en modo producción        |
| **Test**       | `npm test`    | Ejecuta tests (pendiente implementar)     |

### Ejemplos

```bash
# Desarrollo (recomendado)
npm run dev

# Producción
npm start
```

---

## 📁 Estructura del Proyecto

```
api/
├── src/                        # Código fuente (pendiente)
│   ├── config/                 # Configuración de la app
│   │   └── database.js         # Configuración de SQL Server
│   ├── controllers/            # Controladores
│   │   ├── authController.js   # Lógica de autenticación
│   │   └── userController.js   # Lógica de usuarios
│   ├── routes/                 # Definición de rutas
│   │   ├── authRoutes.js       # Rutas de autenticación
│   │   └── userRoutes.js       # Rutas de usuarios
│   ├── models/                 # Modelos de datos
│   │   └── User.js             # Modelo de usuario
│   ├── middlewares/            # Middlewares personalizados
│   │   ├── auth.js             # Middleware de autenticación
│   │   └── errorHandler.js     # Manejo de errores
│   ├── utils/                  # Utilidades
│   │   └── helpers.js          # Funciones auxiliares
│   └── app.js                  # Configuración de Express
│
├── .env                        # Variables de entorno (no incluir en git)
├── .env.example                # Ejemplo de variables de entorno
├── .gitignore                  # Archivos ignorados por git
├── package.json                # Dependencias y scripts
└── README.md                   # Este archivo

```

---

## 🌐 API Endpoints

### Autenticación

| Método | Endpoint             | Descripción             | Body                            |
| ------ | -------------------- | ----------------------- | ------------------------------- |
| POST   | `/api/auth/register` | Registrar nuevo usuario | `{ username, email, password }` |
| POST   | `/api/auth/login`    | Iniciar sesión          | `{ username, password }`        |
| POST   | `/api/auth/logout`   | Cerrar sesión           | -                               |
| GET    | `/api/auth/me`       | Obtener usuario actual  | -                               |

### Usuarios

| Método | Endpoint         | Descripción               | Autenticación |
| ------ | ---------------- | ------------------------- | ------------- |
| GET    | `/api/users`     | Listar todos los usuarios | ✅ Requerida  |
| GET    | `/api/users/:id` | Obtener usuario por ID    | ✅ Requerida  |
| PUT    | `/api/users/:id` | Actualizar usuario        | ✅ Requerida  |
| DELETE | `/api/users/:id` | Eliminar usuario          | ✅ Requerida  |

### Health Check

| Método | Endpoint      | Descripción                   |
| ------ | ------------- | ----------------------------- |
| GET    | `/health`     | Verificar estado del servidor |
| GET    | `/api/health` | Verificar conexión a BD       |

---

## 🗄️ Base de Datos

### Esquema Inicial

#### Tabla: Users

```sql
CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(50) UNIQUE NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    password NVARCHAR(255) NOT NULL,
    firstName NVARCHAR(50),
    lastName NVARCHAR(50),
    role NVARCHAR(20) DEFAULT 'user',
    isActive BIT DEFAULT 1,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);
```

#### Tabla: Sessions (opcional)

```sql
CREATE TABLE Sessions (
    id INT PRIMARY KEY IDENTITY(1,1),
    userId INT FOREIGN KEY REFERENCES Users(id),
    token NVARCHAR(255) UNIQUE NOT NULL,
    expiresAt DATETIME NOT NULL,
    createdAt DATETIME DEFAULT GETDATE()
);
```

### Scripts de Base de Datos

Crear archivo `database/schema.sql`:

```sql
-- Crear base de datos
CREATE DATABASE MiAplicacion;
GO

USE MiAplicacion;
GO

-- Tabla de usuarios
CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(50) UNIQUE NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    password NVARCHAR(255) NOT NULL,
    firstName NVARCHAR(50),
    lastName NVARCHAR(50),
    role NVARCHAR(20) DEFAULT 'user',
    isActive BIT DEFAULT 1,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);

-- Índices
CREATE INDEX idx_users_username ON Users(username);
CREATE INDEX idx_users_email ON Users(email);

-- Datos de prueba
INSERT INTO Users (username, email, password, firstName, lastName, role)
VALUES
    ('admin', 'admin@example.com', 'hash_password_here', 'Admin', 'User', 'admin'),
    ('user1', 'user1@example.com', 'hash_password_here', 'Test', 'User', 'user');
```

---

## 👨‍💻 Desarrollo

### Configurar Conexión a SQL Server

Crear archivo `src/config/database.js`:

```javascript
const sql = require("mssql");
require("dotenv").config();

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || 1433),
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === "true",
    enableArithAbort: true,
  },
};

let pool = null;

async function getConnection() {
  try {
    if (pool) {
      return pool;
    }
    pool = await sql.connect(config);
    console.log("✅ Conectado a SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ Error conectando a SQL Server:", error);
    throw error;
  }
}

module.exports = { getConnection, sql };
```

### Crear Servidor Express Básico

Crear archivo `src/app.js`:

```javascript
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

// Rutas
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Error interno del servidor",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
```

### Ejemplo de Controlador

Crear `src/controllers/userController.js`:

```javascript
const { getConnection, sql } = require("../config/database");

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT id, username, email, firstName, lastName, role FROM Users WHERE isActive = 1"
      );

    res.json({
      success: true,
      data: result.recordset,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Error obteniendo usuarios",
    });
  }
};

// Obtener usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(
        "SELECT id, username, email, firstName, lastName, role FROM Users WHERE id = @id AND isActive = 1"
      );

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Usuario no encontrado",
      });
    }

    res.json({
      success: true,
      data: result.recordset[0],
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Error obteniendo usuario",
    });
  }
};
```

---

## 🔒 Seguridad

### Mejores Prácticas

- ✅ Usar variables de entorno para credenciales
- ✅ Implementar autenticación con JWT
- ✅ Hash de contraseñas con bcrypt
- ✅ Validar entrada de datos
- ✅ Usar prepared statements para evitar SQL injection
- ✅ Implementar rate limiting
- ✅ Usar HTTPS en producción
- ✅ Configurar CORS apropiadamente

### Paquetes Recomendados

```bash
npm install bcrypt jsonwebtoken helmet express-rate-limit express-validator
```

---

## 🧪 Testing

_Pendiente de implementación_

Frameworks recomendados:

- **Jest** - Framework de testing
- **Supertest** - Testing de APIs HTTP

---

## 📊 Monitoreo y Logs

### Morgan (Logger HTTP)

Ya configurado para desarrollo. Muestra:

- Método HTTP
- URL
- Código de estado
- Tiempo de respuesta

### Logs Personalizados

Recomendado: **Winston** para logs más robustos

```bash
npm install winston
```

---

## 🚀 Despliegue

### Variables de Entorno en Producción

Asegúrate de configurar:

```env
NODE_ENV=production
PORT=3000
DB_SERVER=tu-servidor-produccion
DB_ENCRYPT=true
```

### Consideraciones

- Usar un proceso manager como **PM2**
- Configurar reverse proxy con **Nginx**
- Implementar SSL/TLS
- Configurar backups de BD
- Monitoreo con **New Relic** o **DataDog**

---

## 🔜 Próximos Pasos

- [ ] Implementar estructura de carpetas completa
- [ ] Crear endpoints de autenticación
- [ ] Implementar JWT
- [ ] Agregar validación de datos
- [ ] Crear middleware de autenticación
- [ ] Implementar manejo de errores global
- [ ] Agregar tests unitarios
- [ ] Documentar API con Swagger
- [ ] Implementar rate limiting
- [ ] Configurar logging robusto

---

## 📚 Recursos

- [Express Documentation](https://expressjs.com/)
- [MSSQL Package](https://www.npmjs.com/package/mssql)
- [SQL Server Documentation](https://docs.microsoft.com/en-us/sql/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

**Última actualización:** Octubre 6, 2025
