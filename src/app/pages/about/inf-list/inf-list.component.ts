import { Component,Input,NgModule } from '@angular/core';

@Component({
  selector: 'app-inf-list',
  templateUrl: './inf-list.component.html',
  styleUrls: ['./inf-list.component.css','./inf-list.responsive.component.css']
})
export class InfListComponent{

  @Input()
  title:string = "skylls";

  @Input()
  skylls:String[] = ['Trabalho em equipe','Comunicativo','Inglês Intermediario','Atenção aos detalhes'];
}
