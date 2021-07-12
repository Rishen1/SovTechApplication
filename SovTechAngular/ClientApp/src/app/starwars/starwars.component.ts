import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListFormat } from 'typescript';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html'
})
export class starwarsComponent {
  public Name: string[];
  public filter: string = "";
  public firstname: string = "";
  public films: string[];
  public height: string = "";
  public mass: string = "";
  public hair_color: string = "";
  public eye_color: string = "";
  public birth_year: string = "";
  public gender: string = "";
  public skin_color: string = "";
  public species: string[];
  public vehicles: string[];
  public starships: string[];


  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }),
  };



  constructor(private http: HttpClient)
  {
    http.get<any>('https://localhost:44388/swapi/people').subscribe(result => {
      var people = [];
      var res = JSON.parse(result);
      var results = res["results"];
      console.log(results);
      results.forEach(function (i) {
        people.push(i["name"]);
      });
      this.Name = people;
    }, error => console.error(error));
  }


  onChangeEvent($event: any)
  {
    this.getperson()
  }

  getperson() {
    this.http.get<any>('https://localhost:44388/Search/' + this.filter).subscribe((res) => {
      //console.log(res);
      var person = [];
      person = res["results"];
      var model = this;
      person.forEach(function (i) {
        console.log(i["name"]);
        model.firstname = i["name"];
        model.films = i["films"];
        model.height = i["height"];
        model.mass = i["mass"];
        model.hair_color = i["hair_color"];
        model.eye_color = i["eye_color"];
        model.birth_year = i["birth_year"];
        model.gender = i["gender"];
        model.skin_color = i["skin_color"];
        model.species = i["species"];
        model.vehicles = i["vehicles"];
        model.starships = i["starships"];
      });
    });
  }
}




