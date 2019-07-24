import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-sessions-gallery',
  templateUrl: './sessions-gallery.component.html',
  styleUrls: ['./sessions-gallery.component.scss']
})
export class SessionsGalleryComponent implements OnInit {
  public _albums = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 8; i++) {
      const src = './assets/img/session/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = './assets/img/session/' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }
  ngOnInit() {}

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
