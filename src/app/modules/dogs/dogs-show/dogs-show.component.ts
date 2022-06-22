import { Component, OnInit } from '@angular/core';
import { DogImage } from '../dog-image';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs-show',
  templateUrl: './dogs-show.component.html',
  styleUrls: ['./dogs-show.component.css']
})
export class DogsShowComponent implements OnInit {

  dogImage!: DogImage;
  isVideo = false;

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.loadDogs();
  }

  woof() {
    this.loadDogs();
  }

  private isVideoURL() {
    const urlSplitted = this.dogImage.url.split('.');
    return urlSplitted.pop() === 'mp4';
  }

  private loadDogs() {
    this.dogsService.woof().subscribe(response => {
      this.dogImage = response;
      this.isVideo = this.isVideoURL();
    })
  }

}
