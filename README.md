# UDDFullStack-Proyecto5


Esta es la resolución del proyecto 5 relacionado al uso de React para despliegue de informacion de una API pública.

Se escogió la API: https://aviationstack.com/
Se requiere una Key para poder consultar la info. Solo hay que registrarse y se obtiene la Key.

![image](https://github.com/user-attachments/assets/e6b3a202-953f-4418-a545-8092f95ab1b2)

Una vez con la Key, se debe cambiar esta parte del codigo (ya que solo tiene 100 usos al mes)

![image](https://github.com/user-attachments/assets/4d12e527-1484-4eb3-a4a8-73f6c9cb788f)

Al clonar el proyecto y aplicarlos comandos en la terminal: 

  - npm i
  
  - npm run dev

Se debería ver así:

![image](https://github.com/user-attachments/assets/cc2cb374-6e76-43d5-921f-010fc8340d9a)

Basicamente se usa dos urls de la Api, una para obtener todos los aeropuertos que entrega por pais. (Al ser un Key no premium, solo entrega un porcion de información), y por otro lado se tienen todos los vuelos existentes en las fechas de los datos entregados, pudiendo ir obteniendo a partir de una fecha, todos los codigos IATA de los origenes, posteriormente todos los codigos IATA de los destinos, y finalmente qué vuelos asociados hay, para finalmente hallar los detalles de ese vuelo en particular.

## Seccion 1: Paises con Aeropuertos

![image](https://github.com/user-attachments/assets/c9de3797-57d9-4f6e-b0d9-64b9cbc26d44)


## Seccion 2: Fechas con vuelos

![image](https://github.com/user-attachments/assets/d1e5db83-f576-49c3-87e9-c6f9a8b4b8c2)


La interfaz de usuario está desplegada en la siguiente URL: https://uddfullstack-proyecto5.onrender.com/


