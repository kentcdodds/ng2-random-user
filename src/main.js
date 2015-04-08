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
          <i class="fa fa-user"></i> {{buttonText}}
        </button>
      </div>
      <user-card [user]="user" [loading]="loading">
        <div loading>
          <i class="fa fa-2x fa-refresh fa-spin"></i>
        </div>
        <div no-user>
          <small>Please click "{{buttonText}}"</small>
        </div>
      </user-card>
    </div>
  `
})
class Main {
  constructor(randomUser:RandomUser) {
    this.getRandomUser = randomUser.getUser;
    this.buttonText = 'Get New User!';
  }

  getNewUser(numOfUsers) {
    this.loading = true;
    this.getRandomUser().then(user => {
      this.loading = false;
      this.user = user;
    }, () => this.loading = false);
  }
}

bootstrap(Main);
