import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: any[] = [];
  albumId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
  }

  loadPhotos() {
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .subscribe(data => this.photos = data);
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
