import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.less"],
})
export class TerminalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() command = "";
  @Input() canChange = false;
  @Input() placeholder: string = "";
  @Input()
  set defaultExtendCommand(command: string) {
    this.extendCommand = command;
  }

  @Output() handleCommandChange = new EventEmitter<string>();

  extendCommand: string = "";

  onExtendCommandChange(commend: string) {
    this.extendCommand = commend;
    this.handleCommandChange.emit(commend);
  }
}
