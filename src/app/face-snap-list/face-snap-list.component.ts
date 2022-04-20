import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description : 'Mon meilleur ami depuis tout petit',
        createDate: new Date(),
        snaps: 140,
        imageUrl: 'https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg?w=1380&t=st=1648747351~exp=1648747951~hmac=415ad77b2aaa414388a959fc891129b339fd1bcb8d4e079d5d5d1d1b3620087d',
        location: 'la montagne'
      },
      {
        title: 'Rock Mont',
        description : 'un spectacle formidable',
        createDate: new Date(),
        snaps: 0,
        imageUrl: 'https://img.freepik.com/free-photo/closeup-shot-happy-young-man-woman_181624-44646.jpg?size=626&ext=jpg&ga=GA1.2.1362092267.1648468510',
      }
    ]
  }

}
