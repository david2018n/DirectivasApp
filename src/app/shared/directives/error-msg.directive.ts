import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Error-Msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string='red';
  private _mensaje: string = 'Error';
  @Input() set color(valor:string){
    this._color= valor;
    this.setColor();
  }
  
  // @Input() mensaje: string = '';
  @Input() set mensaje(valor: string){
    this._mensaje= valor;
    this.setMensaje();
  };

  @Input() set valido(valor:boolean){
    
    if ( valor) {
      this.HtmlElement.nativeElement.classList.add('hidden')
    } else {
      this.HtmlElement.nativeElement.classList.remove('hidden')
    }
  }

  HtmlElement:ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.HtmlElement = el;
   }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }
  setEstilo():void{
    this.HtmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void{
    this.HtmlElement.nativeElement.style.color=this._color;
    
  }
  setMensaje():void{
    this.HtmlElement.nativeElement.innerText= this._mensaje;
  }

}
