# ReactJS - Proyecto e-commerce

[![GitHub Profile](https://img.shields.io/badge/GitHub-informational?style=for-the-badge&logo=GitHub&logoColor=171515&color=23272d)](https://github.com/vaneburman)
[![LinkedId](https://img.shields.io/badge/LinkedIn-informational?style=for-the-badge&logo=linkedin&logoColor=0077b5&color=23272d)](https://linkedin.com/in/vanesaburman/)

# Presentación

Soy Vanesa Burman. Este es mi proyecto final para el curso de ReactJS en [CoderHouse](https://www.coderhouse.com), cursado en Agosto de 2021.  
La base del proyecto es un ecommerce con React, implementado con herramientas tales como React Router DOM, React Hooks, Material UI para la definición de estilos homogéneos y Firebase como base de datos. 

# Inicializando el Proyecto
Este proyecto fue creado con  [Create React App](https://github.com/facebook/create-react-app).  

## Installation

Para instalar las dependencias requeridas, ejecutar `npm install`

## Uso

Para iniciar el servidor, ejecutar `npm start`. Para acceder a la App luego de inicializado el servidor, abrir http://localhost:3000 en el navegador.

## Example Usage:



# Librerías/Dependencias utilizadas

## Material UI

Se utilizó Material UI como base del estilo para la página; una de las razones de la elección es para poder concentrarme en la implementación de React, finalidad principal del curso, permitiendo una interfaz homogénea, simple y coherente. En segunda instancia, la elección inicial de Material UI responde a la proyección de implementar mejoras en la web App y construirla en PWA, por lo cual el look & feel debía responder a ciertos criterios para darle un aspecto similar a una app nativa. Por último, y no menos importante, hice uso de Material UI para aprenderlo en un entorno de clase, porque es una herramienta muy solicitada y mi intención era poder familiarizarme en instancias tempranas.

## React-Router-DOM
Para brindarle enrutamiento a la página, utilicé la colección de componentes que nos brinda React Router para las aplicaciones web. De esta forma, se otorgó navegabilidad a la app.

## React-Swipeable-Views
Se utilizaron las funciones de SwipeableViews y AutoPlay para generar el banner/carrousel clickeable que se muestra en el Home [solo en la versión desktop]. 

## Storage de imágenes/assets
Las imágenes se encuentran almacenadas en Storage de [Firebase](https://firebase.google.com/) 

# Documentación

## Convenciones

Los nombres de los componentes React por convención están escritos en Pascal Case. Las variables y funciones implementadas estan escritas en Camel Case.
Se utilizaron custom Hooks para implementar el context, siguiendo la convención adecuada: useNombreDelCustom.


## Flujo de Compra

El usuario ingresa a la web y se despliega en el Home, un listado de los productos y un carrousel con los últimos productos añadidos (solo en versión desktop). A través del menú, puede seleccionar la categoría de interés, y navegar por un listado de productos filtrado para seleccionar el/los que desea. 
Se agrega el producto al carrito, se muestra en el toolbar el icono del carrito con un badge con la cantidad de items totales (siendo items totales la suma de las unidades de cada producto añadido). Una vez decidida la compra, en la sección Cart el usuario puede revisar y eliminar productos, confirmar la compra o seguir comprando. En caso de confirmar la compra, se monta el componente de checkout con los diferentes pasos a seguir para generar la orden de compra: el formulario para captar los datos personales del buyer (usuario) que persiste en firebase/firestore, un formulario para agregar el método de pago y un review de la compra. Al confirmar, se genera la orden de compra persistente en una colección de firestore, y el usuario observa un mensaje con el número de ID de su compra y el total, redirigiendo al home y recargando la web.

## Estructura y Componentes

A nivel raiz de la app, en el componente App, se encuentran los Providers de context API (CustomProvider y OCProvider) y el BrowserRoute. De esta forma, todos los componentes que estén incluídos en App van a poder consumir el contexto, tanto del carrito como de las ordenes de compra, y se puede hacer uso de las rutas de "React-Router-DOM" desde cada componente.
Dentro de las rutas de navegación, se implementó la ruta 404, page not found.
El Header contiene el NavBar implementado como un AppBar, con las diferentes rutas de navegación.
El main de la página se encuentra en el Home Page. A partir de esta página, se despliega el patrón de Container, List and Detail, cuya lógica es la siguiente:

-   Containers: realizan los pedidos a Firestore. En el caso de ItemListContainer a través de un GET trae todos los productos en la colección correspondiente; si estamos navegando por una categoría, retorna los productos filtrados por esa categoría con un WHERE. En el caso de ItemDetailContainer, el pedido a firestore se hace a un único documento (el producto con el ID de interés) a través de DOC.
-   List: solo se implementó en el caso de pedidos de múltiples productos. Es el componente responsable de realizar el mapeo de items que provienen del pedido a Firestore.
-   Detail: Los componentes del tipo Detail, son los encargados de desplegar la información traída o mapeada para mostrarla al usuario.

En tanto, el componente CartPage despliega la información del carrito, y permite renderizar el componente Checkout en caso de finalizar la compra. Este componente Checkout se encuentra enmarcado en un CheckoutPage, y consta del renderizado de un formulario de pasos activos, para completar primero los datos personales del comprador (persistencia en Firestore), maquetado de los datos de pago, un review de la compra y finalmente el renderizado de la confirmación de compra con los datos de la OC (persistente en Firestore)

### PAGES 
Se generó una carpeta para los diferentes componentes utilizados en las rutas de "React-Router-DOM". Cada página renderiza, o bien un container de productos, o bien una tabla de datos sobre el usuario o la compra. Por ejemplo, el archivo HomePage.js implementa el componente homónimo, que renderiza el componente ItemListContainer, el cual según los id params que recibe, puede realizar el pedido de productos totales a firestore o un pedido filtrado según categoría seleccionada. Por otro lado, el componente CartPage implementa un renderizado condicional, en el cual muestra la tabla de productos en el carrito o un botón para redireccionar al Home si no existen aún productos en el carrito.

## Contexts



-   Se utiliza "createContext" de react para poder implementar un contexto.
- A través de custom Hooks, se simplifica el consumo de contexto en los diferentes componentes de la aplicación.


### CustomProvider
Este Provider de contexto se utiliza para todo el estado del carrito. El Context Value que se propaga a los children del componente provider, contiene un estado del array de productos en el carrito, junto con los métodos necesarios para actualizarlo (agregar item, eliminar item y vaciar el carrito). También contiene un estado que propaga el precio total del carrito, junto con el método para calcularlo. 

### OCProvider
Este Provider nos provee la información correspondiente de la OC y el proceso de Checkout del comprador. El Context Value contiene los estados correspondientes a los datos de la OC y el comprador, como objetos, y de los ID para identificar estos documentos en sus correspondientes colecciones, como strings. También se agregan métodos necesarios para actualizar estos estados. 

### Gif de navegación

[Ver Online](https://drive.google.com/drive/folders/1tW6u42kBl4hvS-YkxZUa77BC4VRO3qGy?usp=sharing)

## Sugerencias/consultas

Si tienen alguna consulta sobre el repositorio o el proyecto, generen un issue en  [Vanesa Burman](https://github.com/ryan-harris) o contacten directamente en vanesa.burman@hotmail.com.

