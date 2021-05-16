import { Injectable } from '@angular/core';
import { CommandTypeEnum } from '../constants/command-type.enum';
import { TransferNamePipe } from '../pipes/transfer-name.pipe';

export interface CommandType {
  type: string;
  describe: string;
  commands: string[];
  canChange?: boolean;
}

export interface ExecuteResultType {
  path: string;
  files: string[];
  class?: string;
  dom?: string;
}
@Injectable({
  providedIn: 'root',
})
export class CommandService {
  commandList: CommandType[] = [
    {
      type: CommandTypeEnum.component,
      describe: 'Add Component',
      commands: ['ng genrate component', 'ng g c'],
      canChange: true,
    },
    {
      type: CommandTypeEnum.service,
      describe: 'Add Service',
      commands: ['ng genrate service', 'ng g s'],
      canChange: true,
    },
    {
      type: CommandTypeEnum.pipe,
      describe: 'Add Pipe',
      commands: ['ng genrate pipe', 'ng g p'],
      canChange: true,
    },
    {
      type: CommandTypeEnum.directive,
      describe: 'Add Directive',
      commands: ['ng genrate directive', 'ng g d'],
      canChange: true,
    },
    {
      type: CommandTypeEnum.start,
      describe: 'Start Angular Server',
      commands: ['ng server'],
    },
    {
      type: CommandTypeEnum.test,
      describe: 'Run and Watch Tests',
      commands: ['ng test'],
    },
    {
      type: CommandTypeEnum.build,
      describe: 'Build for Production',
      commands: ['ng build'],
    },
  ];

  transferPipe = new TransferNamePipe();

  constructor() {
  }

  executeCommand(commandType: string, extendCommand?: string): ExecuteResultType | null {
    switch (commandType) {
      case CommandTypeEnum.component:
        return this.execCreateComponent(extendCommand);
      case CommandTypeEnum.service:
        return this.execCreateService(extendCommand);
      case CommandTypeEnum.pipe:
        return this.execCreatePipe(extendCommand);
      case CommandTypeEnum.directive:
        return this.execCreateDirective(extendCommand);
      default:
        return null;
    }
  }

  private execCreateComponent(name: string) {
    const transferName = this.transferPipe.transform(name);
    return transferName ? {
      path: transferName,
      files: [
        `${transferName}.component.html`,
        `${transferName}.component.ts`,
        `${transferName}.component.spec.ts`,
        `${transferName}.component.css`,
      ],
      class: this.transferPipe.transform(name, 'class'),
      dom: `app-${transferName}}`,
    } : null;
  }

  private execCreateService(name: string) {
    const transferName = this.transferPipe.transform(name);
    return transferName ? {
      path: transferName,
      files: [
        `${transferName}}.service.ts`,
        `${transferName}}.service.spec.ts`,
      ],
    } : null;
  }
  private execCreatePipe(name: string) {
    const transferName = this.transferPipe.transform(name);
    return transferName ? {
      path: transferName,
      files: [
        `${transferName}}.pipe.ts`,
        `${transferName}}.pipe.spec.ts`,
      ],
    } : null;
  }
  private execCreateDirective(name: string) {
    const transferName = this.transferPipe.transform(name);
    return transferName ? {
      path: transferName,
      files: [
        `${transferName}}.directive.ts`,
        `${transferName}}.directive.spec.ts`,
      ],
    } : null;
  }
}
