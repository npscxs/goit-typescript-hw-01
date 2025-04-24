function merge<T extends object, Y extends object>(objA: T, objB: Y): T & Y {
  return Object.assign(objA, objB);
}

type Obj = {
  name?: string;
  old?: number;
};

const objA: Obj = { name: "Renault" };
const objB: Obj = { old: 3 };

console.log("task-generics-3:", merge(objA, objB));
