import { Component } from '@angular/core';
import { HttpaccessService } from './Services/httpaccess.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NW-APP';
  DataArray: any;

  constructor(private apiService: HttpaccessService) { }

  ngOnInit() {
    this.apiService.getPosts().subscribe(data1 => {
      this.DataArray = data1.Data;

      console.log(this.DataArray);


        // console.log(data);

        // this.DataArray = data as any[];	// FILL THE ARRAY WITH DATA.
        //   console.log("DataArray: " + this.DataArray);
        // this.DataArray = data;
          // this.DataArray = Array.of(data);	// FILL THE ARRAY WITH DATA.
          // this.DataArray = Object.values(data1);
          // this.DataArray = Object.keys(data1);
          // this.DataArray = Object.entries(data1);

          // this.DataArray.forEach(element => {

          //   this.DataArray2.push(element[1]);
          //   console.log(element[1]);
          // });

          // console.log(this.DataArray);

          // console.log("DataArray: " + this.DataArray);
          // console.log("DataArray: " + this.DataArray[0]);
          // console.log("DataArray: " + this.DataArray[1].Data);
    });

  }
}
