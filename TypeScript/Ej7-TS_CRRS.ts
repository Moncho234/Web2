// Implementación de Push<T, U>
type Push<T extends any[], U> = [...T, U];

// Ejemplo de uso
type Result = Push<[1, 2], '3'>; // esperado: [1, 2, '3']
type Example = Push<['a', 'b'], 'c'>; // esperado: ['a', 'b', 'c']
