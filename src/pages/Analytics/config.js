const dataMonthlyAttendance = {
	series: [
		{
			data: [31, 40, 28, 51, 42],
		},
	],
	options: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
		chart: {
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: false,
			},
		},

		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		xaxis: {
			labels: {
				show: true,
			},
			tooltip: {
				enabled: false,
			},

			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
		yaxis: {
			show: false,
		},
		tooltip: {
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: (seriesName) => '',
				},
			},
			marker: { show: false },
		},
		fill: {
			colors: '#4495C7',
			type: 'gradient',
			// gradient: {
			// 	type: 'vertical',
			// 	shadeIntensity: 1,
			// 	opacityFrom: 0.7,
			// 	opacityTo: 0.9,
			// 	stops: [40, 200, 100, 100],
			// },
			gradient: {
				shade: 'dark',
				type: 'horizontal',
				shadeIntensity: 0.5,
				gradientToColors: undefined,
				inverseColors: true,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 100],
				colorStops: [],
			},
		},
		stroke: {
			show: true,
			colors: ['#4495C7'],
		},
	},
};

export { dataMonthlyAttendance };
