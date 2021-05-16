import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandButtonComponent } from './components/command-button/command-button.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { CommonModule } from '@angular/common';
import { TransferNamePipe } from './pipes/transfer-name.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommandButtonComponent,
    TransferNamePipe,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
