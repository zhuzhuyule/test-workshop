import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'test-workshop';

  type: string;

  buttonList = [
    {
      type: 'component',
      describe: 'Add Component',
    },
    {
      type: 'service',
      describe: 'Add Service',
    },
    {
      type: 'pipe',
      describe: 'Add Pipe',
    },
    {
      type: 'directive',
      describe: 'Add Drective',
    },
    {
      type: 'start',
      describe: 'Start Angular Server',
    },
    {
      type: 'test',
      describe: 'Run and Watch Tests',
    },
    {
      type: 'build',
      describe: 'Build for Production',
    },
  ]

  command: string;

  onCommandChange(command: string) {
    this.command = command;
  }
}
