import { NgModule } from '@angular/core';
import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';
import { CustomModule } from '../custom/custom.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        GraphicsComponent,
        ProgressComponent,
        AccountSettingsComponent],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        CustomModule
    ],
    exports: [
        DashboardComponent,
        GraphicsComponent],
    providers: [],
})
export class PagesModule { }
