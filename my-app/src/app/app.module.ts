import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewHomeComponent } from './components/templates/view-home/view-home.component'
import { AssessorComponent } from './views/assessor/assessor.component';
import { NavigationBarComponent } from './components/organisms/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { ViewLoginComponent } from './components/templates/view-login/view-login.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    AssessorComponent,
    NavigationBarComponent,
    FooterComponent,
    ViewLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
