import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type Workout = {
  id: number;
  name: string;
  desc: string;
  image: string;
  cat: string;
  inst: string;
  len: string;
  level: string;
  product: string;
};
@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent implements OnInit {
  /* get workouts from server */
  workoutList: Workout[] = [];
  workout: Workout = {
    id: 1,
    name: '',
    desc: '',
    image: '',
    cat: '',
    inst: '',
    len: '',
    level: '',
    product: '',
  };

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
