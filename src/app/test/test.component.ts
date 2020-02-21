import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <!--ngIf first way -->
  <h2 *ngIf="displayname; else elseBlock">Structural Directives</h2>
  <ng-template #elseBlock>
    <h2>Name is hidden</h2>
  </ng-template>

  <!--ngIf Second way -->
  <div *ngIf="displayname; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock><h2>From then block</h2></ng-template>
  <ng-template #elseBlock><h2>From else block</h2></ng-template>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit 
{
  displayname = true;
  constructor() { }
  ngOnInit(): void {}
}
