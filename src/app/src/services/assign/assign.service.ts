import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AssignToCreate} from '../../models/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  readonly baseUrl = environment.host + environment.apiRoute + `/assignments`;

  constructor(private http: HttpClient) {
  }

  public assign(assign: AssignToCreate): Observable<any> {
    return this.http.post(this.baseUrl, assign);
  }
}
