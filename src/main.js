import {Component, Template, bootstrap} from 'angular2/angular2';
import {PersonCard} from 'person-card';

@Component({
  selector: 'main'
})
@Template({
  directives: [PersonCard],
  inline: `
    <div>
      <div class="new-user-button">
        <button class="ru-button --primary" autofocus (click)="getNewUser()">
          <i class="fa fa-user"></i>
          Get New User
        </button>
      </div>
      <person-card [person]="user"></person-card>
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
      username: 'iloveethel',
      email: 'maegirl123@aol.com',
      picture: {
        medium: 'ethel.png'
      }
    };
  }
}

bootstrap(Main);
