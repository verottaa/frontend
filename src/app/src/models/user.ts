export class User {
  id: string;
  surname: string;
  name: string;
  patronymic: string;
  dateOfStart: string;
  position: string;
  branch: string;
  department: string;

  public static fake(
    id: string,
    surname: string,
    name: string,
    patronymic: string,
    position: string,
  ): User {
    const user = new User();
    user.id = id;
    user.surname = surname;
    user.name = name;
    user.patronymic = patronymic;
    user.position = position;
    return user;
  }

  public static generateFakeList(
    surname: string,
    name: string,
    patronymic: string,
    position: string,
    count: number,
  ): User[] {
    const users: User[] = [];
    for (let i = 0; i < count; i++) {
      users.push(User.fake(`${i}`, surname, name, patronymic, position));
    }
    return users;
  }

  public static fromDTO(userDto: CreateUserDto): User {
    const user = new User();
    Object.keys(userDto).forEach(key => user[key] = userDto[key]);
    return user;
  }

  constructor() {
  }

  public getFullName(): string {
    return `${this.getSurnameAndName()} ${this.patronymic}`;
  }

  public getSurnameAndName(): string {
    return `${this.surname} ${this.name}`;
  }
}

export class CreateUserDto {
  name: string;
  surname: string;
  patronymic: string;
  dateOfStart: string;
  branch: string;
  department: string;
  position: string;

  toUser(userId: string): User {
    const user = User.fromDTO(this);
    user.id = userId;
    return user;
  }
}

export class UserCredentials {
  login: string;
  password: string;
}

export class UserCreatedId {
  id: string;
}
