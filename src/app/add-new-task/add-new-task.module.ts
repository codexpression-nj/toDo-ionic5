import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTaskPageRoutingModule } from './add-new-task-routing.module';

import { AddNewTaskPage } from './add-new-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTaskPageRoutingModule
  ],
  declarations: [AddNewTaskPage]
})
export class AddNewTaskPageModule {}
