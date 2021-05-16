import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.less'],
})
export class TerminalComponent implements OnInit {
  constructor() { }
  @Input()
  set defaultExtendCommand(command: string) {
    this.extendCommand = command;
  }
  @Input() commands = [''];
  @Input() canChange = false;
  @Input() placeholder = '';

  @Output() extendCommandChange = new EventEmitter<string>();

  extendCommand = '';

  ngOnInit() { }

  onExtendCommandChange(extendCommand: string) {
    this.extendCommand = extendCommand;
    this.extendCommandChange.emit(extendCommand);
  }
}
