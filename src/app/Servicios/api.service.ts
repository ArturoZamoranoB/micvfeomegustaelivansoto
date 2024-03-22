import { Injectable } from '@angular/core';
import { MiApi } from '../models/miapi';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='Personal'
  constructor(private http: HttpClient) { }

  public getPersonal():Observable<MiApi[]>{
    return this.http.get<MiApi[]>(`${environment.twoapiUrl}${this.url}`);
  }
}



