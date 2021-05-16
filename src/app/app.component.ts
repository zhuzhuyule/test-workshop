import { Component } from '@angular/core';
import { CommandService, CommandType } from './services/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
   constructor(private commandService: CommandService) {}
  title = 'test-workshop';

  type: string;

  commandList = this.commandService.commandList;

  commandItem: CommandType & { extendCommand: string } = {
    ...this.commandService.commandList[0],
    extendCommand: ''
  };

  onCommandChange (command: CommandType) {
    this.commandItem = {
      ...command,
      extendCommand: '',
    }
  }

  onExtendCommandChange (extendCommand: string) {
    this.commandItem = {
      ...this.commandItem,
      extendCommand,
    }
  }

}
