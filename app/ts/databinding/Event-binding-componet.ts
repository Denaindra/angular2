import {Component,EventEmitter,Output} from 'angular2/core';

@Component({
    selector:'fa-event-binding',
    template:`  
<button (click)="onclick()">Click me here !</button>
    `,
    styles:[]
})

export class EventBindingComponent{
    @Output() clicked=new EventEmitter<string>();

 onclick(){
     //alert('This is an Event binding');
    this.clicked.emit("it's work");
 }
}