import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

 attendances: Attendance[]=[];

  constructor(private attendanceService : AttendanceService) { }

  ngOnInit(): void {
       this.getAllAttendance();
    
  }
  getAllAttendance(){
    this.attendanceService.getAttendanceList().subscribe(data => {
      this.attendances = data;
    })
  }
}
