# tsp-backend-nestjs-ulises

Este proyecto es un backend desarrollado con NestJS que implementa el algoritmo del Viajante de Comercio (TSP) utilizando el método del vecino más cercano para obtener una solución aproximada, cumpliendo con los requisitos de la prueba técnica para desarrolladores backend.

## Resumen

El propósito de este proyecto es demostrar habilidades de resolución de problemas, programación orientada a objetos (OOP), y manejo de desafíos técnicos mediante la implementación de una solución al problema del Viajante de Comercio (TSP). La solución se enfoca en:

- Descomposición de problemas complejos y estructuración de la solución.  
- Aplicación de principios OOP para crear componentes modulares y reutilizables.  
- Optimización de rendimiento considerando la complejidad temporal.  
- Explicación clara del proceso de pensamiento y decisiones tomadas.

El código está escrito en TypeScript, sigue principios de diseño modular y está respaldado por pruebas unitarias. Los endpoints de la API fueron probados manualmente con Insomnia para garantizar su correcto funcionamiento.

## Descripción del problema

El Traveling Salesman Problem (TSP) consiste en, dado un conjunto de N ciudades y las distancias entre cada par de ciudades, encontrar la ruta más corta posible que visite cada ciudad exactamente una vez y regrese a la ciudad inicial. Dado que el problema es NP-hard, este proyecto implementa una solución aproximada utilizando el algoritmo del vecino más cercano.

El proyecto genera ciudades con nombres únicos y coordenadas aleatorias dentro de límites definidos, asegurando que no se repitan ni estén fuera de rango. La solución calcula una ruta aproximada que conecta todas las ciudades, comenzando y terminando en la misma ciudad.

## Tecnologías utilizadas

- Node.js  
- NestJS  
- TypeScript  
- Jest (para pruebas unitarias)  
- Insomnia (para pruebas manuales de la API)

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

npm install

## Cómo usar
Para iniciar el servidor en modo local:

npm run start

Esto levantará el backend en un puerto predeterminado (por ejemplo, http://localhost:3000), permitiendo consumir los endpoints con herramientas como Insomnia, Postman o cualquier cliente HTTP.

## Pruebas

Para ejecutar las pruebas unitarias y verificar el correcto funcionamiento del algoritmo y las validaciones, ejecuta:

npm run test

## Las pruebas cubren:

Validaciones de los límites del mundo.

Agregado correcto de ciudades.

Generación de coordenadas aleatorias.

Ejecución del algoritmo del vecino más cercano.

Todas las pruebas deben pasar (✔️).

## Endpoints disponibles

POST /api/tsp/generate-cities
Genera un conjunto de ciudades aleatorias dentro de los límites especificados.

## Payload de ejemplo:

json
{
  "numOfCities": 5,
  "bounds": { "x": 10, "y": 10 }
}

## Respuesta esperada:

Un conjunto de ciudades con nombres únicos y coordenadas válidas dentro de los límites especificados.

POST /api/tsp/solve
Calcula una ruta utilizando el algoritmo del vecino más cercano.

## Payload de ejemplo:

json
{
  "cities": [
    { "name": "A", "coordinates": { "x": 1, "y": 1 } },
    { "name": "B", "coordinates": { "x": 5, "y": 2 } },
    { "name": "C", "coordinates": { "x": 2, "y": 7 } }
  ]
}
## Respuesta de esperada:

json
{
  "route": ["A", "B", "C", "A"],
  "totalDistance": 17.24
}

Implementación del solver TSP:
Se implementó el algoritmo del vecino más cercano, que devuelve una ruta ordenada de ciudades y la distancia total.
La solución es eficiente para al menos N = 10 ciudades.

Cálculo de distancias:
Se implementó lógica para calcular distancias entre ciudades en un plano 2D utilizando coordenadas.

Endpoints REST:

POST /api/tsp/solve: Calcula la ruta más corta para un conjunto dado de ciudades.

POST /api/tsp/generate-cities: Genera ciudades aleatorias en un espacio 2D acotado.

''' Razonamiento y decisiones
La elección del algoritmo del vecino más cercano se basó en su simplicidad y buen desempeño para problemas pequeños (N ≤ 10). Aunque no garantiza una solución óptima, ofrece un balance razonable entre eficiencia y calidad de la solución. Para problemas más grandes, se podrían explorar algoritmos como algoritmos genéticos o branch and bound, pero no fueron necesarios para los requisitos actuales.
