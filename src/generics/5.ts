export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserStatus = Record<UserRole, string>;

const RoleDescription: UserStatus = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log("task-generics-5:", RoleDescription);
