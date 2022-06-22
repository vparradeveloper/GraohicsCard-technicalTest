import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.css']
})
export class GraphicsCardDetailComponent implements OnInit {
  title = 'app-cards';
  apiResponse: any;
  url: string = 'http://localhost:80/api/cards';

  // example api for performance testing  
  // url: string = 'https://api.npms.io/v2/search?q=scope:angular';
  error: any;

  // used mocks content to avoid starting the api continuously. Remember to remove it before delivery.
  // mocks = [{"id":1,"name":"Asus ROG Strix GeForce RTX 3090","image":"https://m.media-amazon.com/images/I/91XyrUFYKfL._AC_SL1500_.jpg","manufacturer":"Asus","model":"RTX 3090","assembler":"GeForce","price":"2200€"},{"id":2,"name":"AMD Radeon RX 6900 XT","image":"https://www.profesionalreview.com/wp-content/uploads/2020/12/AMD-Radeon-RX-6900-XT-Review40.jpg","manufacturer":"AMD","model":"RX 6900 XT","assembler":"Radeon","price":"2099€"},{"id":3,"name":"Voodoo 3DFX Banshee","image":"https://www.profesionalreview.com/wp-content/uploads/2019/10/VoodooBanshee-1024x752.jpg","manufacturer":"Voodoo","model":"CT6750","assembler":"Diamond","price":"3600 ptas"}];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(data => {
      this.apiResponse = data;
   },error => this.error = error);
  }


  get cards() {
    let cards: number[] = [];
    this.apiResponse.forEach((element: { id: number; }) => {
      cards.push(element.id);
    });
    // this.mocks.forEach(element => {
    //   cards.push(element.id);
    // });
    return cards;
  }

  getDetails(id: number){
    console.log('getDetails start, id: '+id);    
    this.http.get<any>(this.url+':id').subscribe(data => {
      this.apiResponse = data;
   },error => this.error = error);
   
    //  this.apiResponse = this.mocks[id-1];

    let details = [this.apiResponse.name, this.apiResponse.manufacturer, this.apiResponse.model, this.apiResponse.assembler, this.apiResponse.price]
    // provisionally we show by console
    console.log(details);
    return details;
  }
}
