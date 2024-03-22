import { Component } from '@angular/core';
import { Proyectos } from '../../models/proyecto';
import { ProyectosservicesService } from '../../Servicios/proyectosservices.service';

@Component({
  selector: 'app-uchalamama',
  templateUrl: './uchalamama.component.html',
  styleUrl: './uchalamama.component.css'
})
export class UchalamamaComponent {
  proyectos: Proyectos[]=[];
  constructor(private services: ProyectosservicesService){}

  ngOnInit():void{
    this.services.getProyectos().subscribe((result: Proyectos[]) => (this.proyectos=result))
  }
}
