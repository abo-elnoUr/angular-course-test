import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { ColorDirective } from "./my-directive/color-directive.directive";
import { BackgroundDirective } from "./my-directive/background-directive.directive";
import { MouseDirective } from "./my-directive/mouse-directive.directive";
import { ConditionDirective } from "./my-directive/condition-directive.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ColorDirective,
    BackgroundDirective,
    MouseDirective,
    ConditionDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
