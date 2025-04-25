let unionType: string | number;
unionType = "Union type";
console.log("task-basic-3:", unionType);
unionType = 15;
console.log("task-basic-3:", unionType);
let status: "enable" | "disable";
console.log("task-basic-3:", (status = "enable"));
console.log("task-basic-3:", (status = "disable"));
