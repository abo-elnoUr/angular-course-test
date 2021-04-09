import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[mouseDirective]"
})
export class MouseDirective implements OnInit {
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}

  ngOnInit() {}

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "font-weight",
      "700"
    );
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "font-weight",
      "400"
    );
  }
}
