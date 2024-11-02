// Implementación de If<C, T, F>
type If<C extends boolean, T, F> = C extends true ? T : F;

// Ejemplos de uso
type A = If<true, 'a', 'b'>;  // esperado: 'a'
type B = If<false, 'a', 'b'>; // esperado: 'b'
