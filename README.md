tsp-backend-nestjs-ulises
Este proyecto es un backend desarrollado con NestJS que implementa el algoritmo del Viajante de Comercio (TSP) utilizando el método del vecino más cercano para obtener una solución aproximada.
Descripción
El proyecto resuelve el problema del TSP generando ciudades con nombres únicos y coordenadas aleatorias dentro de límites definidos, asegurando que no se repitan ni estén fuera de rango. El algoritmo del vecino más cercano calcula una ruta aproximada que conecta todas las ciudades, comenzando y terminando en la misma ciudad. 
El código está diseñado con un enfoque orientado a objetos, modularizado y cubierto por pruebas unitarias. Los endpoints de la API fueron probados manualmente con Insomnia para verificar la generación de ciudades y la resolución de rutas válidas.
Tecnologías utilizadas

Node.js  
NestJS  
TypeScript  
Jest (para pruebas unitarias)  
Insomnia (para pruebas manuales de la API)

Instalación
Para instalar las dependencias del proyecto, ejecuta:
npm install

Cómo usar
Para iniciar el servidor en modo local:
npm run start

Esto levantará el backend en un puerto predeterminado (por ejemplo, http://localhost:3000), permitiendo consumir los endpoints con herramientas como Insomnia, Postman o cualquier cliente HTTP.

Pruebas
Para ejecutar las pruebas unitarias y verificar el correcto funcionamiento del algoritmo y las validaciones:
npm run test

Las pruebas cubren:

Validaciones de los límites del mundo.
Agregado correcto de ciudades.
Generación de coordenadas aleatorias.
Ejecución del algoritmo del vecino más cercano.

Todas las pruebas deben pasar (✔️).
Endpoints disponibles
POST /api/tsp/generate-cities
Genera un conjunto de ciudades aleatorias dentro de los límites especificados.
Payload de ejemplo:
{
  "numOfCities": 5,
  "bounds": { "x": 10, "y": 10 }
}

Respuesta esperada:Un conjunto de ciudades con nombres únicos y coordenadas válidas.
POST /api/tsp/solve
Calcula una ruta utilizando el algoritmo del vecino más cercano.
Payload de ejemplo:
{
  "cities": [
    { "name": "A", "coordinates": { "x": 1, "y": 1 } },
    { "name": "B", "coordinates": { "x": 5, "y": 2 } },
    { "name": "C", "coordinates": { "x": 2, "y": 7 } }
  ]
}

Respuesta de ejemplo:
{
  "route": ["A", "B", "C", "A"],
  "totalDistance": 17.24
}

Estructura del proyecto
/src/tsp/domain/
  └── Clases del modelo (World, City, WorldGenerator, TspSolver).
/src/tsp/controllers/
  └── Controladores que definen los endpoints de la API.
/src/tsp/dtos/
  └── Estructuras de datos para entrada y salida (DTOs).
/src/tsp/service/
  └── Lógica que conecta el dominio con los controladores.
/test/
  └── Pruebas unitarias con Jest para generación, validaciones y solución del TSP.
