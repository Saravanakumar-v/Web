import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TableViewComponent } from './main-page/table-view/table-view.component';
import { MainFormComponent } from './main-page/main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MainPageComponent,
    TableViewComponent,
    MainFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
