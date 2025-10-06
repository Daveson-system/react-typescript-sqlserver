# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto! Esta guía te ayudará a entender cómo puedes colaborar de manera efectiva.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Guía de Estilo](#guía-de-estilo)
- [Convención de Commits](#convención-de-commits)
- [Estructura de Ramas](#estructura-de-ramas)

---

## 📜 Código de Conducta

Este proyecto adhiere a un código de conducta que todos los contribuidores deben seguir:

- Sé respetuoso y profesional
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto
- Muestra empatía hacia otros contribuidores

---

## 🚀 Cómo Contribuir

### 1. Fork el Proyecto

```bash
# Clona tu fork
git clone https://github.com/TU-USUARIO/react-typescript-sqlserver.git
cd react-typescript-sqlserver
```

### 2. Configura el Repositorio Upstream

```bash
git remote add upstream https://github.com/Daveson-system/react-typescript-sqlserver.git
```

### 3. Crea una Rama

```bash
git checkout -b feature/nombre-de-tu-feature
```

### 4. Realiza tus Cambios

- Escribe código limpio y documentado
- Sigue las guías de estilo del proyecto
- Agrega tests si es aplicable

### 5. Commit tus Cambios

```bash
git add .
git commit -m "feat: descripción clara del cambio"
```

### 6. Push a tu Fork

```bash
git push origin feature/nombre-de-tu-feature
```

### 7. Abre un Pull Request

Ve a GitHub y abre un Pull Request desde tu rama hacia la rama `daveson` del repositorio original.

---

## 🐛 Reportar Bugs

Si encuentras un bug, por favor crea un issue con la siguiente información:

### Template para Reporte de Bugs

```markdown
**Descripción del Bug**
Descripción clara y concisa del bug.

**Pasos para Reproducir**

1. Ve a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ve el error

**Comportamiento Esperado**
Descripción de lo que esperabas que sucediera.

**Comportamiento Actual**
Descripción de lo que realmente sucede.

**Screenshots**
Si aplica, agrega capturas de pantalla.

**Entorno:**

- OS: [ej. Windows 11]
- Navegador: [ej. Chrome 118]
- Node.js: [ej. 18.17.0]
- Versión del proyecto: [ej. 1.0.0]

**Información Adicional**
Cualquier otro contexto sobre el problema.
```

---

## 💡 Sugerir Mejoras

Para sugerir una mejora o nueva característica:

### Template para Feature Request

```markdown
**Tipo de Mejora**

- [ ] Nueva característica
- [ ] Mejora de característica existente
- [ ] Mejora de rendimiento
- [ ] Mejora de documentación

**Descripción**
Descripción clara de la mejora propuesta.

**Motivación**
¿Por qué esta mejora sería útil?

**Solución Propuesta**
Describe cómo imaginas que se implementaría.

**Alternativas Consideradas**
Otras soluciones que hayas considerado.

**Información Adicional**
Contexto adicional, mockups, ejemplos, etc.
```

---

## 🔄 Proceso de Pull Request

### Checklist antes de Abrir PR

- [ ] El código sigue las guías de estilo del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código en áreas difíciles de entender
- [ ] He actualizado la documentación correspondiente
- [ ] Mis cambios no generan nuevos warnings
- [ ] He agregado tests que prueban mi cambio (si aplica)
- [ ] Los tests nuevos y existentes pasan localmente
- [ ] He actualizado el CHANGELOG.md

### Template para Pull Request

```markdown
**Tipo de Cambio**

- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Mejora de documentación

**Descripción**
Descripción clara de los cambios realizados.

**Issue Relacionado**
Closes #(issue)

**Cambios Realizados**

- Cambio 1
- Cambio 2
- Cambio 3

**Screenshots** (si aplica)

**Checklist**

- [ ] Mi código sigue las guías de estilo
- [ ] He realizado self-review
- [ ] He comentado código complejo
- [ ] He actualizado documentación
- [ ] Sin nuevos warnings
- [ ] Tests agregados y pasando
- [ ] CHANGELOG actualizado
```

### Revisión de Código

- El código será revisado por al menos un mantenedor
- Podrían solicitarse cambios
- Una vez aprobado, será merged a la rama principal

---

## 🎨 Guía de Estilo

### JavaScript/TypeScript

#### Nombrado

```typescript
// Variables y funciones: camelCase
const userName = "John";
function getUserData() {}

// Clases y componentes: PascalCase
class UserService {}
function LoginPage() {}

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com";

// Archivos de componentes: PascalCase
// LoginPage.tsx, UserProfile.tsx

// Archivos de utilities: camelCase
// userHelpers.ts, apiClient.ts
```

#### Formato

```typescript
// Usar TypeScript para todo
interface User {
  id: number;
  name: string;
  email: string;
}

// Preferir arrow functions
const handleClick = () => {
  console.log("Clicked!");
};

// Usar const por defecto, let solo si es necesario
const immutableValue = 10;
let mutableValue = 20;

// Destructuring cuando sea posible
const { name, email } = user;

// Template literals para strings
const greeting = `Hola, ${name}!`;
```

#### React

```typescript
// Componentes funcionales con TypeScript
interface Props {
  title: string;
  onClose?: () => void;
}

function MyComponent({ title, onClose }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default MyComponent;
```

### CSS/Styling

```typescript
// Usar Material-UI sx prop para estilos
<Box
  sx={{
    padding: 2,
    margin: 1,
    backgroundColor: "primary.main",
  }}
>
  Content
</Box>;

// O styled-components para componentes complejos
const StyledButton = styled(Button)`
  padding: 16px;
  background-color: ${(props) => props.theme.palette.primary.main};
`;
```

### SQL

```sql
-- Keywords en MAYÚSCULAS
SELECT id, name, email
FROM Users
WHERE isActive = 1
ORDER BY createdAt DESC;

-- Indentación consistente
SELECT
    u.id,
    u.name,
    u.email,
    r.roleName
FROM Users u
INNER JOIN Roles r ON u.roleId = r.id
WHERE u.isActive = 1;
```

---

## 📝 Convención de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

### Formato

```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos

- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios de formato (no afectan código)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o modificar tests
- **chore**: Tareas de mantenimiento
- **ci**: Cambios en CI/CD
- **build**: Cambios en build system

### Ejemplos

```bash
# Nueva característica
git commit -m "feat(auth): agregar login con Google"

# Corrección de bug
git commit -m "fix(api): corregir error en endpoint de usuarios"

# Documentación
git commit -m "docs(readme): actualizar guía de instalación"

# Refactorización
git commit -m "refactor(components): separar LoginForm de LoginPage"

# Con scope y descripción detallada
git commit -m "feat(dashboard): agregar gráfico de estadísticas

- Implementar gráfico con recharts
- Agregar filtros por fecha
- Conectar con API de estadísticas"
```

---

## 🌿 Estructura de Ramas

### Ramas Principales

- **`main`** - Código estable en producción (protegida)
- **`daveson`** - Rama de desarrollo activa
- **`develop`** - Integración continua (cuando aplique)

### Ramas de Features

```bash
feature/nombre-descriptivo
feature/user-authentication
feature/dashboard-charts
```

### Ramas de Fixes

```bash
fix/nombre-descriptivo
fix/login-error
fix/api-timeout
```

### Ramas de Hotfix

```bash
hotfix/nombre-descriptivo
hotfix/security-patch
hotfix/critical-bug
```

### Workflow

```bash
# Crear feature branch desde daveson
git checkout daveson
git pull upstream daveson
git checkout -b feature/mi-feature

# Trabajar en la feature
git add .
git commit -m "feat: mi nueva característica"

# Mantener actualizada con daveson
git checkout daveson
git pull upstream daveson
git checkout feature/mi-feature
git rebase daveson

# Push y crear PR
git push origin feature/mi-feature
```

---

## ✅ Checklist Final

Antes de hacer push:

- [ ] El código compila sin errores
- [ ] Lint pasa sin warnings (`npm run lint`)
- [ ] Tests pasan (`npm test`)
- [ ] Documentación actualizada
- [ ] CHANGELOG.md actualizado
- [ ] Commits siguen convención
- [ ] Código revisado personalmente

---

## 📞 Contacto

Si tienes preguntas sobre cómo contribuir:

- Abre un issue con la etiqueta `question`
- Contacta al mantenedor del proyecto

---

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la misma licencia del proyecto.

---

¡Gracias por contribuir! 🎉

**Última actualización:** Octubre 6, 2025
