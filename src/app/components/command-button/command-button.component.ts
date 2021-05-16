import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-command-button',
  templateUrl: './command-button.component.html',
  styleUrls: ['./command-button.component.less']
})
export class CommandButtonComponent implements OnInit {

  constructor() { }

  @Input() type: string;

  @Output() triggerClick = new EventEmitter<string>();

  ngOnInit() {
  }

  onClick(): void {
    this.triggerClick.emit(this.type);
  }
}
