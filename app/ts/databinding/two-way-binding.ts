import { Component } from 'angular2/core';

@Component({
    selector: 'fa-two-way-binding',
    template: `
   <input type="text" [(ngModel)]="person.name">
   <input type="text" [(ngModel)]="person.name">
    `
})

export class TwoWayBinding {
    person = {
        name: "gayan",
        age:23
    };
}