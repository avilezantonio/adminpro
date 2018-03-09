import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graphics', component: GraphicsComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];



export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
