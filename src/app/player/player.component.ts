import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public favorite: boolean = false;
  public play: boolean = false;
  public mute: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  favoriteSong() {
    this.favorite = !this.favorite;
  }

  playSong() {
    this.play = !this.play;
  }

  muteSong() {
    this.mute = !this.mute;
  }

}
