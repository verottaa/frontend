import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  readonly baseUrl = environment.host + environment.apiRoute + `users/`;

  constructor(private http: HttpClient) {
  }

  public getPlans(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
