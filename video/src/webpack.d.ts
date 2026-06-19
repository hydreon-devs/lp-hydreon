// Remotion bundlea con webpack, que expone require.context para "globbear"
// directorios. Declaración mínima para que TypeScript no se queje.
declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp,
  ): {
    keys(): string[];
    (id: string): string;
  };
};
