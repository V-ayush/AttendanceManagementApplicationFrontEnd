import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';

const routes: Routes = [
  {path:'attendance', component:AttendanceListComponent},
  {path:'create-Attendance', component:CreateAttendanceComponent}
  // {path:'', redirectTo:'attendance', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
