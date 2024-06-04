# Lorenzzo móvil

## Descripción del Proyecto

Lorenzzo móvil es una aplicación móvil desarrollada con React Native que permite gestionar un inventario de productos de una tienda de ropa. La aplicación incluye funcionalidades para agregar, editar, eliminar y visualizar productos, categorizados en diferentes secciones como Sneakers, Shirts, Jeans, Kids, y Discounts. También se conecta a una base de datos local SQLite para almacenar y recuperar datos de productos.

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
   npm install react-native-sqlite-storage
   npx pod-install
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
| [localdb.ts](app/persistance/localdb.ts)             | Módulo que maneja la base de datos local utilizando SQLite.                                        |
| [Home.tsx](app/screens/Home.tsx)                | Pantalla principal que muestra los productos disponibles.                                          |
| [ProductAdd.tsx](app/screens/ProductAdd.tsx)           | Pantalla para agregar un nuevo producto.                                                           |
| [ProductDetails.tsx](app/screens/ProductDetails.tsx)       | Pantalla que muestra los detalles de un producto específico.                                       |
| [Sneakers.tsx](app/screens/Sneakers.tsx)             | Pantalla que muestra productos de la categoría Sneakers.                                           |
| [Shirts.tsx](app/screens/Shirts.tsx)              | Pantalla que muestra productos de la categoría Shirts.                                             |
| [Jeans.tsx](app/screens/Jeans.tsx)                | Pantalla que muestra productos de la categoría Jeans.                                              |
| [Kids.tsx](app/screens/Kids.tsx)                 | Pantalla que muestra productos de la categoría Kids.                                               |
| [Discounts.tsx](app/screens/Discounts.tsx)            | Pantalla que muestra productos en descuento.                                                       |
| [Product.ts](app/model/Product.ts)              | Modelo de datos para los productos.                                                                |

## Uso de la Aplicación y navegación de pantallas

1. **Inicio de Sesión**: Al iniciar la aplicación, se mostrará la pantalla de inicio de sesión.
   ![Captura de pantalla 2024-06-03 215337](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/dfd6fc15-1db5-4a64-9a41-acef3924db3a)
2. **Pantalla Principal**: Después de iniciar sesión, se mostrará la pantalla principal (`Home`) con una lista de productos.
   ![Captura de pantalla 2024-06-03 215358](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/1ae51905-cad5-40d5-bcf3-3c46d333e15d)
3. **Agregar Producto**: Puedes agregar un nuevo producto haciendo clic en el botón "Agregar producto" en el centro de la aplicación.
   ![Captura de pantalla 2024-06-03 215514](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/51317a14-246b-483a-b631-1897ef955bf1)
4. **Categorías**: Navega entre las diferentes categorías (Sneakers, Shirts, Jeans, Kids, Discounts) para ver productos específicos.
   ![Captura de pantalla 2024-06-03 215504](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/5d574612-0081-42d7-beed-81d6e91a22de)
   ![Captura de pantalla 2024-06-03 215410](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/dfb3edf8-eba2-40ec-8f2b-3e47f8885031)
   ![Captura de pantalla 2024-06-03 215425](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/5ba3642f-2ea6-4128-86d5-35c406f10df2)
   ![Captura de pantalla 2024-06-03 215438](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/99d88a7d-788e-400e-8160-cf8675ee3169)
   ![Captura de pantalla 2024-06-03 215451](https://github.com/OScorpion20/LorenzzoMovil/assets/113185652/1f3a7e02-c9e3-48d7-a890-76f962f60315)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.
