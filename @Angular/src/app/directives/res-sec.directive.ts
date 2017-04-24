import { Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

// Investigate 'Renderer2' once its no longer Experimental - https://angular.io/docs/ts/latest/api/#!?query=render
// EXPERIMENTAL (in place of ElementRef):
// Another option in place of "ElementRef":  https://angular.io/docs/ts/latest/api/core/index/Renderer2-class.html
// Previous version Deprecated: https://angular.io/docs/ts/latest/api/core/index/Renderer-class.html
// import { Renderer2 } from '@angular/core';  

// Currently just implemented on "Add Wish" button on WishList Component.
// This is used to modify the behavior of Save buttons and such. It's an Attribute Directive.

// ngStyle (as an example of an Attribute Directive): https://github.com/angular/angular/blob/09d9f5fe54e7108c47de61393e10712f8239d824/packages/common/src/directives/ng_style.ts

@Directive({  // Attribute Directive
  selector: '[ressec]'
  // host: {
  //   '(click)': 'onClick($event)'
  // }
})
export class ResSecDirective implements OnInit, OnDestroy {
  @Input() ressec = () => {};  // `ressec="{type:'save'}"`  // Works

  constructor(private el: ElementRef) {}  // private renderer: Renderer2

  ngOnInit() {
    this.el.nativeElement.style.color = 'darkblue';
    this.el.nativeElement.style.backgroundColor = 'lightgoldenrodyellow';  // 'lightblue';
  }

  ngOnDestroy() {
    // We should detach the event listener when this directive is destroyed - to avoid memory leaks.
  }

  @HostListener('mouseover') onMouseEnter() {
    console.log(`Directive ressec fired onMouseEnter`)
  }
  
  // @HostBinding() innerText = "Text changed by ressec directive";  // Works

  // @HostBinding() get innerText() {  // Works - takes `ressec="{type:'save'}"` and sets add button to "{type:'save'}".
  //   return this.ressec;
  // }

}
