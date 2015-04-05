import {Component, Template, bootstrap, If} from 'angular2/angular2';
import {PersonCard} from 'person-card';
import {RandomUser} from 'RandomUser';

@Component({
  selector: 'main',
  services: [RandomUser]
})
@Template({
  inline: `
    <div class="new-user-button">
      <button class="ru-button --primary" autofocus (click)="getRandomUser()">
        <i class="fa fa-user"></i>
        Get New User
      </button>
    </div>
    <person-card [user]="user" [loading]="loading"></person-card>
  `,
  directives: [PersonCard]
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
