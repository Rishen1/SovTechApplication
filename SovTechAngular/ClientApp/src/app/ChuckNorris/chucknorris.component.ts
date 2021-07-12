import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './chucknorris.component.html',
})
export class chucknorrisComponent {

  public Value: ChuckJokeCateogry[];
  public result: ChuckJokeCateogry[];
  public summaries: any[];
  public joke: string = "";
  public filter: string = "";
  public respoonseList: Response[];
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }),

  };
  constructor(private http: HttpClient) {
    http.get<ChuckJokeCateogry[]>('https://localhost:44388/chuck/categories', this.httpOptions).subscribe(result => {
      this.Value = result;

    }, error => console.error(error));

  }

  onChangeEvent($event: any) {

    //console.log("onchange 1 Changed");
    this.getjoke();
    console.log(this.filter)
    event.target.addEventListener; $event;
  }

  getjoke() {
    this.http.get('https://localhost:44388/Search/' + this.filter, this.httpOptions).subscribe((res) => {
      console.log(res);
      console.log(res["value"]);
      this.joke = res["value"];
    });

  }

  title = 'SovTech';
}

interface ChuckJokeCateogry {
  value: string;
}




class Response {
  id: string;
  createDate: Date;
  updatedDate: Date;
  iconUrl: string;
  url: string;
  value : string;
}

