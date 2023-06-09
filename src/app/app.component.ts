import { Component } from '@angular/core';
import { HttpaccessService } from './Services/httpaccess.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NW-APP';

  data1: any[] = [];

  constructor(private apiService: HttpaccessService) { }

  ngOnInit() {
    this.apiService.getPosts().subscribe(data => {
        console.log(data);
        this.data1 = data;
      });

  }
}
