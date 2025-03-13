import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
    templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  
  album: any;
  newTitle: string = '';
  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumsService.getAlbums().subscribe(albums => {
      const savedAlbums = localStorage.getItem('albums');
      if (savedAlbums) {
        albums = JSON.parse(savedAlbums);
      }

      this.album = albums.find(a => a.id === albumId);

      if (this.album) {
        this.newTitle = this.album.title;
      }
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbums().subscribe(albums => {
      this.album = albums.find(a => a.id === albumId);
      if (this.album) {
        this.newTitle = this.album.title;
      }
    });
  }

  editAlbum(album: any) {
    album.isEditing = true; 
  }
  
  saveAlbum(album: any, newTitle: string) {
    if (newTitle.trim()) {
      album.title = newTitle; 
      album.isEditing = false; 
    }
  }
  
  saveTitle() {
    if (this.album) {
      this.album.title = this.newTitle; 
      alert('Album updated (client-side)!');
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
