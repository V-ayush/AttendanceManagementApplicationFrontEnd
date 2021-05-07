import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.css']
})
export class CreateAttendanceComponent implements OnInit {

  attendance : Attendance = new Attendance(0,"","");
  constructor(private attendanceService:AttendanceService,
    private router:Router ) { }

  ngOnInit(): void {
    
  }
  saveAttendance(){
    this.attendanceService.createAttendance(this.attendance).subscribe(data =>{
      console.log(data);
      this.goToAttendanceList();
    },
    error =>console.log(error)); 
  }

  goToAttendanceList(){
    this.router.navigate(['/attendance'])
  }
  onSubmit(){
    this.saveAttendance();
  }
}
