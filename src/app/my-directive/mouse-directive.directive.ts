import {
  Directive,
  ElementRef,
  HostBinding,
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

  @HostBinding("style.color") color: string = "black";

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "letter-spacing",
      "10px"
    );
    this.color = "dodgerblue";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "letter-spacing",
      "4px"
    );
    this.color = "black";
  }
}
