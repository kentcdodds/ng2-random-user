import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'user-card'
})
@Template({
  inline: `
    <div class="user-card">
      <div class="user-avatar-container">
        <img [src]="user.picture.medium" />
      </div>
      <div class="user-properties">
        <div>
          <strong>Name:</strong> {{user.name.first}} {{user.name.last}}
        </div>
        <div>
          <strong>Username:</strong> {{user.username}}
        </div>
        <div>
          <strong>Email:</strong> {{user.email}}
        </div>
      </div>
    </div>
  `
})
export class UserCard {
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
}
