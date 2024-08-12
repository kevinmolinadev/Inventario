# Sistema de Inventario

Este proyecto es una aplicación web de punto de venta (POS) que permite a los usuarios gestionar productos y registrar ventas. Se ha desarrollado utilizando las siguientes tecnologías:

## Capturas de Pantalla

|| Movil | Escritorio|
| -------------------------- | -------------------------- | -------------------------- |
| Login | ![Productos](https://raw.githubusercontent.com/kevinmolinadev/Inventario/main/assets/login-mobile.png)  | ![Productos](https://raw.githubusercontent.com/kevinmolinadev/Inventario/main/assets/login.png) |
| Productos | ![Productos](https://raw.githubusercontent.com/kevinmolinadev/Inventario/main/assets/products-mobile.png)  | ![Productos](https://raw.githubusercontent.com/kevinmolinadev/Inventario/main/assets/products.png) |
| Registro de ventas | ![Productos](https://raw.githubusercontent.com/kevinmolinadev/Inventario/main/assets/registro-mobile.png)  | ![Productos](https://raw.githubusercontent.com/kevinmolinadev/Inventario/main/assets/registro.png) |

## Frontend

### Tecnologías Utilizadas:

- **Framework:** [React.js](https://reactjs.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)

### Estructura de las Rutas en el Frontend:

- **`/` (Login):** Página de inicio donde los usuarios inician sesión.
- **`/dashboard` (Dashboard):** Área de control donde se realiza el flujo de trabajo del sistema POS.
  - **`/dashboard/products` (Productos):** Lista de todos los productos disponibles. Permite agregar, editar y eliminar productos.
  - **`/dashboard/sales-history` (Registro de Ventas):** Muestra todos los registros de ventas realizadas. Permite agregar nuevas ventas y gestionar los productos vendidos.

### Descripción de las Tecnologías:

- **React.js:** Un framework de JavaScript para construir interfaces de usuario interactivas y dinámicas para aplicaciones web de una sola página (SPA).
- **Vite:** Un bundler rápido y flexible para aplicaciones web modernas que utiliza tecnologías como ES modules para mejorar la velocidad de desarrollo.
- **Tailwind CSS:** Un framework de diseño CSS que proporciona clases prediseñadas para ayudar a diseñar interfaces de usuario rápidamente sin necesidad de escribir CSS personalizado.
- **React Router:** Una librería de enrutamiento para React que permite la navegación declarativa y basada en componentes en una aplicación de una sola página.

## Backend

### Tecnologías Utilizadas:

- **Entorno:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Bundler:** [Babel](https://babeljs.io/) (para transpilación de código)
- **Herramientas:** [Nodemon](https://nodemon.io/) (para el reinicio automático del servidor)

### Descripción de las Tecnologías y Herramientas:

- **Express.js:** Un framework de aplicación web de Node.js que simplifica la creación de API y aplicaciones web robustas y escalables mediante una interfaz simple y fácil de usar para definir rutas y manejar solicitudes HTTP.
- **Babel:** Un compilador JavaScript que transpila el código ECMAScript moderno (ES6+) a versiones anteriores de JavaScript para garantizar la compatibilidad con varios navegadores y entornos.
- **Nodemon:** Una herramienta que ayuda en el desarrollo al reiniciar automáticamente el servidor cuando se detectan cambios en los archivos fuente, lo que mejora la eficiencia y facilita el proceso de desarrollo.

## Base de Datos:

- SQL Server

### Procedimientos:

Se han creado procedimientos de almacenado para la gestión de la base de datos. Algunos ejemplos incluyen:
1. **`sp_GetAllProducts`**: Obtiene todos los productos de la base de datos.
2. **`sp_GetProduct`**: Obtiene un producto específico según su código.
3. **`sp_InsertProduct`**: Inserta un nuevo producto en la base de datos.
4. **`sp_UpdateProduct`**: Actualiza la información de un producto existente.
5. **`sp_DeleteProduct`**: Elimina un producto según su código.
6. **`GetAllUsers`**: Obtiene todos los usuarios almacenados.
7. **`GetUser`**: Obtiene un usuario específico por su ID.
8. **`GetUserName`**: Obtiene un usuario por su nombre.
9. **`InsertUser`**: Inserta un nuevo usuario en la base de datos.
10. **`GetAllRecords`**: Obtiene todos los registros de ventas.
11. **`InsertRegistro`**: Inserta un nuevo registro de venta con detalles como fecha, ID del producto, cantidad, precio y ID del usuario.

## Funcionalidades Principales

- **Login:** Permite a los usuarios iniciar sesión.
- **Productos:** Permite agregar, editar y eliminar productos.
- **Registro de Ventas:** Muestra y permite gestionar los registros de ventas.

## Configuración y Ejecución

1. Clona este repositorio en tu máquina local.
2. Configura la base de datos según sea necesario.
3. Instala las dependencias del frontend y el backend usando `npm install`.
4. Inicia el frontend y el backend con los comandos `npm run dev` o `npm start`.


