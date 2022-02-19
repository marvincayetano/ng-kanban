import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}
  board: Board = new Board('Test Board', [
    new Column('Ideas', ['lorem ipsum', 'random name', 'string random']),
    new Column('Another Column', [
      'lorem ipsum',
      'random name',
      'string random',
    ]),
    new Column('Hey', ['lorem ipsum', 'random name', 'string random']),
    new Column('Done', ['lorem ipsum', 'random name', 'string random']),
  ]);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
