function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Languages', '%', {role: 'style'}, {role: 'annotation'}],
    ['',  95, '#b87333', 'Python'],
    ['',  93, 'silver', 'Java'],
    ['',  90, 'gold', 'Swift/Obj-C'],
    ['',  85, '#e5e4e2', 'C'],
    ['', 70, '#e5e4e2', 'C++'],
    ['', 60, '#e5e4e2', 'PHP'],
    ['', 57, '#e5e4e2', 'HTML/CSS'],
    ['', 57, '#e5e4e2', 'JavaScript']
  ]);

  var options = {
    title: 'Programming Skills',
    legend: 'none'
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}

