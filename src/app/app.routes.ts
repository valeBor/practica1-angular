import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Notfound } from './components/notfound/notfound';
import { Principal } from './components/principal/principal';
import { Error } from './components/error/error';

export const routes: Routes = [

    {path: 'lista', component: Lista},
    {path: 'error', component: Error},
    {path:'', component: Principal},
    {path:'**', component:Notfound}

];
