import React, { Component } from "react";
import Chart from "react-apexcharts";

class MixedChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        dataLabels: {
            enabled: false
          },

        xaxis: {
          type: "date",
          categories: [
            "2003",
            "Feb '03",
            "Mar '03",
            "April '03",
            "May '03",
            "Jun '03",
            "Jul '03",
            "Aug '03",
            "Sep '03",
            "Oct '03",
            "Nov '03",
          ],
        },
 
      },
      series: [
        {
          name: "Desktops",
            type: "bar",
          color: "#696ddb",
          data: [
            "20",
            "10",
            "20",
            "25",
            "10",
            "20",
            "30",
            "10",
            "40",
            "10",
            "25",
          ],
        
        },

        {
            name: "Laptops",
            type: "bar",
            color: "#e4f1f5",
            data: [
              "40",
              "50",
              "40",
              "65",
              "20",
              "30",
              "20",
              "30",
              "50",
              "20",
              "30",
            ],
            fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  shadeIntensity: 1,
                  opacityFrom: 1,
                  opacityTo: 1,
                }
              }
          },
  
          {
            name: "Tablets",
            type: "scatter",
            color: "#de3a7b",
            options: {
              stroke: {
                curve: '', 
                line: 'round',
              },
             
            },
            data: [
              "25",
              "20",
              "30",
              "25",
              "40",
              "30",
              "60",
              "50",
              "55",
              "30",
              "30",
            ],
  
          },

      ],
      
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="Chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              height={295}
              type='scatter'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MixedChart;
