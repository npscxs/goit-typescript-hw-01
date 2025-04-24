type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const nulForm: Params = {
  email: null,
  firstName: null,
  lastName: null,
  phone: null,
};

console.log("task-generics-5:", nulForm);
