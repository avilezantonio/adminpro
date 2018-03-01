import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';



@NgModule({
    declarations: [CounterComponent, ChartComponent],
    imports: [FormsModule, ChartsModule],
    exports: [CounterComponent, ChartComponent],
    providers: [],
})
export class CustomModule { }
