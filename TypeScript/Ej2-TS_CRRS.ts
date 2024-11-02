// Implementación de MyReadonly<T>
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Ejemplo de uso
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
};

// Estas asignaciones deberían dar error, ya que las propiedades son readonly
// todo.title = "Hello"; // Error: no se puede reasignar una propiedad readonly
// todo.description = "barFoo"; // Error: no se puede reasignar una propiedad readonly
