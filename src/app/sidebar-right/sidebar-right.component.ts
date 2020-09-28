import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {

  public atividade: any = [
    { name: "Fulano", music: "Musica 01", artist: "Artista 01", album: "Album 01", playing: true}, 
    { name: "Ciclano", music: "Musica 02", artist: "Artista 02", album: "Album 02", playing: true},
    { name: "Fulano", music: "Musica 03", artist: "Artista 03", album: "Album 03", playing: true},
    { name: "Ciclano", music: "Musica 04", artist: "Artista 04", album: "Album 04", playing: false},
    { name: "Fulano", music: "Musica 05", artist: "Artista 05", album: "Album 05", playing: true},
    { name: "Ciclano", music: "Musica 06", artist: "Artista 06", album: "Album 06", playing: true},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
