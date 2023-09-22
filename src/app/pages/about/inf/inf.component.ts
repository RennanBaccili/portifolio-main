import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inf',
  templateUrl: './inf.component.html',
  styleUrls: ['./inf.component.css','./inf.responsive.component.css']
})
export class InfComponent {
  @Input()
  imagem:string ="";

  @Input()
  title:string="Sobre mim";

  @Input()
  paragraph:string[]=["Sou apaixonado por programação, amo programar,meu dia começa e termina estudando programação, amo o que faço, estou em busca de novas desafios e oportunidades que me permitam evoluir e crescer como programador, seja de forma pessoal e profissional.","Sou muito organizado e meus principais conhecimentos são focados principalmente nas tecnologias HTML, CSS, Java Script,  TypeScrypt, Angular  mas também programo em JAVA POO, PYTHON."];

}
