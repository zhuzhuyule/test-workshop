import { Component, Input, OnInit } from '@angular/core';

import { dirname } from 'path';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.less'],
})
export class ExplorerComponent implements OnInit {

  @Input() files: string[] | null = [];
  @Input()
  set path(path: string | null) {
    if (path) {
      this.folders = this.splitPath(path);
    } else {
      this.folders = [];
    }
  }

  folders: string[] = [];

  constructor() { }

  ngOnInit() { }

  get isValid() {
    return this.files && this.files.length;
  }

  private splitPath(path: string) {
    return dirname(`${path}/$`)
      .replace(/^[\\\/]/, '')
      .split(/\/|\\/g) || [''];
  }
}
