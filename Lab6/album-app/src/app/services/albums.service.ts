import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  
  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
  
  deleteAlbum(id: number): Observable<void> {  
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  

  getAlbumPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
