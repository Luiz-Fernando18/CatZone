import { gatos } from './../catsobject';
import { Component, OnInit } from '@angular/core';
import { CatAPIService } from '../cat-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  catInfos: any 

  constructor(private cats: CatAPIService) { }
  
  favCats(id: string){
    return this.cats.favAdd(id).subscribe((like)=>{
      console.log(like)
    })
  }

  ngOnInit(): void {
    this.cats.getCat().subscribe((infos: gatos[])=>{this.catInfos=infos;console.log(infos)})
}
}
