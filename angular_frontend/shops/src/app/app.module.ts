import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyPreferredShopsComponent } from './my-preferred-shops/my-preferred-shops.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard} from './auth/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
const appRoutes: Routes=[
  { path: 'login', component: LoginComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'MyPreferredShops', component:MyPreferredShopsComponent, canActivate:[AuthGuard]},
  { path: 'NearbyShops',component:NearbyShopsComponent,canActivate:[AuthGuard]},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MyPreferredShopsComponent,
    NearbyShopsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuard,AuthInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
