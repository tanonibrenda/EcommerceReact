# EcommerceReact

Proyecto de final de curso 😄

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Contribución](#contribución)
- [Agradecimientos](#Agradecimientos)
- [Licencia](#licencia)

## Instalación

```bash
git clone https://github.com/tanonibrenda/EcommerceReact.git

cd EcommerceReact
|_ cd frontend
| |_ npm install
|        |_npm start
|_cd backend
    |_npm install
        |_nodemon


##Uso
Para usar este proyecto, sigue los siguientes pasos:
1. Clona el repositorio en tu máquina local utilizando git o descarga el archivo zip y descomprímal
2. Abre la carpeta del proyecto en un editor de texto (VS Code, Atom, Sublime Text, etc.)
3. En una terminal, ingresa a la carpeta "frontend" y ejecuta `npm install` para instalar las dependencias
4. Luego, correr `npm start` para arrancar el servidor de desarrollo, y ver en el navegador el elemento frontend
4. Luego, inicia el servidor con `npm start`. El sitio se abrirá automáticamente en tu navegador
5. Para acceder al back end, debes tener NodeJS y MongoDB instalados en tu computadora. Ingresa a la carpeta backend
6. En la terminal, instalar las dependencias con npm install
7. Iniciar el server con nodemon
8. Conectate a MongoDB
9. Crea una base de datos llamada CRUD_DB 

## Características
La siguiente lista detalla algunas de las características implementadas en este proyecto:
- Paginación de productos
- Buscador de productos (con Api interna)
- Agregado al carrito de compras (con Api Interna)
- Ordenes de compra (desactive la Api de PayPal al no lograr que funcione sin agregar datos personales sensibles)
- Implementación de Bootstrap para diseño responsive
- Implementación de Axios para realizar peticiones HTTP
- Implementación de Babel para transpilar el código JavaScript moderno a versiones anteriores
- Para Api´s externas utilicé spoonacular para acceder a más recetas de cocina. Y a formsumit, que es una api para enviar mails desde formulario de contacto sin escribir un código interno específico.
- Hay un CRUD de productos a un archivo productos.json en el frontend, creado para la primera parte del proyecto que no quise dejar. Y un CRUD con mongodb para los usuarios. Es "sensilla" (para no usar otros adjetivos menos favorables).
- Comentarios de más, algunas escritos es momentos de desesperación. No los borré para no olvidar el estado de demencia que al que puedo llegar.

##Contribución
Si quieres contribuir a este proyecto, puedes hacerlo de varias maneras:
envia un mail a brendayohenatanoni@gmail.com con toda las cosas que están mal y necesitan ser corregidas.

##Agradecimientos
- A mi mentor Exequiel Sandoval
- A mis compañeros de clase por su apoyo y colaboración