import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styles: []
})
export class DoughnutChartComponent implements OnInit {

  @Input('title')
  public chartTitle: string = '';
  @Input('labels')
  public chartLabels: string[] = ['1', '2'];
  @Input('data')
  public chartData: number[] = [100, 200];
  @Input('type')
  public chartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
