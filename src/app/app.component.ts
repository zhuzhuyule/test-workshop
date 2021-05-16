import { Component } from '@angular/core';
import { CommandService, CommandType, ExecuteResultType } from './services/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private commandService: CommandService) { }

  commandList = this.commandService.commandList;

  commandItem: CommandType = this.commandService.commandList[0];

  executeResult: ExecuteResultType | null = null;

  onCommandChange(command: CommandType) {
    this.commandItem = {...command};
  }

  onExtendCommandChange(extendCommand: string) {
    this.executeResult = this.commandService.executeCommand(this.commandItem.type, extendCommand);
  }

}
