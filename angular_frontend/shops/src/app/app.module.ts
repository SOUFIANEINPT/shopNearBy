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
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCookiesService } from './auth/login/auth-cookies.service';
import { NotFoundComponent } from './somting-else/not-found/not-found.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NoAuthGuardService } from './auth/no-auth-guard.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {GeoLocationService } from './geolocation-service.service';
import { PreferredRourcesService } from './my-preferred-shops/preferred-rources.service';
import { NearRourcesService } from './nearby-shops/near-rources.service';
const appRoutes: Routes=[
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent,canActivate:[NoAuthGuardService]},
  { path: 'register',component: RegisterComponent,canActivate:[NoAuthGuardService]},
  
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGuard]},
  { path: 'MyPreferredShops', component:MyPreferredShopsComponent, canActivate:[AuthGuard]},
  { path: 'NearbyShops',component:NearbyShopsComponent,canActivate:[AuthGuard]},

  {path: '404',component:NotFoundComponent},
  { path: '**', redirectTo: '404'},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MyPreferredShopsComponent,
    NearbyShopsComponent,
    NotFoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [AuthService,AuthGuard,NoAuthGuardService,AuthInterceptorService,AuthCookiesService,
    GeoLocationService,
    PreferredRourcesService,
    NearRourcesService,
    [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi: true
    }
  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
