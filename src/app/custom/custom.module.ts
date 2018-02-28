import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [CounterComponent],
    imports: [ FormsModule ],
    exports: [CounterComponent],
    providers: [],
})
export class CustomModule {}
