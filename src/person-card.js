import {Component, Template, If} from 'angular2/angular2';

@Component({
  selector: 'person-card',
  bind: {
    user: 'user'
  }
})
@Template({
  inline: `
    <div class="person-card">
      <div *if="!user">
        <small>please select a user</small>
      </div>
      <div *if="user">
        Username: {{user.name.first}}
      </div>
    </div>
  `,
  directives: [If]
})
export class PersonCard {
}
