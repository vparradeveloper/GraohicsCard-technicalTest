import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.css']
})
export class GraphicsCardListContainerComponent implements OnInit {
  title = 'app-cards';
  apiResponse: any;
  url = 'http://localhost:80/api/cards';
  error: any;

  // used mocks content to avoid starting the api continuously. Remember to remove it before delivery.
  // mocks = [{"id":1,"name":"Asus ROG Strix GeForce RTX 3090","image":"https://m.media-amazon.com/images/I/91XyrUFYKfL._AC_SL1500_.jpg","manufacturer":"Asus","model":"RTX 3090","assembler":"GeForce","price":"2200€"},{"id":2,"name":"AMD Radeon RX 6900 XT","image":"https://www.profesionalreview.com/wp-content/uploads/2020/12/AMD-Radeon-RX-6900-XT-Review40.jpg","manufacturer":"AMD","model":"RX 6900 XT","assembler":"Radeon","price":"2099€"},{"id":3,"name":"Voodoo 3DFX Banshee","image":"https://www.profesionalreview.com/wp-content/uploads/2019/10/VoodooBanshee-1024x752.jpg","manufacturer":"Voodoo","model":"CT6750","assembler":"Diamond","price":"3600 ptas"}];

  constructor(
    private http: HttpClient
  ) { }

  // ngOnInit(): {
  //   this.http.get<any>(this.url).subscribe(data => {
  //     this.apiResponse = data.total;
  //   }, error => this.error = error);
  // }

  ngOnInit() {   
    this.http.get<any>(this.url).subscribe(data => {
       this.apiResponse = data.results;
    },error => this.error = error);
  }

  onSubmit() {
    // console.log(this.apiResponse);
    // console.log(this.mocks);
  }

  get imgCards() {
    let imgCards: string[] = [];
    this.apiResponse.forEach((element: { image: string; }) => {
      imgCards.push(element.image);
    });
    return imgCards;
  }


}
