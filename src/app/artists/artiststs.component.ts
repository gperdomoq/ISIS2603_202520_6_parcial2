import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artiststs',
  standalone: false,
  templateUrl: './artiststs.component.html',
  styleUrls: ['./artiststs.component.css']
})
export class ArtiststsComponent implements OnInit {

  constructor() {
    id: number;
    name: string;
    image: string;
    spotify_id: number;
   }

  ngOnInit() {
  }

}
