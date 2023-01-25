import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output_challenge';
  onomatopoeiaList : string [] = [];
  onReceiveNewOnomatopia( inserOno : string){
this.onomatopoeiaList.push( inserOno);
}
}
// bsj