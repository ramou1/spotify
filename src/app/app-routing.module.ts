import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavegarComponent } from './navegar/navegar.component';
import { CurtidasComponent } from './curtidas/curtidas.component';
import { NovaPlaylistComponent } from './nova-playlist/nova-playlist.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlayerComponent } from './player/player.component';
import { RadioComponent } from './radio/radio.component';
import { DetalhesMusicaComponent } from './detalhes-musica/detalhes-musica.component';
import { DetalhesArtistaComponent } from './detalhes-artista/detalhes-artista.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navegar', component: NavegarComponent},
  {path: 'curtidas', component: CurtidasComponent},
  {path: 'nova-playlist', component: NovaPlaylistComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'detalhes-musica', component: DetalhesMusicaComponent},
  {path: 'detalhes-artista', component: DetalhesArtistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
