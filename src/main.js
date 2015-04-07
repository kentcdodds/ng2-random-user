import {Component, Template, bootstrap} from 'angular2/angular2';
import {UserCard} from 'user-card';

@Component({
  selector: 'main'
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
      <user-card [user]="user"></user-card>
    </div>
  `
})
class Main {
  constructor() {
    this.user = {
      name: {
        first: 'Fred',
        last: 'Mertz'
      },
      username: 'TheFredMertz',
      email: 'freddie@aol.com',
      picture: {
        medium: 'fred.png'
      }
    };
  }

  getNewUser() {
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
}

bootstrap(Main);
