# JAVASCRIPT PARA REACT 

![Descripción de la imagen](https://media.licdn.com/dms/image/D4D16AQEdyuYnhXWdNA/profile-displaybackgroundimage-shrink_200_800/0/1679948804852?e=2147483647&v=beta&t=PPO64AhSZL64A9kCJYRQTF__j1NdtFodERQzLJpjmaw)




## 01_templateLiterals.js

- **ES5**: 

   Se utiliza la concatenación de cadenas para incluir variables en una cadena de texto.

   ```javascript
   console.log('Bienvenida ' + firstName + ' ' + secondName);.
   ```
- **ES6**:

   Se introducen las plantillas literales, que permiten la interpolación de variables en una cadena de texto de una manera más legible y expresiva.


   ```javascript
   console.log(`Bienvenida ${firstName} ${secondName}`);
   ```

- **React**:

   Se crea un componente LinkButton que acepta una clase, un texto y una dirección de enlace como props, y utiliza plantillas literales para establecer la clase del elemento.



## 02_shorthandPropertyName.js 

- **ES5**:

   Se utiliza la notación estándar para definir un objeto, donde cada propiedad debe ser explícitamente nombrada y asignada a una variable correspondiente.


   ```javascript
      console.log({  message: message, count: count, flags: flags});
   ```
   - Por ejemplo se crea un objeto, donde las claves y los valores están explicitados y las propiedades tienen el mismo nombre que las variables.`


- **ES6**:

   Nos permite omitir la clave de la propiedad si es idéntica al nombre de la variable que se está asignando.

   ```javascript
      console.log({ message, count, flags});

   ```
   - Por ejemplo se crea un objeto utilizando propiedades de nombre corto.
      

## 03_arrowFunctions.js:

- **ES5** :
   
   Se definen funciones de la forma tradicional con la palabra clave function.
   
   ```
   Ejemplos: 
   getZero, multiplyByTwo, subtract 
   ```
   - Estas funciones realizan operaciones básicas de retorno de un valor, multiplicación y división.


- **ES6**:

   Se introducen las funciones de flecha, que tienen una sintaxis más concisa y no comparten el this de su entorno inmediato.

   ```
   Ejemplos: 
   getZeroWithAF, multiplyByTwoWithAF, subtractWithAF
   ```
   - Estas funciones utilizan la sintaxis de las funciones de flecha.

-  **React** :

   Se crea un componente `MessageList` que acepta una prop messages y muestra una lista de elementos. El cual es similar al TaskList, pero utiliza una lista de mensajes y la clave para el map es el índice.

## 04_destructuring.js:

-  **ES5:**:
   ```
   computeAverage(coordinates)
   ```
    
   - Calcula el promedio de las propiedades `a`, `b`, y `c` del objeto, estableciendo `c` en 12 por defecto si no está presente.

- **ES6:**

   ```
   computeAverageWithDestructuring(coordinates) 
   ```
   - Calcula el promedio de las propiedades `a`, `b` (con alias `e`), y `c`, con `c` por defecto en 5.




   ```
   calcAverageWithDestructuringParam(coordinates)
   ```
   - Desestructura los parámetros `a`, `b` (alias `e`), y `c` en la función, y calcula el promedio,  con `c` por defecto en 7.




   ```
   calcAverageWithDestructuringAF(coordinates)
   ```
   - Una función de flecha que desestructura los parámetros y calcula el promedio, con `c` por defecto en 7.



## 05_parameterDefaults.js:

-  **ES5:**:
   ```
   multiply(x, y)
   ```
    
   Verifica si `x` o `y` están undefined y les asigna un valor por defecto de 1. Luego, multiplica `x` por `y` utilizando `return x * y;`.

- **ES6:**

   ```
   multiplyWithDefaults(x, y)
   ```
   Establece valores por defecto para `x` e `y` en la declaración de la función y realiza la multiplicación igual que  `function multiply(x, y)`.

   ```
   multiplyWithDefaultsAF(x, y)
   ```
   Se Utiliza la sintaxis de flecha para definir una función que establece valores por defecto y multiplica `x` por `y`.

## 06_esModules.js:

   ```
   function subReduce(a, b)
   ```
   calcula la resta entre dos números a y b ; y retorna el resultado de la resta a - b .

   ```
   Variables: nameAPI y portNumber
   ```

   nameAPI: Almacena la dirección del servidor API como 'localhost:8080'.

   portNumber:  Almacena el número de puerto del servidor como 8000.

   ```
   module.exports = {subReduce, nameAPI, portNumber};
   ```

   Exporta subReduce, nameAPI, y  portNumber como un objeto, lo cual permite que otros archivos o módulos importen estos elementos para utilizarlos en sus propias operaciones.

   ```
   const { subReduce } = require('./06_esModules');
   ```

   Importa subReduce desde el archivo especificado en este caso "('./06_esModules')" utilizando desestructuración, lo cual permite el uso de la función subReduce en el archivo actual después de la importación.




**`ES6 : `**

```
export const subtract = (a, b) => a - b
```

Exporta una función de resta que calcula la resta de dos números a y b

   ```
   export const nameapi = 'localhost'
   ```
   Exporta la variable nameapi que almacena la dirección del servidor.

   ```
   export const port = 8000;
   ```
   Exporta una variable port que almacena el número de puerto del servidor.

   ```
   import { subtract, nameapi, port } from './05_parameterDefaults
   ```
   Importa subtract, nameapi, y port desde el archivo especificado, para permitirnos usar la función  y acceder a las variables 'nameapi' y 'port'.



## 07_ternaries.js

   - **ES5**:

      ```
      if (username) { ... } else { ... }
      ```
      Se tiliza una estructura condicional para asignar el mensaje de estado en función de la presencia del nombre de usuario.

   - **ES6**:
   
      ```
      username ? (statusMessage = 'El nombre de usuario existe') : (statusMessage = 'No se ha ingresado nombre de usuario');
      ```
      Se utiliza la condición ternaria para simplificar la asignación de mensajes basados en la presencia o ausencia de un nombre de usuario.


## 08_arrayMethods.js

- **`FIND`**: Busca el primer vehículo cuyo modelo coincide con el especificado.

- **`SOME`**: Verifica si al menos un vehículo tiene 'Black' en su lista de colores.

- **`EVERY`**: Comprueba si todos los vehículos tienen 'White' en su lista de colores.

- **`MAP`**: Crea un nuevo array que contiene solo los modelos de los vehículos.

- **`FILTER`**: Genera un nuevo array que contiene vehículos cuyo lista de colores incluye 'Blue'.

- **`Eliminar elementos`**:  Filtra el array para excluir un vehículo cuyo id coincide con el especificado.
