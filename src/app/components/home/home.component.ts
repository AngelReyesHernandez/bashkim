import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataPeticiones=[];
  dataServicioes=[];
  constructor() { }

  ngOnInit() {
    this.getPeticiones();
    this.getServicios();
  }
  
getPeticiones(){

  var canvas = <HTMLCanvasElement> document.getElementById('chartPeticiones');
  var ctx = canvas.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Load porcentage','Rest'],
        datasets: [{
            label: '# of Votes',
            data: [45,55],
            backgroundColor: [
              'rgb(178,200,49)',
              'rgba(178,200,49,.1)'
            ],
            hoverOffset: 4
          }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          }
      }
  }
});

}
getServicios(){

  var canvas = <HTMLCanvasElement> document.getElementById('chartServicios');
  var ctx = canvas.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Load porcentage','Rest'],
        datasets: [{
            label: '# of Votes',
            data: [65,35],
            backgroundColor: [
              'rgb(250,29,45)',
              'rgba(250,29,45,.1)'
            ],
            hoverOffset: 4
          }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          }
      }
  }
});

}


}
