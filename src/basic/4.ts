function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Custom Error");
}

showMessage("task-basic-4: Some text");
console.log("task-basic-4:", calc(4, 5));
export { customError };
