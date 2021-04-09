import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: "[conditionDirective]"
})
export class ConditionDirective implements OnInit {
  constructor(
    private _TemplateRef: TemplateRef<any>,
    private _ViewContainerRef: ViewContainerRef
  ) {}
  @Input() set conditionDirective(condition: boolean) {
    if (!condition) {
      this._ViewContainerRef.createEmbeddedView(this._TemplateRef);
    } else {
      this._ViewContainerRef.clear();
    }
  }
  ngOnInit() {}
}
