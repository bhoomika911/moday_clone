// Header.js
import React, {Component} from 'react';

let self;

const Morris = window.Morris;
const $ = window.$;
// const Chart = window.Chart;

export default class OverViewTable extends Component {
  constructor(props){
    super(props);

    self = this;

    let headerList = [
      {
        title : "Phase Details",
        hasRound : false
      },
      {
        title : "Status",
        hasRound : false
      },
      {
        title : "Planned",
        hasRound : true
      },
      {
        title : "Actuals",
        hasRound : true
      },
      {
        title : "Team",
        hasRound : false
      },
      {
        title : "Progress",
        hasRound : true
      },
    ];

    let rowList = [
      {
        phaseDet : {
          imageTxt : "P1",
          name : "Phase 1",
          owner : "Owned by Kiran",
        },
        statusDet : {
          pers : "85%",
          persText : "NEEDS HELP",
          classColor : "orange"
        },
        planDet : {
          chartData : [
            {y: '12', a: 100, b: 90,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
            {y: '14', a: 50, b: 40,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
          ]
        },
        actualDet : {
          chartData : [
            {y: '13', a: 75, b: 65,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
            {y: '14', a: 50, b: 40,c: 90},
          ]
        },
        teamDet : {

        },
        progressDet : {
          compl : "85",
          timeline : "Feb 15 - Mar 01,2019"
        }
      },
      {
        phaseDet : {
          imageTxt : "P2",
          name : "Phase 2",
          owner : "Owned by Kiran",
        },
        statusDet : {
          pers : "75%",
          persText : "NEEDS HELP",
          classColor : "parrot"
        },
        planDet : {
          chartData : [
            {y: '14', a: 50, b: 40,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
          ]
        },
        actualDet : {
          chartData : [
            {y: '13', a: 75, b: 65,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
            {y: '14', a: 50, b: 40,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
          ]
        },
        teamDet : {

        },
        progressDet : {
          compl : "75",
          timeline : "Feb 15 - Mar 01,2019"
        }
      },
      {
        phaseDet : {
          imageTxt : "P3",
          name : "Phase 3",
          owner : "Owned by Kiran",
        },
        statusDet : {
          pers : "0%",
          persText : "NOT STARTED",
          classColor : "grey"
        },
        planDet : {
          chartData : [
            {y: '14', a: 50, b: 40,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
          ]
        },
        actualDet : {
          chartData : [
            {y: '13', a: 75, b: 65,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
            {y: '14', a: 50, b: 40,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
          ]
        },
        teamDet : {

        },
        progressDet : {
          compl : "0",
          timeline : "Feb 15 - Mar 01,2019"
        }
      },
      {
        phaseDet : {
          imageTxt : "P4",
          name : "Phase 4",
          owner : "Owned by Kiran",
        },
        statusDet : {
          pers : "75%",
          persText : "ON-TRACK",
          classColor : "parrot"
        },
        planDet : {
          chartData : [
            {y: '13', a: 75, b: 65,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
            {y: '14', a: 50, b: 40,c: 90},
          ]
        },
        actualDet : {
          chartData : [
            {y: '13', a: 75, b: 65,c: 90},
            {y: '14', a: 50, b: 40,c: 90},
            {y: '12', a: 100, b: 90,c: 90},
            {y: '13', a: 75, b: 65,c: 90},
          ]
        },
        teamDet : {

        },
        progressDet : {
          compl : "75",
          timeline : "Feb 15 - Mar 01,2019"
        }
      },

    ];

    this.state = {
      headerList : headerList,
      rowList : rowList,
    }
  }

  renderHeaders(){
    let {headerList} = this.state;
    return (
      <tr>
        {
          headerList.map(function(objHeader){
            return (
              <th>
                <div className = 'table-header-div'>
                  <div className = "header-text">{objHeader.title}</div>
                  {
                    objHeader.hasRound ?
                    <div className = "add-circle">
                      <div className = "add-text">
                        +
                      </div>
                    </div>
                    :
                    null
                  }
                </div>
              </th>
            )
          })
        }
      </tr>
    )
  }

  renderRow(objRow,rowIndex){

    // imageTxt : "P1",
    // name : "Phase 1",
    // owner : "Owned by Kiran",
    return (
        <tr className = "white-row">
          <td>
            <div className = "table-row-div">
              {
                self.renderPhaseDet(objRow)
              }
            </div>
          </td>

          <td>
            <div className = "table-row-div">
              {
                self.renderStatus(objRow)
              }
            </div>
          </td>

          <td>
            <div className = "table-row-div">
              {
                self.renderPlanned(objRow,rowIndex)
              }
            </div>
          </td>


          <td>
            <div className = "table-row-div">
              {
                self.renderActual(objRow,rowIndex)
              }
            </div>
          </td>

          <td>
            <div className = "table-row-div">
              {
                self.renderTeam(objRow)
              }
            </div>
          </td>

          <td>
            <div className = "table-row-div">
              {
                self.renderProgress(objRow)
              }
            </div>
          </td>
      </tr>
    )
  }

  renderPhaseDet(objRow){
    return (
      <div className = "phase-det-div">
        <div className = "phase-lft">
          <div className = "phase-pic-txt">
          {objRow.phaseDet.imageTxt}
          </div>
        </div>

        <div className = "phase-right">
          <div className = "phase-top">
          {objRow.phaseDet.name}
          </div>
          <div className = "phase-bottom">
          {objRow.phaseDet.owner}
          </div>
        </div>

      </div>
    )
  }

  renderTeam(objRow){
    return (
      <div className='team-div'>
        <div className='person-div-single' style={{zIndex : 10,left : 10}}>
          <img src="./../../../dist/img/avatar.png"
            className = 'team-img'
            />
        </div>

        <div className='person-div-single' style={{zIndex : 9,left : 5}}>
          <img src="./../../../dist/img/avatar2.png"
            className = 'team-img'
          />
        </div>

        <div className='person-div-single'  style={{zIndex : 8,left : 0}}>
          <img src="./../../../dist/img/avatar3.png"
            className = 'team-img'
           />
        </div>

        <div className='person-div-single more-person-parent' style={{zIndex : 7,left : -5}}>
          <div className="more-person-txt">
          +3
          </div>
        </div>
      </div>
    )
  }

  renderStatus(objRow){
    // pers : "85%",
    // persText : "NEEDS HELP",
    // classColor : "orange"
    return (
      <div className={'status-div ' + objRow.statusDet.classColor}>
        <div className='status-top-text'>
        {objRow.statusDet.pers}
        </div>
        <div className='status-bottom-text'>
        {objRow.statusDet.persText}
        </div>
      </div>
    )
  }

  renderPlanned(objRow,rowIndex){
    return (
      <div className="planned-chart-div">
        <div className="">
          <div className=" chart-actual chart" id={"bar-chart-planned"+rowIndex}></div>
        </div>
      </div>
    )
  }

  renderActual(objRow,rowIndex){
    return (
      <div className="">
        <div className="">
          <div className="chart-actual chart" id={"bar-chart-actual"+rowIndex}></div>
        </div>
      </div>
    )
  }

  renderProgress(objRow){
    let progressWidthStyle = {
      width: objRow.progressDet.compl + '%'
    };

    return (
      <div className="progress-row-main">
        <div className='progress-top-text'>
        Completion with: {objRow.progressDet.compl}%
        </div>

        <div className="progress-main progress xs">
          <div className="progress-sub progress-bar progress-bar-aqua" style={progressWidthStyle} role="progressbar">
          </div>
        </div>

        <div className='progress-bottom-text'>
        Timeline:   {objRow.progressDet.timeline}
        </div>
      </div>
    )

  }

  componentDidMount(){
    let {rowList} = this.state;
    rowList.forEach(function(objRow,index){
      let plannedBarchart = new Morris.Bar({
        element: 'bar-chart-planned'+index,
        // resize: true,
        data: objRow.planDet.chartData,
        barColors: ['#ff0000', 'rgb(34,140,212)','rgb(34,140,212)'],
        xkey: 'y',
        ykeys: ['a', 'b','c'],
        hideHover: 'auto',
        grid : false,
        yLabelFormat:function (y) {
              return '';
          },
          barGap:3,
          barSizeRatio : 0.9,
      });

      let actualBarchart = new Morris.Bar({
        element: 'bar-chart-actual'+index,
        // resize: true,
        data: objRow.actualDet.chartData,
        barColors: ['#ff0000', 'rgb(34,140,212)','rgb(34,140,212)'],
        xkey: 'y',
        ykeys: ['a', 'b','c'],
        hideHover: 'auto',
        grid : false,
        yLabelFormat:function (y) {
              return '';
          },
          barGap:3,
          barSizeRatio : 0.9,
      });
    })




    //-------------
    //- BAR CHART -
    //-------------

    // var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    //
  	// var barChartData = {
  	// 	labels : [],
  	// 	datasets : [
  	// 		{
  	// 			fillColor : "pink",
  	// 			data : [10,20,30],
    //       labels : ['11']
  	// 		},
  	// 		{
  	// 			fillColor : "green",
  	// 			data : [20],
    //       label : '11'
  	// 		},
    //     {
  	// 			fillColor : "green",
  	// 			data : [20],
    //       label : '11'
  	// 		},
    //     {
  	// 			fillColor : "green",
  	// 			data : [20],
    //       label : '11'
  	// 		},
    //     {
  	// 			fillColor : "red",
  	// 			data : [20],
    //       label : '11'
  	// 		}
  	// 	]
    //
  	// }
    //
    // var barChartCanvas                   = $('#barChart').get(0).getContext('2d')
    // var barChart                         = new Chart(barChartCanvas)
    // // barChartData.datasets[1].fillColor   = '#ff0000'
    // // barChartData.datasets[1].strokeColor = '#00ff00'
    // // barChartData.datasets[1].pointColor  = '#0000ff'
    // var barChartOptions                  = {
    //   //Boolean - Whether grid lines are shown across the chart
    //   scaleShowGridLines      : false,
    //
    //   //String - Colour of the grid lines,
    //   barPercentage : 0.3
    // };
    //
    // // barChartOptions.datasetFill = false
    // barChart.Bar(barChartData, barChartOptions)
    //
    //


  }

  render(){
    let {rowList} = this.state;

    return (
      <div className="overview-table-main">
        <table className="overview-table">
          {
            this.renderHeaders()
          }

          {
            rowList.map(function(objRow, rowIndex){
              return self.renderRow(objRow, rowIndex)
            })
          }
        </table>


      </div>
    )
  }
}
