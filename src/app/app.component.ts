import { Component } from '@angular/core';
import { UserModel } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public creationModalVisible = false;

  constructor(public userModel: UserModel) { }

  public toggleCreationModal(): void {
    this.creationModalVisible = !this.creationModalVisible;
  }

  public closeModal(): void {
    this.creationModalVisible = false;
  }
}
