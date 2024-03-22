import { Component, OnInit } from '@angular/core';
import { Proyectos } from './models/proyecto';
import { ProyectosservicesService } from './Servicios/proyectosservices.service';
import { ApiService } from './Servicios/api.service';
import { MiApi } from './models/miapi';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prueba2';
  proyectos: Proyectos[] = [];
  miapi: MiApi[] = [];


  constructor(private proyectosService: ProyectosservicesService, private ApiService: ApiService ) {}

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe((result: Proyectos[]) => {
      this.proyectos = result;
    });

    this.ApiService.getPersonal().subscribe((result: MiApi[]) => {
      this.miapi = result;
    });
  }
}