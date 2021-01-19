import { Component } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import { LoaderService } from './loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChuckNorrisJokes';
  setup:string = '';
  punchline:string = '';
  audioObj = new Audio();

  cursor = {
    x: 100,
    y: 100
  };

  constructor(private jokeApiService: JokeApiService, public loaderService: LoaderService){

  }

  ngOnInit(): void {
    this.audioObj.src = '../assets/one.mp3'
    this.audioObj.load();
    this.jokeApiService.getJoke().subscribe((data) => {
      this.setup = data['setup'];
      this.punchline = data['punchline'];
    })
  }

  OnNext(){
    this.jokeApiService.getJoke().subscribe((data) => {
      this.setup = data['setup'];
      this.punchline = data['punchline'];
    })
    this.audioObj.play();
  }

  OnFav(){
    window.open("https://github.com/tuminzee/HitMeWithAnotheOne")
  }


  //Bad Code change this in the future
  fireEvent(e: MouseEvent){
    this.cursor.x = e.clientX;     // Get the horizontal coordinate
    this.cursor.y = e.clientY;
    console.log(this.cursor);
  }

  getX(){
    return this.cursor.x;
  }

  getY(){
    return this.cursor.y;
  }

}
