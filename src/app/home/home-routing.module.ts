import { SabMaisComponent } from './sab-mais/sab-mais.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CardsComponent } from './cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'favoritos', component: FavoritesComponent},
  {path: 'sabmais/:id', component: SabMaisComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
