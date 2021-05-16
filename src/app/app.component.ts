import { Component, OnInit } from '@angular/core';
import { CommandService, CommandType, ExecuteResultType } from './services/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private commandService: CommandService) { }

  commandList = this.commandService.commandList;

  commandItem: CommandType = this.commandService.commandList[0];

  executeResult: ExecuteResultType | null = null;


  private _extendCommand: string = '';
  get extendCommand() {
    return this._extendCommand;
  }
  set extendCommand(command: string) {
    this._extendCommand = command;
    this.executeResult = this.commandService.executeCommand(this.commandItem.type, command);
  }

  ngOnInit() {
    this.extendCommand = '';
  }

  onCommandChange(command: CommandType) {
    this.commandItem = {...command};
    this.onExtendCommandChange(this.extendCommand);
  }

  onExtendCommandChange(extendCommand: string) {
    this.extendCommand = extendCommand;
  }

}
