import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = []
  
  
  today: number = Date.now();

  constructor(public modalCtlr: ModalController) { }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
    console.log(newTask.data);
      this.todoList.push(newTask.data)
    
    })
    return await modal.present()
  }

  delete(index) { 
    this.todoList.splice(index,1)
  }
}
