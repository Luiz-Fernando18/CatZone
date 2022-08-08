import { gatos } from './../catsobject';
import { Component, OnInit } from '@angular/core';
import { CatAPIService } from '../cat-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  like: any[]
  catInfos: any 

  constructor(private cats: CatAPIService) { }

  favorite(id: number){
    return this.like.some((data)=>{
      return data.id === id
    })
  }
  
  favCats(id: string){
    return this.cats.favAdd(id).subscribe((like)=>{
      console.log(like)
    })
  }

  ngOnInit(): void {
    this.cats.getCat().subscribe((infos: gatos[])=>{this.catInfos=infos;console.log(infos)})
    this.cats.pullFavCats().subscribe((fav)=>{
      this.like = fav
      console.log(fav)
    })
}
}
