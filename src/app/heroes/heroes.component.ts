import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // 2. 생성자로 서비스를 주입 받는다.
  constructor(public heroService: HeroService) {
    // this.heroes = new Hero(1, 'Win Storm');
    /*    this.heroes.id = 1;
        this.heroes.name = 'Win Storm';*/
  }

  ngOnInit() {
    // 비동기 처리
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
