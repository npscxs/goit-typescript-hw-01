type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  console.log("task-generics-4:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
