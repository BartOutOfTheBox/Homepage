import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-buttons',
  templateUrl: './media-buttons.component.html',
  styleUrls: ['./media-buttons.component.css']
})
export class MediaButtonsComponent implements OnInit {

  BUTTONS: string[] = [
    'twitter',
    'github',
    'instapaper',
    'facebook'
  ];

  constructor() { }

  ngOnInit() {
  }

}
