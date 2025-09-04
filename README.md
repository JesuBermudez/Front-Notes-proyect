# SWYW Frontend 🚀

Frontend React para el sistema SWYW (Share What You Want) - Una aplicación de gestión de notas y recordatorios inteligentes.

## 🏗️ Stack Tecnológico

- **React 19** con TypeScript
- **Vite** como bundler (más rápido que Create React App)
- **SWC** como compilador (más rápido que Babel)
- **Axios** para requests HTTP
- **React Router DOM** para navegación
- **Docker** con Nginx para producción

## 📁 Estructura del Proyecto

```
SWYW-FRONTEND/
├── src/
│   ├── features/
│   │   ├── notes/              # Feature de notas
│   │   │   ├── components/     # Componentes específicos de notas
│   │   │   ├── services/       # Servicios API
│   │   │   └── types/          # Tipos TypeScript
│   │   └── authentication/     # Feature de autenticación
│   ├── components/             # Componentes compartidos
│   ├── assets/                 # Recursos estáticos
│   ├── App.tsx                 # Componente principal
│   └── Router.tsx              # Configuración de rutas
├── public/                     # Archivos públicos
├── Dockerfile                  # Multi-stage build
├── default.conf                # Configuración Nginx
├── .env                        # Variables de entorno
└── vite.config.ts              # Configuración Vite
```

## 🚀 Desarrollo Local

### Prerrequisitos
- Node.js 18+
- npm | yarn | bun | pnpm

### Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd SWYW-FRONTEND
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` con la configuración correcta:
```env
VITE_API_NOTES=http://localhost:3000/api
VITE_API_AUTH=http://localhost:4000
```

4. Ejecutar en modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🐳 Despliegue con Docker

### Construcción de la imagen

```bash
docker build --no-cache -t swyw-front .
```

### Ejecución del contenedor

```bash
docker run --env-file .env -d -p 8080:80 --name swyw-front --network swyw swyw-front
```

**Parámetros explicados:**
- `--env-file .env`: Inyecta variables de entorno
- `-d`: Ejecuta en background (detached)
- `-p 8080:80`: Mapea puerto 8080 del host al 80 del contenedor
- `--network swyw`: Conecta a la red Docker compartida con el backend

### Dockerfile Multi-stage

El Dockerfile utiliza un **multi-stage build** optimizado:

1. **Stage 1 (build)**: Construye la aplicación React
2. **Stage 2 (nginx)**: Sirve los archivos estáticos con Nginx

Esto resulta en una imagen final muy ligera (~25MB) que solo contiene:
- Archivos estáticos compilados
- Servidor Nginx optimizado
- Configuración custom para SPA

## 🌐 Configuración de Red

### Variables de Entorno

```env
# URL del backend API
VITE_API_NOTES=http://backend-container:3000/api
VITE_API_AUTH=http://localhost:4000
```

### Comunicación con Backend

El frontend se conecta al backend a través de la red Docker `swyw`. Los servicios pueden comunicarse usando nombres de contenedor como hostnames.

## 🎯 Funcionalidades

### ✅ Gestión de Notas
- **Crear** nuevas notas con diferentes prioridades
- **Listar** notas ordenadas por prioridad (urgent → normal → recurring)
- **Editar** notas existentes
- **Eliminar** notas
- **Filtrado** automático por tipo y descripción

### 📋 Tipos de Notas
- `urgent`: Prioridad alta (rojo)
- `normal`: Prioridad media (azul)
- `recurring`: Prioridad baja (verde)


## 🛠️ Configuración Nginx

El archivo `default.conf` está optimizado para aplicaciones SPA:

```nginx
location / {
    try_files $uri $uri/ /index.html?$args;
}
```

Esto asegura que:
- Las rutas de React Router funcionen correctamente
- Los refreshes de página no den error 404
- Los archivos estáticos se sirvan eficientemente

## 📚 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Construcción
npm run build        # Build optimizado para producción

# Linting
npm run lint         # Ejecuta ESLint para revisar código

# Preview
npm run preview      # Preview del build de producción
```

## 🔧 Configuración de Desarrollo

### ESLint
El proyecto incluye configuración ESLint con reglas para:
- TypeScript
- React Hooks
- React Refresh
- Mejores prácticas modernas

### Vite
Configurado con:
- Plugin React SWC para compilación ultra-rápida
- Hot Module Replacement (HMR)
- Optimizaciones automáticas


### Logs útiles

```bash
# Ver logs del contenedor
docker logs swyw-front

# Acceder al contenedor
docker exec -it swyw-front sh

# Ver configuración Nginx
docker exec swyw-front cat /etc/nginx/conf.d/default.conf
```

## 📈 Performance

### Optimizaciones Implementadas
- **SWC compiler**: ~20x más rápido que Babel
- **Vite bundling**: Inicio ultra-rápido del dev server
- **Code splitting**: Automático con Vite
- **Multi-stage Docker**: Imagen final minimalista
- **Nginx optimizado**: Compresión gzip y cache headers

### Métricas Típicas
- **Build time**: ~30-60 segundos
- **Image size**: ~25MB
- **Cold start**: <2 segundos
- **Hot reload**: <100ms



---

**Desarrollado con ❤️ usando React + TypeScript + Vite**
