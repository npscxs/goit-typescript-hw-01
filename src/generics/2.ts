type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top: AllType = {
  name: "apple",
  position: 43,
  color: "green",
  weight: 22,
};
const bottom: AllType = {
  name: "mango",
  position: 66,
  color: "yellow",
  weight: 33,
};

console.log("task-generics-2:", compare(top, bottom));
