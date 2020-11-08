import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateUserDto, User, UserCreatedId} from '../../models/user';
import {AssignmentToCreate} from '../../models/assignment';

@Injectable({
  providedIn: 'root'
})
/**
 * Сервис работы с пользователями
 */
export class UsersService {

  /**
   * Адрес для запросов
   */
  baseUrl = environment.host + environment.apiRoute + `users/`;

  constructor(private http: HttpClient) {
  }

  /* CREATE */
  /**
   * Метод создания пользователя
   * @param user - новый пользователь
   */
  public createUser(user: CreateUserDto): Observable<UserCreatedId> {
    return this.http.post<UserCreatedId>(this.baseUrl, user);
  }

  /* READ */
  /**
   * Метод получения всех пользователей
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  /**
   * Метод получения пользователя по id
   * @param id - id запрашиваемого пользователя
   */
  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  /* UPDATE */
  /**
   * Метод обновления пользователя
   * @param user - обновляемый пользователь
   */
  public updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + user.id, user);
  }

  /* DELETE */
  /**
   * Метод удаления пользователя
   * @param userId - id удаляемого пользователя
   */
  public deleteUser(userId: string): Observable<any> {
    return this.http.delete(this.baseUrl + userId);
  }

  public assignToUser(user: User, assignment: AssignmentToCreate): Observable<any> {
    return this.http.post(`${this.baseUrl}/${user.id}/assign`, assignment);
  }
}
