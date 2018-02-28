import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  redBar: number = 5;
  blueBar: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
