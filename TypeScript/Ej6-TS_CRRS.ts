// Implementación de Concat<A, B>
type Concat<A extends any[], B extends any[]> = [...A, ...B];

// Ejemplo de uso
type Result = Concat<[1], [2]>; // esperado: [1, 2]
type Example = Concat<[1, 2, 3], [4, 5]>; // esperado: [1, 2, 3, 4, 5]
