import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'avatar'
})
@Template({
  bind: {
    src: 'src'
  },
  inline: `
    <img [src]="src" alt="" />
  `
})
export class Avatar {
}
