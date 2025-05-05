# SGA-Front

Frontend web para la gestión del Sistema de Gestión Ambiental (SGA) basado en la norma ISO 14001.

## Descripción

SGA-Front es una aplicación web construida con React y TypeScript que permite centralizar y administrar todos los procesos, documentos, registros y métricas relacionados con la gestión ambiental según ISO 14001.

## Características

* Gestión centralizada de procesos ambientales, documentos, registros y métricas.
* Dashboard interactivo con paneles para indicadores clave de desempeño (KPI).
* Seguimiento de acciones correctivas y preventivas.
* Control de acceso por roles (Administrador, Auditor, Usuario).
* Integración con API RESTful mediante variables de entorno.

## Tecnologías

* **React** con TypeScript
* **Vite** como bundler y servidor de desarrollo
* **Material-UI (MUI)** para componentes de interfaz responsiva
* **Redux Toolkit** para gestión de estado global
* **ESLint** y **Prettier** para calidad y consistencia de código

## Estructura del proyecto

```
sga-front/
├── public/           # Archivos estáticos y punto de entrada HTML
│   └── index.html
├── src/              # Código fuente
│   ├── assets/       # Imágenes, estilos globales y fuentes
│   ├── components/   # Componentes reutilizables
│   ├── pages/        # Vistas (Dashboard, Documentos, Configuración, etc.)
│   ├── services/     # Clientes HTTP y lógica de interacción con API
│   ├── store/        # Configuración de Redux y slices
│   ├── utils/        # Funciones y helpers genéricos
│   ├── App.tsx       # Componente raíz
│   └── main.tsx      # Punto de entrada y montaje de la aplicación
├── .eslintrc.cjs      # Configuración de ESLint
├── tsconfig.json      # Configuración de TypeScript
├── vite.config.ts     # Configuración de Vite
└── package.json       # Dependencias y scripts
```

## Instalación y puesta en marcha

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/damianr93/sga-front.git
   cd sga-front
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Configurar variables de entorno:

   * Crear un archivo `.env` en la raíz y definir:

     ```env
     VITE_API_BASE_URL=https://api.tu-backend.com
     ```
4. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```
5. Construir para producción:

   ```bash
   npm run build
   npm run preview
   ```

## Contribuciones

¡Las contribuciones son bienvenidas! Para colaborar:

1. Abre un *issue* describiendo tu propuesta.
2. Crea una rama (branch) con el prefijo `feature/` o `fix/`.
3. Realiza tus cambios y asegúrate de pasar los linters y tests.
4. Envía un *pull request* describiendo tus mejoras.

