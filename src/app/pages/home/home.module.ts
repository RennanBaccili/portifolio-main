import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from './main/buttons/buttons.component';
import { IconsComponent } from './main/icons/icons.component';

@NgModule({
  declarations: [
    MainComponent,
    ButtonsComponent,
    IconsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MainComponent,
    ButtonsComponent,
    IconsComponent,
  ]
})
export class HomeModule { }
