import {Component,Input} from 'angular2/core';

@Component({
    selector:'fa-property-binding',
    template:`
    {{result}}
    `,
    styles:[]
})

export class PropertyBindingComponent{
 @Input() result:number = 0;
}