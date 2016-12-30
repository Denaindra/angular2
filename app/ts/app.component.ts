
import {Component} from 'angular2/core';
 import {DatabindingComponet} from './databinding/databinding.componet';

@Component({
    selector: 'my-app',
    template: 
    `<h1>Angular 2 by google</h1>
     <fa-databinding></fa-databinding>`,
      directives:[DatabindingComponet]
})

export class AppComponent {

}
