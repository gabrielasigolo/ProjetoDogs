import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DogImage } from './dog-image';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  woof() {
    return this.http.get<DogImage>('https://random.dog/woof.json');
  }
}
