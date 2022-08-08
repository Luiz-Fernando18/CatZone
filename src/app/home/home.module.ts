import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardsComponent } from './cards/cards.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MaterialModule } from './../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SabMaisComponent } from './sab-mais/sab-mais.component';


@NgModule({
  declarations: [
    CardsComponent,
    FavoritesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SabMaisComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
