import { Component, Input, OnInit } from "@angular/core";

import { basename, dirname } from "path";

@Component({
  selector: "app-explorer",
  templateUrl: "./explorer.component.html",
  styleUrls: ["./explorer.component.less"],
})
export class ExplorerComponent implements OnInit {

  @Input() files: string[] = [];
  @Input()
  set path(path: string) {
    this.folders = dirname(path)
      .replace(/^[\\\/]/, "")
      .split(/\/|\\/g) || [""];
  }

  folders: string[] = [];

  constructor() { }

  ngOnInit() { }
}
