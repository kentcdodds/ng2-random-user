import {Component, Template, bootstrap} from 'angular2/angular2';
import {UserCard} from 'user-card';
import {RandomUser} from 'RandomUser';

@Component({
  selector: 'main',
  services: [
    RandomUser
  ]
})
@Template({
  directives: [UserCard],
  inline: `
    <div class="new-user-button">
      <button class="ru-button --primary" autofocus (click)="getNewUser()">
        <i class="fa fa-user"></i>
        Get New User
      </button>
    </div>
    <div>
      <user-card [user]="user" [loading]="loading"></user-card>
    </div>
  `
})
class Main {
  constructor(randomUser:RandomUser) {
    this.getUser = randomUser.getUser;
  }

  getNewUser() {
    this.loading = true;
    this.getUser().then(user => {
      this.loading = false;
      this.user = user;
    });
  }
}

bootstrap(Main);
