import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NavinfoComponent } from './navinfo/navinfo.component';

const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path:'Inicio', component: PrincipalComponent},
  {path:'Contacto', component: ContactoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    ContactoComponent,
    NavinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
