const barChartVals = {
  options: {
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        }
      },
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995],
      labels: {
        show: false
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      lines: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      lines: {
        show: false
      }
    }, row: {
      colors: undefined,
      opacity: 0.5
    },
    column: {
      colors: undefined,
      opacity: 0.5
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0
      }
    },
    dataLabels: {
      enabled: false
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 80, 45, 50, 75]
    }
  ]
};


export { barChartVals }