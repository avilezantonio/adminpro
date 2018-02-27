import { NgModule } from '@angular/core';
import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        GraphicsComponent],
    imports: [SharedModule,
        PAGES_ROUTES],
    exports: [
        DashboardComponent,
        GraphicsComponent],
    providers: [],
})
export class PagesModule { }
