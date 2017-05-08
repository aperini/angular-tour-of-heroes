import { Component, Input } from '@angular/core';
import { Hero }             from './hero'

@Component({

    //The CSS selector name, hero-detail, will match the element tag that identifies this component within a parent component's template.
    //We add a <hero-detail> element to the AppComponent template.
    selector: 'hero-detail',
    
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    `
})
export class HeroDetailComponent {

    //You must declare a target binding property to be an input property.
    @Input() hero: Hero;
}