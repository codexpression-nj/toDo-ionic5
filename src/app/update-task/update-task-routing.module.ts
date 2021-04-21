import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTaskPage } from './update-task.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTaskPageRoutingModule {}
