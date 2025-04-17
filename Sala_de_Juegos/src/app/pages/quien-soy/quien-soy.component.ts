import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  githubUser: any;
  username = 'tomascurto';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUserData(this.username).subscribe(data => {
      this.githubUser = data;
    });
  }

}
