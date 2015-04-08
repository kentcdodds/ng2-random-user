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
    <user-card [user]="user" [loading]="loading">
      <div loading>
        <i class="fa fa-refresh fa-2x fa-spin"></i>
      </div>
    </user-card>
  `
})
class Main {
  constructor(randomUser:RandomUser) {
    this.user = {
      name: {
        first: 'Freddie',
        last: 'Mertz'
      },
      username: 'TheFredMertz',
      email: 'freddie@aol.com',
      picture: {
        medium: 'fred.png'
      }
    };
    this.getRandomUser = randomUser.getUser;
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