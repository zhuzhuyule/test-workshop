import { Injectable } from "@angular/core";

export interface CommandType {
  type: string;
  describe: string;
  commands: string[];
  canChange?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class CommandService {
  constructor() {}

  commandList: CommandType[] = [
    {
      type: "component",
      describe: "Add Component",
      commands: ["ng genrate component", "ng g c"],
      canChange: true,
    },
    {
      type: "service",
      describe: "Add Service",
      commands: ["ng genrate service", "ng g s"],
      canChange: true,
    },
    {
      type: "pipe",
      describe: "Add Pipe",
      commands: ["ng genrate pipe", "ng g p"],
      canChange: true,
    },
    {
      type: "directive",
      describe: "Add Directive",
      commands: ["ng genrate directive", "ng g d"],
      canChange: true,
    },
    {
      type: "start",
      describe: "Start Angular Server",
      commands: ["ng server"],
    },
    {
      type: "test",
      describe: "Run and Watch Tests",
      commands: ["ng test"],
    },
    {
      type: "build",
      describe: "Build for Production",
      commands: ["ng build"],
    },
  ];
}
