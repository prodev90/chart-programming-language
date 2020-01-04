let bestChart = document.getElementById('bestChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(bestChart, {
      type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Javascript', 'Java', 'Python', 'C++', 'C#', 'Perl', 'PHP'],
        datasets:[{
          label:'Programming Language',
          data:[
            65000,
            63000,
            6200,
            39000,
            30000,
            14000,
						17000
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(128, 128, 55, 0.6)'

          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:0,
          hoverBorderColor:'#777'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Top 7 Most Popular Programming Language',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
          fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
