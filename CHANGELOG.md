# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Sin versión] - 2025-10-06

### Agregado

#### Frontend

- ✅ Configuración inicial de React 19.1.1 con TypeScript 5.9.3
- ✅ Integración de Vite 7.1.7 como build tool
- ✅ Instalación de Material-UI v7.3.4 con tema personalizado
- ✅ Configuración de React Router v7.9.3
- ✅ Estructura de carpetas modular por features
- ✅ Componente `HomePage` - Página principal
- ✅ Componente `LoginPage` - Página de inicio de sesión con tema azul marino
- ✅ Componente `LoginForm` - Formulario de login separado y reutilizable
- ✅ Sistema de rutas básico (`/`, `/home`, `/login`)
- ✅ Tema personalizado en colores azul marino
- ✅ Gradiente de fondo animado en página de login
- ✅ Iconos de Material Design (@mui/icons-material)
- ✅ Configuración de ESLint para React y TypeScript
- ✅ Fuente Roboto (@fontsource/roboto)

#### Backend

- ✅ Configuración inicial de Node.js con Express 5.1.0
- ✅ Instalación de dependencias base:
  - `mssql` 11.0.1 para SQL Server
  - `cors` 2.8.5
  - `dotenv` 17.2.2
  - `morgan` 1.10.1
  - `nodemon` 3.1.10 (dev)

#### Documentación

- ✅ README.md principal del proyecto (raíz)
- ✅ DOCS.md detallado del frontend
- ✅ README.md del backend (api/)
- ✅ Archivo .env.example para configuración del backend
- ✅ CHANGELOG.md para seguimiento de cambios
- ✅ Documentación de estructura de carpetas
- ✅ Guía de instalación y configuración
- ✅ Documentación de rutas y componentes
- ✅ Guía de desarrollo y mejores prácticas

### Características Implementadas

#### Autenticación UI

- Formulario de login con validación
- Toggle para mostrar/ocultar contraseña
- Campos de usuario y contraseña con iconos
- Enlaces de recuperación de contraseña y registro
- Diseño responsive y adaptable
- Animaciones suaves en interacciones

#### Arquitectura

- Separación de componentes de presentación y lógica
- TypeScript para type safety en todo el proyecto
- Componentes reutilizables y modulares
- Estructura escalable para crecimiento

### En Progreso

- ⏳ Implementación de endpoints en backend
- ⏳ Conexión de base de datos SQL Server
- ⏳ Integración frontend-backend
- ⏳ Sistema de autenticación con JWT

### Por Hacer

#### Frontend

- [ ] Conectar formulario de login con API
- [ ] Implementar Context API para estado global
- [ ] Crear componente Dashboard
- [ ] Agregar manejo de errores global
- [ ] Implementar sistema de notificaciones (toasts)
- [ ] Agregar validación de formularios con yup/zod
- [ ] Crear componentes base reutilizables
- [ ] Implementar lazy loading de rutas
- [ ] Agregar tests con Vitest/Jest
- [ ] Configurar variables de entorno

#### Backend

- [ ] Crear estructura de carpetas completa
- [ ] Implementar conexión a SQL Server
- [ ] Crear endpoints de autenticación
- [ ] Implementar JWT para autenticación
- [ ] Crear middleware de autenticación
- [ ] Agregar validación de datos (express-validator)
- [ ] Implementar manejo de errores global
- [ ] Crear scripts de base de datos
- [ ] Agregar bcrypt para hash de contraseñas
- [ ] Implementar rate limiting
- [ ] Agregar documentación Swagger
- [ ] Configurar tests con Jest/Supertest

#### Base de Datos

- [ ] Crear esquema de base de datos
- [ ] Implementar tabla Users
- [ ] Crear stored procedures
- [ ] Agregar índices para optimización
- [ ] Implementar migraciones
- [ ] Crear datos de prueba (seeds)

#### DevOps

- [ ] Configurar Docker y Docker Compose
- [ ] Crear archivo Dockerfile para frontend
- [ ] Crear archivo Dockerfile para backend
- [ ] Configurar CI/CD pipeline
- [ ] Implementar testing automático
- [ ] Configurar despliegue automático

### Notas Técnicas

#### Decisiones de Diseño

- Material-UI fue elegido por su robustez y componentes pre-construidos
- Tema azul marino (#0d47a1) para identidad corporativa
- Vite para mejor experiencia de desarrollo con HMR
- TypeScript para prevenir errores en tiempo de compilación
- Estructura modular por features para mejor escalabilidad

#### Problemas Conocidos

- Ninguno reportado hasta el momento

---

## Formato

### Tipos de Cambios

- `Agregado` - para nuevas características
- `Cambiado` - para cambios en funcionalidad existente
- `Deprecado` - para características que serán removidas
- `Removido` - para características removidas
- `Corregido` - para corrección de bugs
- `Seguridad` - para vulnerabilidades de seguridad

---

**Mantenido por:** David Ccolque Quispe  
**Última actualización:** Octubre 6, 2025
