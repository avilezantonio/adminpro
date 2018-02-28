import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {

  @Input()
  title: string = 'Title goes here';
  @Input()
  progressValue: number = 20;

  @Output()
  updateProgress: EventEmitter<number> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  changeProgressValue(value: number) {
    const nextValue: number = this.progressValue + value;
    if (nextValue <= 100 && nextValue >= 0) {
      this.progressValue = nextValue;
      this.updateProgress.emit(this.progressValue);
    }
  }

}
