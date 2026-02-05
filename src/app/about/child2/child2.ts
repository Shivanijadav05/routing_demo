import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {

  @Input() username:string | null=''
  @Output() getUsers=new EventEmitter();
  users=["a","b","c"]
  ngOnInit()
  {
    this.getUsers.emit(this.users);
  }
}
