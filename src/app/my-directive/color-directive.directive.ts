import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[colorDirective]"
})
export class ColorDirective implements OnInit {
  constructor(private _ElementRef: ElementRef) {}
  ngOnInit() {
    this._ElementRef.nativeElement.style.color = "coral";
  }
}
