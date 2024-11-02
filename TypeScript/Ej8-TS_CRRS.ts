// Implementación de Unshift<T, U>
type Unshift<T extends any[], U> = [U, ...T];

// Ejemplo de uso
type Result = Unshift<[1, 2], 0>; // esperado: [0, 1, 2]
type Example = Unshift<['b', 'c'], 'a'>; // esperado: ['a', 'b', 'c']
