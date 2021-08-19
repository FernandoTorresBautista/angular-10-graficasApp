import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 280],
    [50, 150, 120, 80],
    //[250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[] = [
    {
      backgroundColor: [
        "#86E868",
        "#BBF26D",
        "#F2E76D",
        "#E8D168",
      ]
    }
  ];

}
