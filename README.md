# LorenzzoMovil

## Descripción del Proyecto

LorenzzoMovil es una aplicación móvil desarrollada con React Native que permite gestionar un inventario de productos. La aplicación incluye funcionalidades para agregar, editar, eliminar y visualizar productos, categorizados en diferentes secciones como Sneakers, Shirts, Jeans, Kids, y Discounts. También se conecta a una base de datos local SQLite para almacenar y recuperar datos de productos.

## Requisitos de Instalación

Para ejecutar este proyecto en tu máquina local, asegúrate de tener instalados los siguientes requisitos:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- React Native CLI (https://reactnative.dev/docs/environment-setup)
- Android Studio (https://developer.android.com/studio) (para emular dispositivos Android)
- Git (https://git-scm.com/)

## Pasos de Instalación

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/OScorpion20/LorenzzoMovil.git
   cd LorenzzoMovil
   ```

2. **Instalar Dependencias**:
   ```bash
   npm install
   ```

3. **Configurar el Entorno**:
   Asegúrate de tener configurado el entorno de React Native siguiendo las instrucciones oficiales: [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

4. **Ejecutar la Aplicación**:
   ```bash
   npm start 
   ó
   npm run android
   ```

## Estructura del Proyecto

```plaintext
LorenzzoMovil/
│
├── app/
│   ├── context/
│   │   └── ProductContext.tsx
│   ├── persistance/
│   │   └── localdb.ts
│   ├── screens/
│   │   ├── Home.tsx
│   │   ├── ProductAdd.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Sneakers.tsx
│   │   ├── Shirts.tsx
│   │   ├── Jeans.tsx
│   │   ├── Kids.tsx
│   │   └── Discounts.tsx
│   └── model/
│       └── Product.ts
│
└── App.tsx
```

## Descripción de Archivos

| Archivo                   | Descripción                                                                                        |
|---------------------------|----------------------------------------------------------------------------------------------------|
| [App.tsx](/App.tsx)                 | Archivo principal de la aplicación que configura la navegación y el contexto global.               |
| [ProductContext.tsx](app/context/ProductContext.tsx)      | Contexto de React que proporciona un estado global para los productos.                             |
| [localdb.ts](persistance/localdb.ts)             | Módulo que maneja la base de datos local utilizando SQLite.                                        |
| [Home.tsx](screens/Home.tsx)                | Pantalla principal que muestra los productos disponibles.                                          |
| [ProductAdd.tsx](screens/ProductAdd.tsx)           | Pantalla para agregar un nuevo producto.                                                           |
| [ProductDetails.tsx](screens/ProductDetails.tsx)       | Pantalla que muestra los detalles de un producto específico.                                       |
| [Sneakers.tsx](screens/Sneakers.tsx)             | Pantalla que muestra productos de la categoría Sneakers.                                           |
| [Shirts.tsx](screens/Shirts.tsx)              | Pantalla que muestra productos de la categoría Shirts.                                             |
| [Jeans.tsx](screens/Jeans.tsx)                | Pantalla que muestra productos de la categoría Jeans.                                              |
| [Kids.tsx](screens/Kids.tsx)                 | Pantalla que muestra productos de la categoría Kids.                                               |
| [Discounts.tsx](screens/Discounts.tsx)            | Pantalla que muestra productos en descuento.                                                       |
| [Product.ts](app/model/Product.ts)              | Modelo de datos para los productos.                                                                |

## Uso de la Aplicación

1. **Inicio de Sesión**: Al iniciar la aplicación, se mostrará la pantalla de inicio de sesión.
2. **Pantalla Principal**: Después de iniciar sesión, se mostrará la pantalla principal (`Home`) con una lista de productos.
3. **Agregar Producto**: Puedes agregar un nuevo producto haciendo clic en el botón "Agregar producto" en el centro de la aplicación.
4. **Categorías**: Navega entre las diferentes categorías (Sneakers, Shirts, Jeans, Kids, Discounts) para ver productos específicos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.
