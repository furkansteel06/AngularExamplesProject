import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesHomeComponent } from './tables-home/tables-home.component';

const routes: Routes = [
  {path:"tables",component:TablesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
