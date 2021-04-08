import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() element: {
    type: string;
    name: string;
    content: string;
    status: string;
  };

  constructor() {}

  ngOnInit() {}

  statusColor() {
    return this.element.type === "server" ? "green" : "red";
  }

  serverColor() {
    if (this.element.type === "server") {
      return "gold";
    } else {
      return "blue";
    }
  }
}
