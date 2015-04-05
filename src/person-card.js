import {Component, Template, For} from 'angular2/angular2';

@Component({
  selector: 'person-card',
  bind: {
    person: 'person'
  }
})
@Template({
  directives: [For],
  inline: `
    <div class="person-card">
      <div class="person-avatar-container">
        <img src="fred.png"/>
      </div>
      <div class="person-properties">
        <div *for="#prop of properties">
          <strong>{{prop.title}}: </strong> {{prop.getVal(person)}}
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
