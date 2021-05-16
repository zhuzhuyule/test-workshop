import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-command-button',
  templateUrl: './command-button.component.html',
  styleUrls: ['./command-button.component.less']
})
export class CommandButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() type: string;

  @Output() click = new EventEmitter<string>();

  onClick(): void {
    this.click.emit(this.type);
  }
}
