import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfComponent } from './inf/inf.component';
import { InfListComponent } from './inf-list/inf-list.component';


@NgModule({
  declarations: [
    InfComponent,
    InfListComponent,
  ],
  imports: [
    CommonModule,
  ],exports:[
    InfComponent,
    InfListComponent,
  ]
})
export class AboutModule { }
