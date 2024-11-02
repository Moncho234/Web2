// Implementación de Length<T>
type Length<T extends readonly any[]> = T['length'];

// Ejemplos de uso
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type teslaLength = Length<tesla>; // esperado: 4
type spaceXLength = Length<spaceX>; // esperado: 5
 