export class User {
  id: string;
  branch: string;
  dateOfStart: string;
  department: string;
  name: string;
  surname: string;
  patronymic: string;
}

export class CreateUserDto {
  name: string;
  surname: string;
  patronymic: string;
  dateOfStart: string;
  branch: string;
  department: string;

  toUser(userId: string): User {
    return {
      ...this,
      id: userId
    };
  }
}

export class UserCredentials {
  login: string;
  password: string;
}

export class UserCreatedId {
  id: string;
}
