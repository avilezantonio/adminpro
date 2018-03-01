import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {

  @ViewChild('txtProgress')
  txtProgress: ElementRef;

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


  onChanges(value: number) {

    if (value > 100) {
      this.progressValue = 100;
    } else if (value < 0) {
      this.progressValue = 0;
    } else if (!value) {
      this.progressValue = 0;
    } else {
      this.progressValue = value;
    }

    this.txtProgress.nativeElement.value = this.progressValue;
    this.updateProgress.emit(this.progressValue);
  }

  changeProgressValue(value: number) {
    const nextValue: number = this.progressValue + value;
    if (nextValue <= 100 && nextValue >= 0) {
      this.progressValue = nextValue;
      this.updateProgress.emit(this.progressValue);
    }
  }

}
