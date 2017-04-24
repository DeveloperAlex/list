import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ressec]'
})
export class ResSecDirective {
  constructor() { }

// Currently just implemented on "Add Wish" button on WishList Component.
// This is used to modify the behavior of Save buttons and such. It's an Attribute Directive.

  @Input() ressec
  
  @HostListener('mouseover') onMouseEnter() {
    console.log(`Directive ressec fired onMouseEnter`)
  }
  
  // @HostBinding() innerText = "Text changed by ressec directive";  // Works

}
