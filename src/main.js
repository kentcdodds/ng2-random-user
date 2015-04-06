import {Component, Template, bootstrap, If} from 'angular2/angular2';
import {UserCard} from 'user-card';
import {RandomUser} from 'RandomUser';

@Component({
  selector: 'main',
  services: [RandomUser]
})
@Template({
  directives: [UserCard],
  inline: `
    <div class="new-user-button">
      <button class="ru-button --primary" autofocus (click)="getRandomUser()">
        <i class="fa fa-user"></i>
        Get New User
      </button>
    </div>
    <user-card [user]="user" [loading]="loading"></user-card>
  `
})
export class App {
  constructor(randomUser:RandomUser) {
    this.getUser = randomUser.getUser;
    this.getRandomUser();
  }

  getRandomUser() {
    this.loading = true;
    this.getUser().then(user => {
      this.user = user;
      this.loading = false;
    }).catch(() => this.loading = false);
  }
}

bootstrap(App);
