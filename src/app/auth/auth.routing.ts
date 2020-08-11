import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes =[
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]
})

export class AuthRoutingModule{}