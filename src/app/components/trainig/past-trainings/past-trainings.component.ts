import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../models/exercise.model';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'aft-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css'],
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  // This way we are binding the sort property with the table
  @ViewChild(MatSort) sort!: MatSort;
  // This way we are binding the paginator sort property with the data table
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Exercise>();
  displayedColumns: string[] = [
    'date',
    'name',
    'duration',
    'calories',
    'state',
  ];

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainingService
      .getCompletedOrCancelledExercises()
      .subscribe((data) => {
        this.dataSource.data = data;
      });
  }

  // If we use some ViewChild, we have to call it on this life cicle hook.
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: KeyboardEvent | any): void {
    // This is the way to add filtering
    this.dataSource.filter = filterValue.target?.value.trim().toLowerCase();
  }
}
