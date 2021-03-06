import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
})
export class AddusersComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  userAddedEvent = new EventEmitter();

  newUser: User;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUser = this.user;
  }

  addUser() {
    this.httpClientService.addUser(this.user).subscribe((user) => {
      this.userAddedEvent.emit(null);
      this.router.navigate(['admin', 'users']);
    });
  }
}
