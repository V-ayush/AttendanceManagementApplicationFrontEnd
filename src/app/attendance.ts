export class Attendance {
    // #region Properties (4)

    public attendanceId :number
    public currentDate : string;
    public status:string;

    constructor(id:number,date:string,status:string){
        this.attendanceId = id;
        this.currentDate = date;
        this.status = status;
    }

    // #endregion Properties (4)
}
