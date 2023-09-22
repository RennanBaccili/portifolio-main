import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','./card.responsive.component .css']
})
export class CardComponent {

  @Input()
  nameProject:String = 'Projeto em andamento';
  @Input()
  description:String = 'Projeto em desenvolvimento';
  @Input()
  tecnologias:String[] = [''];

  @Input()
  link:String='https://github.com/RennanBaccili';

  @Input()
  imagem_1:String='https://img.freepik.com/vetores-premium/icone-de-escudo-projeto-de-trabalho-em-andamento-grafico-de-vetor_24908-25791.jpg?w=2000';

  @Input()
  imagem_2:String='https://img.freepik.com/vetores-premium/icone-de-escudo-projeto-de-trabalho-em-andamento-grafico-de-vetor_24908-25791.jpg?w=2000';
}
