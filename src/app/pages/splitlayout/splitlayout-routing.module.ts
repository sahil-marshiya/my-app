import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitlayoutPage } from './splitlayout.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'first',
    pathMatch:'full'

  },
  {
    path: '',
    component: SplitlayoutPage,
    children:[
      {
        path:'first',
        loadChildren:()=>import('../first/first.module').then(m=>m.FirstPageModule)
      },
      {
        path:'first/details',
        loadChildren:()=>import('../details/details.module').then(m=>m.DetailsPageModule)
      },
      {
        path:'second',
        loadChildren:()=>import('../second/second.module').then(m=>m.SecondPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitlayoutPageRoutingModule {}
