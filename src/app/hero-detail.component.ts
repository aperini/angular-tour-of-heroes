// Keep the Input import for now, you'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from './hero.service';
import { Hero } from './hero';

//switchMap operator to use with the route parameters Observable
import 'rxjs/add/operator/switchMap';

@Component({

    //The CSS selector name, hero-detail, will match the element tag that identifies this component within a parent component's template.
    //We add a <hero-detail> element to the AppComponent template.
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) { }

    //You must declare a target binding property to be an input property.
    hero: Hero;

    ngOnInit(): void {
        this.route.params
            //The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }

}