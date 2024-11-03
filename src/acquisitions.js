import Chart from 'chart.js/auto'



(async function() {
  var startDate = document.querySelector("#dt-start")
  var EndDate = document.querySelector("#dt-end")
  var DtBtn = document.querySelector("#dateBtn")
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const getDateData =()=>{

    const startDt = startDate.value.split("-").join("")
    console.log(startDt)
  }
  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'pie',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
  DtBtn.addEventListener("click" ,getDateData )

})();
