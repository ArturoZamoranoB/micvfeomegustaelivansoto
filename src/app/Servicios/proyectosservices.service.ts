import { Injectable } from '@angular/core';
import { Proyectos } from '../models/proyecto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectosservicesService {
  url= 'Proyectos'
  constructor(private http: HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${environment.apiUrl}${this.url}`);
  }

}
