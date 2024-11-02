// Implementación de MyExclude<T, U>
type MyExclude<T, U> = T extends U ? never : T;

// Ejemplo de uso
type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // esperado: 'b' | 'c'
