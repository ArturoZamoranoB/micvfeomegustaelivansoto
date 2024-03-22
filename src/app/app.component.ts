import { Component, OnInit } from '@angular/core';
import { Proyectos } from './models/proyecto';
import { ProyectosservicesService } from './Servicios/proyectosservices.service';
import { ApiService } from './Servicios/api.service';
import { MiApi } from './models/miapi';
import { ApiPrestada } from './models/apiPrestada';
import { ApiPService } from './Servicios/api-p.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prueba2';
  proyectos: Proyectos[] = [];
  miapi: MiApi[] = [];
  apiprestada: ApiPrestada[] = [];

  constructor(private proyectosService: ProyectosservicesService, private ApiService: ApiService, private ApiPservice: ApiPService ) {}

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe((result: Proyectos[]) => {
      this.proyectos = result;
    });

    this.ApiService.getPersonal().subscribe((result: MiApi[]) => {
      this.miapi = result;
    });

    this.ApiPservice.getProducts().subscribe((result: ApiPrestada[]) => {
      this.apiprestada = result;
    });
  }
}