import {Component, Template, For, If} from 'angular2/angular2';

@Component({
  selector: 'person-card',
  bind: {
    person: 'person',
    loading: 'loading'
  }
})
@Template({
  directives: [For, If],
  inline: `
    <div class="person-card">
      <div [hidden]="!loading" class="spinner-container">
        <i class="fa fa-refresh fa-2x fa-spin"></i>
      </div>
      <div [hidden]="loading">
        <div *if="!person" class="no-person">
          Please select a user
        </div>
        <div *if="person">
          <div class="person-avatar-container">
            <img [src]="person.picture.medium"/>
          </div>
          <div class="person-properties">
            <div *for="#prop of properties">
              <strong>{{prop.title}}: </strong> {{prop.getVal(person)}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PersonCard {
  constructor() {
    this.properties = [
      {
        title: 'Name',
        getVal: person => `${person.name.first} ${person.name.last}`
      },
      {
        title: 'Username',
        getVal: person => person.username
      },
      {
        title: 'Email',
        getVal: person => person.email
      }
    ];
  }
}
