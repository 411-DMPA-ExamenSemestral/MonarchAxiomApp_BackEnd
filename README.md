# SwitchReviewApp
Examen semestral de la materia "Desarrollo Móvil para Plataforma Android." Desarrollo del Back-End de "Monarch Axiom", aplicación de reseñas de títulos para la consola Nintendo Switch, con Kotlin y Jetpack Compose, en Android Studio.

## Requisitos Previos

Antes de iniciar la API, asegúrate de tener instalado en tu computadora:
1. **Node.js** (v16 o superior). Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **MongoDB** corriendo de forma local o una cuenta en **MongoDB Atlas** (en la nube) para obtener la URI de conexión.

---

## Comandos de Inicialización y Uso

Sigue estos pasos para instalar y poner en marcha el servidor:

### 1. Instalar las dependencias
Abre tu terminal dentro de la carpeta `MonarchAxiomApp_BackEnd` y ejecuta:
```bash
npm install
```
*Este comando leerá las dependencias en `package.json` (Express, Mongoose, dotenv, cors y nodemon) y las instalará automáticamente.*

### 2. Configurar las Variables de Entorno
Abre el archivo [`.env`](file:///c:/Users/mario/Downloads/Api_Juegos/MonarchAxiomApp_BackEnd/.env) y asegúrate de configurar tu cadena de conexión de MongoDB:
```ini
MONGO_URI=mongodb+srv://marioVH_user:mario1234@dmpa-411-monarchaxiomdb.tfkrefg.mongodb.net/MonarchAxiomDB?retryWrites=true&w=majority
PORT=3000
```

### 3. Iniciar el servidor en modo desarrollo
Para correr el servidor con reinicio automático al guardar cambios (usando `nodemon`):
```bash
npm run dev
```

### 4. Iniciar el servidor en producción
Si deseas iniciarlo en producción sin reinicio automático:
```bash
npm start
```

---

## Endpoints de la API (Documentación)

El servidor correrá en `http://localhost:3000` por defecto.

### 🎮 Videojuegos (`/api/juegos`)

* **`GET /api/juegos`**
  * Obtiene la lista completa de videojuegos registrados en la colección `Juegos` de MongoDB Atlas.
* **`GET /api/juegos/:id`**
  * Obtiene la información detallada de un videojuego mediante su `_id` numérico (ej. `/api/juegos/2`).

### 🖼️ Portadas de Videojuegos (`/images/:nombre_imagen`)

* **`GET /images/:nombre_imagen`**
  * Sirve las portadas estáticas de los juegos (ej. `/images/donkey-kong-bananza.jpg`).
