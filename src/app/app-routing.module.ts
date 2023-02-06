import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelModule} from './Modulos/marvel/marvel.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },

  {
    path: 'search',
    loadChildren: () => import('./Modulos/marvel/marvel.module').then( m => m.MarvelModule),
   
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      scrollOffset: [0, 0],
      paramsInheritanceStrategy: 'always'
      //useHash: true,
      //relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
