import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TerminalComponent } from './terminal.component';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TerminalComponent ],
      providers: [
        // { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('abouts extend input', () => {
    beforeEach(() => {
      component.canChange = true;
    });

    it('should show extend input when the "canChange" is true', () => {
      fixture.detectChanges()
      expect(fixture.nativeElement.querySelector('.input-command')).toBeTruthy();
    });
  
    it('should show one customer input when the "canChange" is true and has two command', () => {
      component.commands = ['ng g c', 'ng g component'];
      fixture.detectChanges()
  
      const commandInputs = fixture.nativeElement.querySelectorAll('.input-command');
      expect(commandInputs.length).toBe(1);
    });
  });

  
});
