import { Injectable } from '@angular/core';
import { ApiPrestada } from '../models/apiPrestada';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiPService {
  url='Products'
  constructor(private http: HttpClient) { }

  public getProducts():Observable<ApiPrestada[]>{
    return this.http.get<ApiPrestada[]>(`${environment.threeapiUrl}${this.url}`);
  }
}