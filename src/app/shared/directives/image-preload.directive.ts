import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appImagePreload]'
})
export class ImagePreloadDirective {

  @Input() default: string;
  @Input() loader: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.loader);
  }

  @HostListener('load') onLoad() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.el.nativeElement.src);
  }

  @HostListener('error') updateUrl() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.default);
  }
}
