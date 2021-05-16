import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandButtonComponent } from './components/command-button/command-button.component';
import { CommonModule } from '@angular/common';
import { TransferNamePipe } from './pipes/transfer-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommandButtonComponent,
    TransferNamePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
