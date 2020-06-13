import { uuid } from "uuidv4";

class User {
  id: string;

  name: string;

  cell: string;

  password: string;

  avatar: string;

  constructor(name: string, cell: string, password: string, avatar: string) {
    this.id = uuid();
    this.name = name;
    this.cell = cell;
    this.password = password;
    this.avatar = avatar;
  }
}

export default User;
