import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './pages/home/main/main.component';
import { ButtonsComponent } from './pages/home/main/buttons/buttons.component';
import { IconsComponent } from './pages/home/main/icons/icons.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';

import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { AboutModule } from './pages/about/about.module';
import { CardComponent } from './pages/projects/card/card.component';
import { InfComponent } from './pages/about/inf/inf.component';
import { InfListComponent } from './pages/about/inf-list/inf-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MainComponent,
    ButtonsComponent,
    IconsComponent,
    ProjectsComponent,
    AboutComponent,
    CardComponent,
    InfComponent,
    InfListComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjectsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
