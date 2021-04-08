import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  @ViewChild("newServerContent", { static: true }) newServerContent: ElementRef;
  @Output() serverCreate = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverStatus: string;
  }>();
  @Output() DataBaseCreate = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverStatus: string;
  }>();

  constructor() {}

  ngOnInit() {}

  addServer(name, status) {
    this.serverCreate.emit({
      serverName: name,
      serverContent: this.newServerContent.nativeElement.value,
      serverStatus: status
    });
  }

  addBluePrint(name, status) {
    this.DataBaseCreate.emit({
      serverName: name,
      serverContent: this.newServerContent.nativeElement.value,
      serverStatus: status
    });
  }
}
