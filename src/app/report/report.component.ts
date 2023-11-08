import { Component } from '@angular/core';
import { StudentServiceService } from 'src/services/student-service.service';
import { Students, Attendance, chartData } from '../model';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],

})
export class ReportComponent {
  studentList: Array<Students> = []
  attendanceList: Array<Attendance> = []
  date_map = new Map()
  dt: string = ""
  scheme:string = ""
  xvalues: Array<string> = []
  yvalues: Array<number> = []
  view: [number,number] = [600, 400];
  sample: Array<chartData>=[];
  final: Array<chartData>=[];
  


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Students';
  colorScheme = {
    domain: ['#003f5c',
      '#2f4b7c',
     '#665191',
      '#a05195',
      '#d45087',
      '#f95d6a',
      '#ff7c43',
      '#ffa600']
  };



  constructor(private service: StudentServiceService) { }


  ngOnInit(): void 
  {
      this.loadData()
  }
  


  sortDate(a:chartData,b:chartData)
  {                 
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }


  loadData()
  {
    this.service.searchAttendance().subscribe((data) => {
      this.attendanceList = data
      console.log(this.attendanceList);

      this.attendanceList.forEach((data) => {
        this.dt = data.date.toString()
        if(data.present==="Present")
        {
        if (this.date_map.has(this.dt)) 
        {
          this.date_map.set(this.dt, this.date_map.get(this.dt) + 1)
        }
        else
        {
          this.date_map.set(this.dt, 1);
        }
      }
      else
      {
        if(this.date_map.get(this.dt)===undefined)
        this.date_map.set(this.dt, 0);
        else if(this.date_map.has(this.dt))
        this.date_map.set(this.dt, this.date_map.get(this.dt))
      }
      })

      for (let item of this.date_map.keys())
        this.xvalues.push(item)

      for (let item of this.date_map.values())
        this.yvalues.push(item)
   
        for (let i=0;i<this.xvalues.length;i++) 
        {  
            this.final.push({"name":this.xvalues[i],"value":this.yvalues[i]})
        }
      

        this.final.sort(this.sortDate)


    })

  }
 

}

