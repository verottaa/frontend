export class User {
  id: string;
  branch: string;
  dateOfStart: string;
  department: string;
  firstName: string;
  lastName: string;
  patronymic: string;
}

export class CreateUserDto {
  firstName: string;
  lastName: string;
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
