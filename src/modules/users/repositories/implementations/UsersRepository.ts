import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    this.users.push(Object.assign(user, { name, email }));

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const userIndex = this.users.findIndex(({ id }) => id === receivedUser.id);

    this.users[userIndex].admin = true;

    return this.users[userIndex];
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
