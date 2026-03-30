const ctx = document.querySelector("section canvas");

const data = [
    { week: 'Week 1', count: 420000 },
    { week: 'Week 2', count: 460000 },
    { week: 'Week 3', count: 390000 },
    { week: 'Week 4', count: 510000 }
];

let chart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: data.map(row => row.week),
        datasets: [{
            label: 'Weekly Expenses',
            data: data.map(row => row.count)
        }]
    }
});

const select = document.getElementById("select");
select.value = "weekly";
select.addEventListener("change", function() {
    const selectedValue = this.value;
    if(selectedValue === "daily"){
        const data = [
            { day: 'Monday', count: 60000 },
            { day: 'Tuesday', count: 75000 },
            { day: 'Wednesday', count: 50000 },
            { day: 'Thursday', count: 70000 },
            { day: 'Friday', count: 80000 },
            { day: 'Saturday', count: 90000 },
            { day: 'Sunday', count: 65000 }
            ];

        updateChart(data.map(row => row.day), data.map(row => row.count), "Daily Expenses");
    } else if(selectedValue === "monthly") {
        const data = [
            { month: 'Jan', count: 1800000 },
            { month: 'Feb', count: 1650000 },
            { month: 'Mar', count: 1900000 },
            { month: 'Apr', count: 2000000 },
            { month: 'May', count: 1750000 },
            { month: 'Jun', count: 2100000 },
            { month: 'Jul', count: 2200000 },
            { month: 'Aug', count: 1950000 },
            { month: 'Sep', count: 1850000 },
            { month: 'Oct', count: 2050000 },
            { month: 'Nov', count: 2300000 },
            { month: 'Dec', count: 2500000 }
        ];

        updateChart(data.map(row => row.month), data.map(row => row.count), "Monthly Expenses");
    } else if(selectedValue === "yearly") {
        const data = [
            { year: 2019, count: 21000000 },
            { year: 2020, count: 19500000 },
            { year: 2021, count: 22000000 },
            { year: 2022, count: 24000000 },
            { year: 2023, count: 26000000 },
            { year: 2024, count: 27500000 },
            { year: 2025, count: 29000000 }
        ];

        updateChart(data.map(row => row.year), data.map(row => row.count), "Yearly Expenses");
    }

});

function updateChart(labels, data, Labeltitle) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].label = Labeltitle;

    chart.update();
}
