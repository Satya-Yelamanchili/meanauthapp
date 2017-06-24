import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { RouterModule, Routes } from '@angular/router'

import { FlashMessagesModule } from 'angular2-flash-messages'
import { ValidationService } from './services/validation.service'
import { AuthService } from './services/auth.service'

const approutes: Routes = [
  { path:'', component: HomeComponent  },
  { path:'register', component: RegisterComponent  },
  { path:'login', component: LoginComponent  },
  { path:'dashboard', component: DashboardComponent  },
  { path:'profile', component: ProfileComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes),
    FlashMessagesModule
  ],
  providers: [ValidationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }