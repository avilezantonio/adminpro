import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';


const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graphics', component: GraphicsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];



export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);