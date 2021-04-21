import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTaskPageRoutingModule } from './update-task-routing.module';

import { UpdateTaskPage } from './update-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTaskPageRoutingModule
  ],
  declarations: [UpdateTaskPage]
})
export class UpdateTaskPageModule {}
