import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css','buttons.responsive.component.css']
})
export class ButtonsComponent {
  @Input()
  linkedin:string ='';

  @Input()
  github:string='';

  @Input()
  instagram:string='';
  
  @Input()
  email:string='';
}
