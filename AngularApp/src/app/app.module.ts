import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes=[
  {path:'user-reg', component:UserRegistrationComponent},
  {path:'user-signIn', component:UserSignInComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserSignInComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
