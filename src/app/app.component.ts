import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  servers = [
    {
      type: "server",
      name: "server  one",
      content: "test server",
      status: "online"
    }
  ];
  onAddServer(data: {
    serverName: string;
    serverContent: string;
    status: string;
  }) {
    this.servers.push({
      type: "server",
      name: data.serverName,
      content: data.serverContent,
      status: data.status
    });
  }

  onAddDataBase(data: {
    serverName: string;
    serverContent: string;
    status: string;
  }) {
    this.servers.push({
      type: "database",
      name: data.serverName,
      content: data.serverContent,
      status: data.status
    });
  }
}
