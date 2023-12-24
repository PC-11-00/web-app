import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'mifosx-maker-checker',
  templateUrl: './maker-checker.component.html',
  styleUrls: ['./maker-checker.component.scss']
})
export class MakerCheckerComponent implements OnInit {

  commandId: string;

  constructor(private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router) {


    this.commandId = route.snapshot.params.commandId;

    console.log("Route from maker_chcekre", this.route);
  }

  ngOnInit(): void {
    console.log("this Maker Chcekre Component", this.commandId);

  }
  details() {
    this.router.navigate(['checker-inbox-and-tasks/checker-inbox/' + this.commandId + '/view']);
  }

}
