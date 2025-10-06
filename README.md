# 🏢 React + TypeScript + SQL Server - Full Stack Application

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![SQL Server](https://img.shields.io/badge/SQL_Server-MSSQL-CC2927?style=flat&logo=microsoft-sql-server)

Aplicación web full stack con frontend en React + TypeScript + Material-UI y backend en Node.js + Express + SQL Server.

---

## 📋 Descripción General

Este proyecto es una aplicación web moderna que combina:

- **Frontend:** React 19 con TypeScript, Material-UI v7, React Router v7 y Vite
- **Backend:** Node.js con Express, MSSQL para SQL Server y CORS
- **Base de datos:** Microsoft SQL Server

---

## 🏗️ Estructura del Proyecto

```
node-sql-server/
├── api/                        # Backend - API REST con Node.js y Express
│   ├── src/                    # Código fuente del backend
│   └── package.json            # Dependencias del backend
│
├── front/                      # Frontend - React + TypeScript + Material-UI
│   ├── public/                 # Archivos estáticos
│   ├── src/                    # Código fuente del frontend
│   │   ├── app/                # Módulos de la aplicación
│   │   │   ├── auth/           # Autenticación
│   │   │   ├── dashboard/      # Dashboard
│   │   │   └── home/           # Página de inicio
│   │   ├── api/                # Servicios API
│   │   ├── assets/             # Recursos estáticos
│   │   ├── base/               # Componentes base
│   │   ├── constants/          # Constantes
│   │   ├── context/            # Context API
│   │   ├── core/               # Funcionalidades core
│   │   ├── http/               # Cliente HTTP
│   │   ├── repositories/       # Capa de datos
│   │   ├── App.tsx             # Componente principal
│   │   └── main.tsx            # Punto de entrada
│   ├── DOCS.md                 # Documentación del frontend
│   ├── package.json            # Dependencias del frontend
│   └── vite.config.ts          # Configuración de Vite
│
└── README.md                   # Este archivo

```

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología   | Versión | Propósito               |
| ------------ | ------- | ----------------------- |
| React        | 19.1.1  | Biblioteca de UI        |
| TypeScript   | 5.9.3   | Lenguaje tipado         |
| Material-UI  | 7.3.4   | Componentes de interfaz |
| React Router | 7.9.3   | Enrutamiento SPA        |
| Vite         | 7.1.7   | Build tool              |
| ESLint       | 9.36.0  | Linting                 |

### Backend

| Tecnología | Versión | Propósito             |
| ---------- | ------- | --------------------- |
| Node.js    | -       | Runtime de JavaScript |
| Express    | 5.1.0   | Framework web         |
| MSSQL      | 11.0.1  | Driver de SQL Server  |
| CORS       | 2.8.5   | Manejo de CORS        |
| Morgan     | 1.10.1  | Logger HTTP           |
| dotenv     | 17.2.2  | Variables de entorno  |
| Nodemon    | 3.1.10  | Hot reload (dev)      |

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

### General

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git**

### Base de Datos

- **Microsoft SQL Server** 2019 o superior
- O **SQL Server Express** (versión gratuita)

---

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Daveson-system/react-typescript-sqlserver.git
cd react-typescript-sqlserver
```

### 2. Configurar el Backend (API)

```bash
cd api

# Instalar dependencias
npm install

# Crear archivo .env con las credenciales de la base de datos
# Copia el archivo .env.example y ajusta las variables
```

**Configuración del archivo `.env`:**

```env
# Configuración de SQL Server
DB_SERVER=localhost
DB_DATABASE=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_PORT=1433

# Puerto del servidor
PORT=3000
```

### 3. Configurar el Frontend

```bash
cd ../front

# Instalar dependencias
npm install
```

---

## 🎯 Scripts Disponibles

### Frontend (desde `/front`)

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo en http://localhost:5173

# Producción
npm run build            # Compila la aplicación para producción
npm run preview          # Previsualiza la build de producción

# Calidad de código
npm run lint             # Ejecuta ESLint
```

### Backend (desde `/api`)

```bash
# Desarrollo
npm run dev              # Inicia servidor con nodemon (hot reload)

# Producción
npm start                # Inicia servidor en modo producción

# Testing
npm test                 # Ejecuta tests (si están configurados)
```

---

## 🚦 Ejecución del Proyecto

### Modo Desarrollo (Recomendado)

**Terminal 1 - Backend:**

```bash
cd api
npm run dev
# El servidor se iniciará en http://localhost:3000
```

**Terminal 2 - Frontend:**

```bash
cd front
npm run dev
# La aplicación se abrirá en http://localhost:5173
```

### Modo Producción

**Backend:**

```bash
cd api
npm start
```

**Frontend:**

```bash
cd front
npm run build
npm run preview
```

---

## 🌐 Rutas de la Aplicación

### Frontend

| Ruta     | Componente         | Descripción            |
| -------- | ------------------ | ---------------------- |
| `/`      | Redirect → `/home` | Redirección automática |
| `/home`  | HomePage           | Página principal       |
| `/login` | LoginPage          | Inicio de sesión       |

### Backend (API Endpoints)

_En desarrollo - endpoints pendientes de implementación_

| Método | Endpoint          | Descripción               |
| ------ | ----------------- | ------------------------- |
| POST   | `/api/auth/login` | Autenticación de usuario  |
| GET    | `/api/users`      | Obtener lista de usuarios |
| POST   | `/api/users`      | Crear nuevo usuario       |

---

## 🎨 Características del Frontend

### Sistema de Autenticación

- ✅ Página de login con diseño moderno
- ✅ Formulario con validación
- ✅ Toggle para mostrar/ocultar contraseña
- ✅ Tema personalizado en azul marino
- ✅ Diseño responsive

### Arquitectura

- ✅ Separación de componentes de presentación y lógica
- ✅ Estructura modular por features
- ✅ TypeScript para type safety
- ✅ Componentes reutilizables

### Estilo y UX

- ✅ Material-UI v7 con tema personalizado
- ✅ Gradientes y animaciones suaves
- ✅ Iconos de Material Design
- ✅ Diseño adaptable a móviles

---

## 📚 Documentación Adicional

Para más detalles sobre cada parte del proyecto:

- **Frontend:** Ver [front/DOCS.md](./front/DOCS.md)
- **Backend:** _Documentación en desarrollo_

---

## 🔒 Variables de Entorno

### Backend (`.env`)

```env
# Base de datos
DB_SERVER=localhost
DB_DATABASE=nombre_bd
DB_USER=usuario
DB_PASSWORD=contraseña
DB_PORT=1433

# Servidor
PORT=3000
NODE_ENV=development

# JWT (cuando se implemente)
JWT_SECRET=tu_secreto_super_seguro
JWT_EXPIRES_IN=24h
```

### Frontend

_Las variables de entorno del frontend se configurarán cuando se conecte con la API_

---

## 🔜 Roadmap

### En Desarrollo

- [ ] Configurar conexión de base de datos en backend
- [ ] Implementar endpoints de autenticación
- [ ] Conectar frontend con backend
- [ ] Implementar Context API para estado global
- [ ] Agregar manejo de errores

### Próximas Características

- [ ] Dashboard principal
- [ ] CRUD de usuarios
- [ ] Gestión de roles y permisos
- [ ] Integración con JWT
- [ ] Tests unitarios y de integración
- [ ] Documentación de API con Swagger
- [ ] Docker y Docker Compose
- [ ] CI/CD pipeline

---

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                    Frontend (React)                  │
│  ┌─────────────┐  ┌──────────┐  ┌──────────────┐   │
│  │  Components │  │  Routes  │  │  State Mgmt  │   │
│  └─────────────┘  └──────────┘  └──────────────┘   │
│                         │                            │
└─────────────────────────┼────────────────────────────┘
                          │ HTTP/REST
┌─────────────────────────┼────────────────────────────┐
│                    Backend (Node.js)                 │
│  ┌─────────────┐  ┌──────────┐  ┌──────────────┐   │
│  │   Routes    │→ │Controllers│→ │   Services   │   │
│  └─────────────┘  └──────────┘  └──────────────┘   │
│                                        │             │
└────────────────────────────────────────┼─────────────┘
                                         │ MSSQL
┌────────────────────────────────────────┼─────────────┐
│                 SQL Server Database                  │
│  ┌─────────────┐  ┌──────────┐  ┌──────────────┐   │
│  │   Tables    │  │  Views   │  │  Procedures  │   │
│  └─────────────┘  └──────────┘  └──────────────┘   │
└──────────────────────────────────────────────────────┘
```

---

## 🤝 Contribución

Este es un proyecto privado. Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commits

- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan código)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

---

## 📝 Licencia

Este proyecto es privado y propietario.

---

## 👤 Autor

**David Ccolque Quispe**

- GitHub: [@Daveson-system](https://github.com/Daveson-system)
- Repositorio: [react-typescript-sqlserver](https://github.com/Daveson-system/react-typescript-sqlserver)
- Branch: `daveson`

---

## 📞 Soporte

Para preguntas o soporte, contacta al propietario del repositorio.

---

## 📊 Estado del Proyecto

🟢 **En desarrollo activo**

- ✅ Frontend base configurado
- ✅ Sistema de rutas implementado
- ✅ Página de login diseñada
- ⏳ Backend en configuración
- ⏳ Base de datos pendiente
- ⏳ Integración API pendiente

---

**Última actualización:** Octubre 6, 2025
