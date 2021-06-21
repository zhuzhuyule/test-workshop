import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommandButtonComponent } from './components/command-button/command-button.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { TransferNamePipe } from './pipes/transfer-name.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        CommandButtonComponent,
        TransferNamePipe,
        TerminalComponent,
        ExplorerComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
