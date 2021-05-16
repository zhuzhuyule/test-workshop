import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.less"],
})
export class TerminalComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  @Input() commands = [""];
  @Input() canChange = false;
  @Input() placeholder: string = "";
  @Input()
  set defaultExtendCommand(command: string) {
    this.extendCommand = command;
  }

  @Output() extendCommandChange = new EventEmitter<string>();

  extendCommand: string = "";

  onExtendCommandChange(extendCommand: string) {
    this.extendCommand = extendCommand;
    this.extendCommandChange.emit(extendCommand);
  }
}
