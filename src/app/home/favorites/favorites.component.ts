import { gatos } from './../catsobject';
import { Component, OnInit } from '@angular/core';
import { CatAPIService } from '../cat-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  gatosfav: any[]

  constructor(private cats: CatAPIService) { }

  ngOnInit(): void {
    this.cats.pullFavCats().subscribe((fav)=>{
      this.gatosfav = fav
      console.log(fav)
    })
  }

}
