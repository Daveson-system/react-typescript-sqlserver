# 🚀 React + TypeScript + SQL Server - Frontend

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.4-007FFF?style=flat&logo=mui)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite)

Frontend moderno para aplicación web con React, TypeScript y SQL Server. Utiliza Material-UI para componentes de interfaz con un diseño elegante en tema azul marino.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Rutas de la Aplicación](#rutas-de-la-aplicación)
- [Componentes Principales](#componentes-principales)
- [Tema y Estilos](#tema-y-estilos)
- [Guía de Desarrollo](#guía-de-desarrollo)

---

## ✨ Características

- ⚛️ **React 19.1.1** - Última versión de React con las mejoras más recientes
- 🔷 **TypeScript** - Tipado estático para mayor seguridad y autocompletado
- 🎨 **Material-UI v7** - Componentes de UI modernos y personalizables
- 🎭 **Tema personalizado** - Paleta de colores azul marino corporativo
- 🛣️ **React Router v7** - Navegación declarativa y eficiente
- ⚡ **Vite** - Build tool ultra rápido con HMR (Hot Module Replacement)
- 📱 **Responsive Design** - Diseño adaptable a todos los dispositivos
- 🔐 **Sistema de Autenticación** - Página de login con formulario seguro
- 🎯 **ESLint** - Linting configurado para código limpio y consistente

---

## 📁 Estructura del Proyecto

```
front/
├── public/                     # Archivos estáticos públicos
│   └── vite.svg
├── src/
│   ├── app/                    # Módulos de la aplicación
│   │   ├── auth/               # Módulo de autenticación
│   │   │   ├── components/
│   │   │   │   └── LoginForm.tsx       # Componente del formulario de login
│   │   │   └── pages/
│   │   │       └── LoginPage.tsx       # Página de inicio de sesión
│   │   ├── dashboard/          # Módulo del dashboard (futuro)
│   │   └── home/               # Módulo de inicio
│   │       └── HomePage.tsx    # Página principal
│   ├── api/                    # Servicios API (futuro)
│   ├── assets/                 # Recursos estáticos
│   │   └── react.svg
│   ├── base/                   # Componentes base/reutilizables
│   ├── constants/              # Constantes de la aplicación
│   ├── context/                # Context API de React
│   ├── core/                   # Funcionalidades core
│   ├── http/                   # Cliente HTTP (futuro)
│   ├── repositories/           # Capa de datos (futuro)
│   ├── App.tsx                 # Componente principal con rutas
│   └── main.tsx                # Punto de entrada de la aplicación
├── eslint.config.js            # Configuración de ESLint
├── index.html                  # HTML principal
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración de TypeScript
├── tsconfig.app.json           # TypeScript para la app
├── tsconfig.node.json          # TypeScript para Vite
├── vite.config.ts              # Configuración de Vite
├── DOCS.md                     # Documentación del proyecto
└── README.md                   # Documentación de Vite

```

---

## 🛠️ Tecnologías

### Core

- **React 19.1.1** - Biblioteca de UI
- **TypeScript 5.9.3** - Superset de JavaScript con tipos
- **Vite 7.1.7** - Build tool y dev server

### UI/UX

- **Material-UI 7.3.4** - Componentes de interfaz
- **@mui/icons-material 7.3.4** - Iconos de Material Design
- **@emotion/react & @emotion/styled** - CSS-in-JS
- **styled-components 6.1.19** - Componentes estilizados
- **@fontsource/roboto** - Tipografía Roboto

### Routing

- **react-router 7.9.3** - Enrutamiento para SPA

### Calidad de Código

- **ESLint 9.36.0** - Linter de JavaScript/TypeScript
- **eslint-plugin-react-hooks** - Reglas para React Hooks
- **typescript-eslint** - Reglas de ESLint para TypeScript

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn** >= 1.22.0
- **Git** (opcional, para control de versiones)

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Daveson-system/react-typescript-sqlserver.git
cd react-typescript-sqlserver/front
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📜 Scripts Disponibles

| Script            | Descripción                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con hot-reload |
| `npm run build`   | Compila TypeScript y construye para producción  |
| `npm run lint`    | Ejecuta ESLint para verificar el código         |
| `npm run preview` | Previsualiza la build de producción localmente  |

---

## 🛣️ Rutas de la Aplicación

| Ruta     | Componente         | Descripción                       |
| -------- | ------------------ | --------------------------------- |
| `/`      | Redirect → `/home` | Redirección automática a home     |
| `/home`  | `HomePage`         | Página principal de la aplicación |
| `/login` | `LoginPage`        | Página de inicio de sesión        |

### Configuración de Rutas

Las rutas están definidas en `src/App.tsx`:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
</BrowserRouter>
```

---

## 🧩 Componentes Principales

### 1. **LoginPage** (`src/app/auth/pages/LoginPage.tsx`)

Página completa de inicio de sesión con:

- Tema personalizado en azul marino
- Fondo con gradiente animado
- Paper container con elevación y blur
- Logo circular con icono de candado
- Integración con `LoginForm`

**Características:**

- ✅ Diseño responsive
- ✅ Tema Material-UI personalizado
- ✅ Fondo degradado dinámico
- ✅ Componentes reutilizables

### 2. **LoginForm** (`src/app/auth/components/LoginForm.tsx`)

Componente de formulario separado con:

- Campos de usuario y contraseña
- Validación de campos requeridos
- Toggle para mostrar/ocultar contraseña
- Iconos personalizados por campo
- Enlaces de recuperación y registro

**Props:**

```typescript
interface LoginFormProps {
  onSubmit?: (formData: LoginFormData) => void;
}

interface LoginFormData {
  username: string;
  password: string;
}
```

**Características:**

- ✅ Estado local manejado con hooks
- ✅ TypeScript interfaces para type safety
- ✅ Callback opcional para submit
- ✅ Validación de formulario
- ✅ UX mejorada con iconos

### 3. **HomePage** (`src/app/home/HomePage.tsx`)

Página de inicio de la aplicación (en desarrollo).

---

## 🎨 Tema y Estilos

### Paleta de Colores Azul Marino

El tema personalizado utiliza una paleta corporativa en tonos azules:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1", // Azul marino oscuro
      light: "#5472d3", // Azul claro
      dark: "#002171", // Azul muy oscuro
      contrastText: "#fff", // Texto blanco
    },
    secondary: {
      main: "#1565c0", // Azul medio
      light: "#5e92f3", // Azul cielo
      dark: "#003c8f", // Azul profundo
      contrastText: "#fff",
    },
    background: {
      default: "#e3f2fd", // Azul muy claro
      paper: "#ffffff", // Blanco
    },
  },
});
```

### Gradiente de Fondo

```css
background: linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%);
```

---

## 👨‍💻 Guía de Desarrollo

### Agregar una Nueva Página

1. **Crear el componente de la página:**

```bash
# Crear la estructura
mkdir -p src/app/nuevo-modulo/pages
touch src/app/nuevo-modulo/pages/NuevaPagina.tsx
```

2. **Implementar el componente:**

```tsx
function NuevaPagina() {
  return (
    <div>
      <h1>Nueva Página</h1>
    </div>
  );
}

export default NuevaPagina;
```

3. **Agregar la ruta en `App.tsx`:**

```tsx
import NuevaPagina from "./app/nuevo-modulo/pages/NuevaPagina";

<Route path="/nueva" element={<NuevaPagina />} />;
```

### Crear un Nuevo Componente

1. Ubicar en la carpeta correspondiente (`components/`, `base/`, etc.)
2. Usar TypeScript para definir props
3. Exportar por defecto

```tsx
interface MiComponenteProps {
  titulo: string;
  onAction?: () => void;
}

function MiComponente({ titulo, onAction }: MiComponenteProps) {
  return <div>{titulo}</div>;
}

export default MiComponente;
```

### Mejores Prácticas

- ✅ Usar TypeScript para todas las props y estado
- ✅ Separar componentes de presentación y lógica
- ✅ Mantener componentes pequeños y reutilizables
- ✅ Usar hooks personalizados para lógica compleja
- ✅ Seguir la estructura de carpetas establecida
- ✅ Ejecutar `npm run lint` antes de commit

---

## 🔜 Próximos Pasos

- [ ] Implementar autenticación real con API
- [ ] Crear el módulo Dashboard
- [ ] Configurar servicios API en `/src/api`
- [ ] Implementar Context para estado global
- [ ] Agregar tests unitarios con Vitest
- [ ] Configurar variables de entorno
- [ ] Implementar manejo de errores global
- [ ] Agregar internacionalización (i18n)

---

## 📄 Licencia

Este proyecto es privado y propietario.

---

## 👤 Autor

**David Ccolque Quispe**

- GitHub: [@Daveson-system](https://github.com/Daveson-system)
- Proyecto: react-typescript-sqlserver

---

## 🤝 Contribuciones

Este es un proyecto privado. Para contribuir, contacta al propietario del repositorio.

---

**Fecha de última actualización:** Octubre 6, 2025
