import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'Heart of New York City',
      'https://static2.mansionglobal.com/production/media/article-images/2f6a5dc3d80ef19f3bc23ddc1e911adf/large_Screen-Shot-2017-12-07-at-12.11.10-PM.png',
      199.99
    ),
    new Place(
      'p2',
      'Central perk',
      'Best Coffee Hangout place',
      'https://www.dineout.co.in/blog/wp-content/uploads/2019/01/10737623623_3b51721db6_b.jpg',
      149.99
    ),
    new Place(
      'p3',
      'Brooklyn Bay',
      'Home away from Home',
      'https://www.condorny.com/wp-content/uploads/2022/02/pexels-arthur-brognoli-2260784.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(place => place.id === id)};
  }
}
