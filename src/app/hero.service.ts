import { Injectable }   from '@angular/core'
import { HEROES }       from './mock-heroes'
import { Hero }         from './hero'

/**
 * The @Injectable() decorator tells TypeScript to emit metadata about the service.
 * The metadata specifies that Angular may need to inject other dependencies into this service.
 */
@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 700);
        });
    }
}