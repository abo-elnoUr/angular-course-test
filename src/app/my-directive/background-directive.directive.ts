import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[backgroundDirective]"
})
export class BackgroundDirective implements OnInit {
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}

  ngOnInit() {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "background-color",
      "dodgerblue"
    );
  }
}
