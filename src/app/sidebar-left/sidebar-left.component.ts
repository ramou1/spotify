import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {
  public playlist: any = [
    { name: "Playlist 01", owner: "Fulano", musics: [ { music: "Musica 01", artist: "Artista 01", album: "Album 01" } ] }, 
    { name: "Playlist 02", owner: "Fulano", musics: [ { music: "Musica 02", artist: "Artista 02", album: "Album 02" } ] },
    { name: "Playlist 03", owner: "Fulano", musics: [ { music: "Musica 03", artist: "Artista 03", album: "Album 03" } ] },
    { name: "Playlist 04", owner: "Fulano", musics: [ { music: "Musica 04", artist: "Artista 04", album: "Album 04" } ] }
  ];

  public nova_playlist: any = { nome: "", descricao: "" };

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log("oi", this.playlist);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, size: 'md' }).result.then((result) => {
    });
  }

  criarPlaylist(nova_playlist) {
    console.log("Playlist dados: ", nova_playlist);
  }



}
