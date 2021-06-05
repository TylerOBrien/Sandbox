export enum FooType {
  First, Second, Third
}

export function isSameFoo(a: FooType, b: FooType): boolean {
  return a === b;
}
