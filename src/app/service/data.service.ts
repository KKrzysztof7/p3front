import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {gatunek} from '../models/gatunek';
import {ListGatunekComponent} from '../gatunekComponents/list-gatunek.component';
import {Http, Headers} from '@angular/http';

@Injectable()
  export class DataService {
  constructor(private http: Http) {}
  private headers = new Headers({'Content-Type': 'application/json'});

  getAllGatunek(): Promise<gatunek[]> {
  return this.http.get(`gatunki`)
  .toPromise()
  .then(response => response.json() as gatunek[])
  .catch(this.handleError);
  }

  createNewGatunek(gatunek: gatunek): Promise<gatunek> {
  return this.http
  .post(`gatunek`, JSON.stringify(gatunek), {headers : this.headers} )
  .toPromise()
  .then(res => res.json() as gatunek)
  .catch(this.handleError);
  }

  deleteGatunek(gatunek: gatunek): Promise<void> {
  return this.http
  .delete(`gatunek/${gatunek.id}`)
  .toPromise()
  .then(() => null)
  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
  console.error('Error', error);
  return Promise.reject(error.message || error);
  }

}
