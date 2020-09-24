import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavegarComponent } from './navegar/navegar.component';
import { RadioComponent } from './radio/radio.component';
import { CurtidasComponent } from './curtidas/curtidas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NovaPlaylistComponent } from './nova-playlist/nova-playlist.component';
import { PlayerComponent } from './player/player.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavegarComponent,
    RadioComponent,
    CurtidasComponent,
    PerfilComponent,
    NovaPlaylistComponent,
    PlayerComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
