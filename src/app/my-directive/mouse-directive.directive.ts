import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[mouseDirective]"
})
export class MouseDirective implements OnInit {
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {}

  @Input() defaultColor = "black";
  @Input("mouseDirective") mainColor = "dodgerblue";

  ngOnInit() {
    this.color = this.defaultColor;
  }

  @HostBinding("style.color") color: string;

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "letter-spacing",
      "10px"
    );
    this.color = this.mainColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this._Renderer2.setStyle(
      this._ElementRef.nativeElement,
      "letter-spacing",
      "4px"
    );
    this.color = this.defaultColor;
  }
}
