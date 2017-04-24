import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// Currently just implemented on "Add Wish" button on WishList Component.
// This is used to modify the behavior of Save buttons and such. It's an Attribute Directive.

@Directive({  // Attribute Directive
  selector: '[ressec]'
  // host: {
  //   '(click)': 'onClick($event)'
  // }
})
export class ResSecDirective implements OnInit {
  @Input() ressec = () => {};  // `ressec="{type:'save'}"`  // Works

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = 'darkblue';
    this.el.nativeElement.style.backgroundColor = 'lightgoldenrodyellow';  // 'lightblue';
  }


  @HostListener('mouseover') onMouseEnter() {
    console.log(`Directive ressec fired onMouseEnter`)
  }
  
  // @HostBinding() innerText = "Text changed by ressec directive";  // Works

  // @HostBinding() get innerText() {  // Works - takes `ressec="{type:'save'}"` and sets add button to "{type:'save'}".
  //   return this.ressec;
  // }

}
