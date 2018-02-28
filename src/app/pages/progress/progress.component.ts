import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progressValue: number = 25;

  constructor() { }

  ngOnInit() {
  }

}
