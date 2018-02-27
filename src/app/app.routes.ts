
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent, } from './login/login.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent }

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
