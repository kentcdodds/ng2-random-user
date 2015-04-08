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
    <div>
      <div class="new-user-button">
        <button class="ru-button --primary" autofocus (click)="getNewUser()">
          <i class="fa fa-user"></i> Get New User
        </button>
      </div>
      <user-card [user]="user" [loading]="loading"></user-card>
    </div>
  `
})
class Main {
  constructor(randomUser:RandomUser) {
    this.getRandomUser = randomUser.getUser;
    this.user = {
      name: {
        first: 'Ethel',
        last: 'Mertz'
      },
      username: 'maegrl',
      email: 'maebebaby@aol.com',
      picture: {
        medium: 'ethel.png'
      }
    };
  }

  getNewUser() {
    this.loading = true;
    this.getRandomUser().then(user => {
      this.loading = false;
      this.user = user;
    }, () => this.loading = false);
  }
}

bootstrap(Main);
