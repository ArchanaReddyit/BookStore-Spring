import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
})
export class AddusersComponent implements OnInit {
  @Input()
  user: User;

  constructor() {}

  ngOnInit(): void {}
}
