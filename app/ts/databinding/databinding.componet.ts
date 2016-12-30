import { Component } from 'angular2/core';
import { PropertyBindingComponent } from './property-binding-componet';
import { EventBindingComponent } from './event-binding-componet';

@Component({
  selector: 'fa-databinding',
  templateUrl: 'app/ts/databinding/databinding.component.html',
  styleUrls: ['app/ts/databinding/databingding.componet.css'],
  directives: [PropertyBindingComponent, EventBindingComponent],

})

export class DatabindingComponet {
  stringInterporlation = "this is a string triporlation ";
  numberInterporlation = 2;

  onclick(value: string) {
    alert(value);
  }
  Ontest() {
    return true;
  }
}