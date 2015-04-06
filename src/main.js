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
    this.toggleLoading(true);
    this.getUser().then(user => {
      this.user = user;
      this.toggleLoading(false);
    }).catch(this.toggleLoading.bind(this, false));
  }

  toggleLoading(state) {
    this.loading = typeof state === 'boolean' ? state : !this.loading;
  }
}

bootstrap(App);
