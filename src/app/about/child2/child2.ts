import { Component, EventEmitter, Input,OnChanges,OnInit,Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 implements OnInit,OnChanges {

  @Input() username:string | null='hello'
  @Output() getUsers=new EventEmitter();
  users=["a","b","c"]
  constructor()
  {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit()
  {
    this.getUsers.emit(this.users);
    console.log("init initialized");
  }

}
