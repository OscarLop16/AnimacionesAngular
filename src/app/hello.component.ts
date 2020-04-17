import { Component, Input } from "@angular/core";

import {
  trigger,
  style,
  transition,
  animate,
  state
} from "@angular/animations";

import data from "./data";
@Component({
  selector: "hello",
  templateUrl: "hello.componet.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        })
      ),
      transition(':enter', [
        animate(
          3000,
          style({
            transform: 'translateX(0)',
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class HelloComponent {
  @Input() name: string;
  public courses: any[] = data;
}
