import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewHomeComponent } from './components/templates/view-home/view-home.component'
import { AssessorComponent } from './views/assessor/assessor.component';
import { NavigationBarComponent } from './components/organisms/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    AssessorComponent,
    NavigationBarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
