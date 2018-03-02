import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnutchart/doughnutchart.component';



@NgModule({
    declarations: [CounterComponent, DoughnutChartComponent],
    imports: [FormsModule, ChartsModule],
    exports: [CounterComponent, DoughnutChartComponent],
    providers: [],
})
export class CustomModule { }
