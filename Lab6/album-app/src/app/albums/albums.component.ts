import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../services/albums.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: any[] = [];
  newAlbumTitle: string = '';
  constructor(private albumsService: AlbumsService) {
    const savedAlbums = localStorage.getItem('albums');  
    if (savedAlbums) {
      this.albums = JSON.parse(savedAlbums); 
    } else {
      this.albumsService.getAlbums().subscribe((data) => {
        this.albums = data;
        this.saveToLocalStorage();
      });
    }
  }
  editAlbum(album: any) {
    album.isEditing = true; 
    album.newTitle = album.title;
  }
  
  saveAlbum(album: any, newTitle: string) {
    if (newTitle.trim()) {
      album.title = newTitle;
      album.isEditing = false;
      this.saveToLocalStorage();
    }
  }
  
  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }
  addAlbum() {
    if (this.newAlbumTitle.trim()) {
      const maxId = this.albums.length > 0 
        ? Math.max(...this.albums.map(album => album.id)) 
        : 0;
  
      const newAlbum = {
        id: maxId + 1, // ✅ Теперь ID всегда уникальный
        title: this.newAlbumTitle
      };
  
      this.albums.push(newAlbum);
      this.newAlbumTitle = '';
      this.saveToLocalStorage(); 
    }
  }
  private saveToLocalStorage() {
    localStorage.setItem('albums', JSON.stringify(this.albums));
    this.saveToLocalStorage();
  }

}
