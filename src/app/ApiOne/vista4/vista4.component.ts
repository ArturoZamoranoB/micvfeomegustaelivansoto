import { Component } from '@angular/core';
import { MiApi } from '../../models/miapi';
import { ApiService } from '../../Servicios/api.service';

@Component({
  selector: 'app-vista4',
  templateUrl: './vista4.component.html',
  styleUrl: './vista4.component.css'
})
export class Vista4Component {
 Miapis: MiApi[]=[];
 constructor(private services: ApiService){}

 ngOnInit():void{
  this.services.getPersonal().subscribe((result: MiApi[]) => (this.Miapis=result))
 }
}
