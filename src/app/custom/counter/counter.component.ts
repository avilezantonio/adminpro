import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {

  title: string = 'Title goes here';
  progressValue: number = 20;
  constructor() { }

  ngOnInit() {
  }

  changeProgressValue(value: number) {
    const nextValue: number = this.progressValue + value;
    if (nextValue <= 100 && nextValue >= 0) {
      this.progressValue = nextValue;
    }
  }

}
