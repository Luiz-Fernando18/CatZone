import { datas, infos } from './../catsobject';
import { Component, OnInit } from '@angular/core';
import { CatAPIService } from '../cat-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sab-mais',
  templateUrl: './sab-mais.component.html',
  styleUrls: ['./sab-mais.component.sass']
})
export class SabMaisComponent implements OnInit {

  infosCat: any

  constructor(private cats: CatAPIService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.cats.infosCat(this.router.snapshot.params["id"]).subscribe((info: datas)=>{this.infosCat=info;console.log(info)})
  }
}
