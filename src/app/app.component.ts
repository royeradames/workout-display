import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type Workout = {
  id: string;
  name: string;
  image: string;
  len: string;
  level: string;
  product: string;
  updatedAt: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'workout-display';

  /* get workouts from server */
  workoutList: Workout[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getWorkoutList();
    console.log(this.workoutList);
  }
  configUrl =
    'https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json';

  getWorkoutList() {
    this.http.get<any>(this.configUrl).subscribe((data) => {
      this.workoutList = data.items;
      console.log(this.workoutList);
    });
  }
}
