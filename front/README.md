# 🎨 Frontend - React + TypeScript + Material-UI

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.4-007FFF?style=flat&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.3-CA4245?style=flat&logo=react-router&logoColor=white)

Aplicación web moderna construida con React 19, TypeScript, Material-UI v7 y Vite. Incluye sistema de autenticación con diseño elegante en tema azul marino.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Tecnologías](#️-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Rutas](#️-rutas)
- [Componentes](#-componentes)
- [Tema y Estilos](#-tema-y-estilos)
- [Estado Global](#-estado-global)
- [Servicios API](#-servicios-api)
- [Guía de Desarrollo](#-guía-de-desarrollo)
- [Testing](#-testing)
- [Build y Despliegue](#-build-y-despliegue)
- [Mejores Prácticas](#-mejores-prácticas)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Características

### 🎯 Core

- ⚛️ **React 19.1.1** - Última versión con mejoras de rendimiento
- 🔷 **TypeScript 5.9.3** - Tipado estático completo
- ⚡ **Vite 7.1.7** - Build tool ultrarrápido con HMR
- 🛣️ **React Router 7.9.3** - Navegación moderna y declarativa

### 🎨 UI/UX

- 🎭 **Material-UI v7.3.4** - Componentes profesionales
- 🌈 **Tema Personalizado** - Paleta azul marino corporativo
- 📱 **100% Responsive** - Adaptable a todos los dispositivos
- 🎬 **Animaciones Suaves** - Transiciones y efectos elegantes
- 🔤 **Fuente Roboto** - Tipografía moderna de Google

### 🔐 Autenticación

- 📝 **Formulario de Login** - Diseño moderno y funcional
- 👁️ **Toggle Password** - Mostrar/ocultar contraseña
- ✅ **Validación de Campos** - Campos requeridos con feedback
- 🎨 **Diseño Atractivo** - Gradiente de fondo y efectos blur

### 🛠️ Desarrollo

- 🎯 **ESLint** - Código limpio y consistente
- 📦 **Componentes Modulares** - Reutilizables y escalables
- 🗂️ **Arquitectura por Features** - Organización clara
- 🔍 **TypeScript Strict Mode** - Máxima seguridad de tipos

---

## 🎬 Demo

```bash
# Clonar e instalar
git clone https://github.com/Daveson-system/react-typescript-sqlserver.git
cd react-typescript-sqlserver/front
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📸 Capturas de Pantalla

### Página de Login

- Diseño moderno con gradiente azul marino
- Formulario centrado con efectos de elevación
- Toggle para mostrar/ocultar contraseña
- Enlaces de recuperación y registro

### HomePage

- Página de bienvenida (en desarrollo)

---

## 🛠️ Tecnologías

### Dependencias de Producción

| Paquete                 | Versión | Propósito                           |
| ----------------------- | ------- | ----------------------------------- |
| **react**               | 19.1.1  | Biblioteca de interfaz de usuario   |
| **react-dom**           | 19.1.1  | Renderizado de React en el DOM      |
| **react-router**        | 7.9.3   | Enrutamiento declarativo para React |
| **@mui/material**       | 7.3.4   | Componentes de Material-UI          |
| **@mui/icons-material** | 7.3.4   | Iconos de Material Design           |
| **@emotion/react**      | 11.14.0 | Biblioteca de CSS-in-JS             |
| **@emotion/styled**     | 11.14.1 | Styled components con Emotion       |
| **styled-components**   | 6.1.19  | Componentes con estilos             |
| **@fontsource/roboto**  | 5.2.8   | Tipografía Roboto de Google         |

### Dependencias de Desarrollo

| Paquete                  | Versión | Propósito                          |
| ------------------------ | ------- | ---------------------------------- |
| **typescript**           | 5.9.3   | Lenguaje con tipado estático       |
| **vite**                 | 7.1.7   | Build tool y dev server            |
| **@vitejs/plugin-react** | 5.0.4   | Plugin de React para Vite          |
| **eslint**               | 9.36.0  | Linter de código                   |
| **typescript-eslint**    | 8.45.0  | Reglas de ESLint para TypeScript   |
| **@types/react**         | 19.1.16 | Tipos de TypeScript para React     |
| **@types/react-dom**     | 19.1.9  | Tipos de TypeScript para React DOM |

---

## 📦 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** >= 18.0.0 ([Descargar](https://nodejs.org/))
- **npm** >= 9.0.0 (incluido con Node.js)
  - O **yarn** >= 1.22.0
  - O **pnpm** >= 8.0.0

Verifica las versiones:

```bash
node --version
npm --version
```

---

## 🚀 Instalación

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/Daveson-system/react-typescript-sqlserver.git
cd react-typescript-sqlserver/front
```

### Paso 2: Instalar Dependencias

```bash
# Con npm
npm install

# O con yarn
yarn install

# O con pnpm
pnpm install
```

### Paso 3: Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**

---

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del directorio `front/`:

```env
# URL de la API Backend
VITE_API_URL=http://localhost:3000/api

# Entorno
VITE_APP_ENV=development

# Otras configuraciones
VITE_APP_NAME=Mi Aplicación
```

**Nota:** Las variables deben comenzar con `VITE_` para ser accesibles en el código.

### Acceder a Variables de Entorno

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;
```

### Configuración de Vite

El archivo `vite.config.ts` contiene la configuración del build tool:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
```

---

## 📜 Scripts Disponibles

| Script         | Comando           | Descripción                                     |
| -------------- | ----------------- | ----------------------------------------------- |
| **Desarrollo** | `npm run dev`     | Inicia servidor de desarrollo en puerto 5173    |
| **Build**      | `npm run build`   | Compila TypeScript y genera build de producción |
| **Preview**    | `npm run preview` | Previsualiza la build de producción             |
| **Lint**       | `npm run lint`    | Ejecuta ESLint para verificar código            |
| **Type Check** | `tsc --noEmit`    | Verifica tipos de TypeScript                    |

### Ejemplos

```bash
# Desarrollo (recomendado)
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run preview

# Verificar código
npm run lint
```

---

## 📁 Estructura del Proyecto

```
front/
├── public/                          # Archivos estáticos públicos
│   └── vite.svg                     # Logo de Vite
│
├── src/                             # Código fuente
│   ├── app/                         # Módulos de aplicación
│   │   ├── auth/                    # Módulo de autenticación
│   │   │   ├── components/          # Componentes de auth
│   │   │   │   └── LoginForm.tsx    # Formulario de login
│   │   │   └── pages/               # Páginas de auth
│   │   │       └── LoginPage.tsx    # Página de login
│   │   │
│   │   ├── dashboard/               # Módulo dashboard (futuro)
│   │   │   ├── components/
│   │   │   └── pages/
│   │   │
│   │   └── home/                    # Módulo home
│   │       └── HomePage.tsx         # Página principal
│   │
│   ├── api/                         # Servicios de API (futuro)
│   │   └── authService.ts
│   │
│   ├── assets/                      # Recursos estáticos
│   │   └── react.svg
│   │
│   ├── base/                        # Componentes base reutilizables
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Card/
│   │
│   ├── constants/                   # Constantes de la app
│   │   ├── routes.ts
│   │   └── config.ts
│   │
│   ├── context/                     # Context API de React
│   │   └── AuthContext.tsx
│   │
│   ├── core/                        # Funcionalidades core
│   │   ├── hooks/                   # Custom hooks
│   │   └── utils/                   # Utilidades
│   │
│   ├── http/                        # Cliente HTTP (futuro)
│   │   └── httpClient.ts
│   │
│   ├── repositories/                # Capa de datos (futuro)
│   │   └── userRepository.ts
│   │
│   ├── App.tsx                      # Componente raíz con rutas
│   └── main.tsx                     # Punto de entrada
│
├── .env                             # Variables de entorno (no en git)
├── .env.example                     # Ejemplo de variables
├── .gitignore                       # Archivos ignorados por git
├── eslint.config.js                 # Configuración de ESLint
├── index.html                       # HTML principal
├── package.json                     # Dependencias y scripts
├── tsconfig.json                    # Config principal de TypeScript
├── tsconfig.app.json                # Config de TypeScript para la app
├── tsconfig.node.json               # Config de TypeScript para Vite
├── vite.config.ts                   # Configuración de Vite
├── DOCS.md                          # Documentación extendida
└── README.md                        # Este archivo
```

---

## 🗺️ Rutas

### Rutas Configuradas

| Ruta     | Componente         | Descripción            | Protegida |
| -------- | ------------------ | ---------------------- | --------- |
| `/`      | Redirect → `/home` | Redirección automática | ❌        |
| `/home`  | `HomePage`         | Página principal       | ❌        |
| `/login` | `LoginPage`        | Inicio de sesión       | ❌        |

### Configuración en App.tsx

```tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./app/home/HomePage";
import LoginPage from "./app/auth/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Rutas Futuras (Planificadas)

| Ruta         | Componente      | Descripción                |
| ------------ | --------------- | -------------------------- |
| `/dashboard` | `DashboardPage` | Panel de control principal |
| `/profile`   | `ProfilePage`   | Perfil de usuario          |
| `/users`     | `UsersPage`     | Gestión de usuarios        |
| `/settings`  | `SettingsPage`  | Configuración              |

---

## 🧩 Componentes

### 1. LoginPage

**Ubicación:** `src/app/auth/pages/LoginPage.tsx`

Página completa de inicio de sesión con diseño moderno.

**Características:**

- Tema personalizado con azul marino
- Fondo con gradiente animado
- Paper container con elevación y blur
- Logo circular con icono
- Integración con LoginForm

**Props:** Ninguna (componente de página)

```tsx
function LoginPage() {
  const handleLogin = (formData: { username: string; password: string }) => {
    console.log("Login:", formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={
          {
            /* estilos */
          }
        }
      >
        <LoginForm onSubmit={handleLogin} />
      </Box>
    </ThemeProvider>
  );
}
```

### 2. LoginForm

**Ubicación:** `src/app/auth/components/LoginForm.tsx`

Formulario reutilizable de autenticación.

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

- Campos de usuario y contraseña
- Validación de campos requeridos
- Toggle para mostrar/ocultar contraseña
- Iconos personalizados
- Enlaces de recuperación y registro

**Uso:**

```tsx
<LoginForm onSubmit={(data) => console.log(data)} />
```

### 3. HomePage

**Ubicación:** `src/app/home/HomePage.tsx`

Página principal de la aplicación (en desarrollo).

---

## 🎨 Tema y Estilos

### Tema Personalizado

El proyecto utiliza un tema de Material-UI personalizado en tonos azules:

```typescript
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1", // Azul marino oscuro
      light: "#5472d3", // Azul claro
      dark: "#002171", // Azul muy oscuro
      contrastText: "#fff",
    },
    secondary: {
      main: "#1565c0", // Azul medio
      light: "#5e92f3", // Azul cielo
      dark: "#003c8f", // Azul profundo
      contrastText: "#fff",
    },
    background: {
      default: "#e3f2fd", // Azul muy claro
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});
```

### Paleta de Colores

| Color          | Hex       | Uso                          |
| -------------- | --------- | ---------------------------- |
| Primary Main   | `#0d47a1` | Botones principales, headers |
| Primary Light  | `#5472d3` | Hover states                 |
| Primary Dark   | `#002171` | Texto enfatizado             |
| Secondary Main | `#1565c0` | Botones secundarios          |
| Background     | `#e3f2fd` | Fondo general                |
| Paper          | `#ffffff` | Tarjetas, modales            |

### Gradiente de Fondo (Login)

```css
background: linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%);
```

### Uso del Tema

```tsx
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

---

## 🔄 Estado Global

### Context API (Planificado)

```typescript
// src/context/AuthContext.tsx
interface AuthContextType {
  user: User | null;
  login: (credentials: LoginData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // ... lógica

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

## 🌐 Servicios API

### Cliente HTTP (Planificado)

```typescript
// src/http/httpClient.ts
import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para tokens
httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default httpClient;
```

### Servicio de Autenticación

```typescript
// src/api/authService.ts
import httpClient from "../http/httpClient";

export const authService = {
  login: async (credentials: LoginData) => {
    const response = await httpClient.post("/auth/login", credentials);
    return response.data;
  },

  logout: async () => {
    await httpClient.post("/auth/logout");
  },

  getCurrentUser: async () => {
    const response = await httpClient.get("/auth/me");
    return response.data;
  },
};
```

---

## 👨‍💻 Guía de Desarrollo

### Crear una Nueva Página

1. **Crear el archivo del componente:**

```bash
mkdir -p src/app/mi-modulo/pages
touch src/app/mi-modulo/pages/MiPagina.tsx
```

2. **Implementar el componente:**

```tsx
// src/app/mi-modulo/pages/MiPagina.tsx
function MiPagina() {
  return (
    <div>
      <h1>Mi Nueva Página</h1>
    </div>
  );
}

export default MiPagina;
```

3. **Agregar la ruta en App.tsx:**

```tsx
import MiPagina from "./app/mi-modulo/pages/MiPagina";

<Route path="/mi-pagina" element={<MiPagina />} />;
```

### Crear un Componente Reutilizable

```tsx
// src/base/Button/CustomButton.tsx
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

function CustomButton({ loading, children, ...props }: CustomButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {loading ? "Cargando..." : children}
    </Button>
  );
}

export default CustomButton;
```

### Crear un Custom Hook

```tsx
// src/core/hooks/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
```

---

## 🧪 Testing

### Configuración (Pendiente)

Frameworks recomendados:

- **Vitest** - Framework de testing rápido
- **React Testing Library** - Testing de componentes
- **MSW** - Mocking de API

### Instalación

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Ejemplo de Test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders home page", () => {
    render(<HomePage />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
});
```

---

## 📦 Build y Despliegue

### Build de Producción

```bash
npm run build
```

Esto genera los archivos optimizados en la carpeta `dist/`.

### Previsualizar Build

```bash
npm run preview
```

### Despliegue

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Nginx (Manual)

1. Build del proyecto:

```bash
npm run build
```

2. Copiar contenido de `dist/` al servidor

3. Configurar Nginx:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ✅ Mejores Prácticas

### TypeScript

- ✅ Siempre definir tipos para props
- ✅ Usar interfaces para objetos complejos
- ✅ Evitar `any`, usar `unknown` si es necesario
- ✅ Aprovechar type inference

### React

- ✅ Componentes funcionales con hooks
- ✅ Separar lógica de presentación
- ✅ Usar memo para optimización
- ✅ Custom hooks para lógica reutilizable

### Estructura

- ✅ Un componente por archivo
- ✅ Nombrado consistente (PascalCase para componentes)
- ✅ Organizar por features, no por tipos
- ✅ Mantener componentes pequeños (< 200 líneas)

### Performance

- ✅ Lazy loading de rutas
- ✅ Code splitting
- ✅ Optimizar imágenes
- ✅ Minimizar re-renders

---

## 🔧 Troubleshooting

### Error: "Cannot find module"

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Build falla

```bash
# Verificar TypeScript
npx tsc --noEmit

# Verificar ESLint
npm run lint
```

### Puerto 5173 en uso

```bash
# Cambiar puerto en vite.config.ts
server: {
  port: 3001
}
```

### Hot reload no funciona

```bash
# Reiniciar servidor
Ctrl+C
npm run dev
```

---

## 📚 Recursos

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

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

Ver [CONTRIBUTING.md](../CONTRIBUTING.md) para guía de contribución.

---

**Última actualización:** Octubre 6, 2025  
**Versión:** 0.0.0  
**Estado:** 🟢 En desarrollo activo
