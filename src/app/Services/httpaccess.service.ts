import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpaccessService {

  private apiUrl = 'https://remote.northwoodtechnology.ie:8443/ProductsWebOnly'; // Replace with your API endpoint URL
  private token = 'MThkZDgzMzktMWE4ZC00MTA5LTkzNj'; // Replace with your bearer token

  constructor(private http: HttpClient) { }

//   getPosts(): Observable<any[]> {
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

//     this.http.get<any>(this.apiUrl, { headers })
//       .subscribe(
//         response => {
//           console.log('API Response:', response);
//           // Process the API response here
//         },
//         error => {
//           console.error('API Error:', error);
//           // Handle API error here
//         }
//       );
// }

getPosts(): Observable<any> {
  // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`,
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Max-Age': '86400',
    // 'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
  });

  return this.http.get<any>(this.apiUrl, { headers });
}

}
