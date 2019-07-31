// chart
document.addEventListener("DOMContentLoaded", function () {
    var myChart = Highcharts.chart("container1", {
        chart: {
            type: "column"
        },
        title: {
            text: "Chart 1"
        },
        xAxis: {
            categories: ["Apples", "Bananas", "Oranges"]
        },
        yAxis: {
            title: {
                text: "Fruit eaten"
            }
        },
        series: [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ]
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var myChart = Highcharts.chart("container2", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Chart 2"
        },
        xAxis: {
            categories: ["Apples", "Bananas", "Oranges"]
        },
        yAxis: {
            title: {
                text: "Fruit eaten"
            }
        },
        series: [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ]
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var myChart = Highcharts.chart("container3", {
        chart: {
            type: "line"
        },
        title: {
            text: "Chart 3"
        },
        xAxis: {
            categories: ["Apples", "Bananas", "Oranges"]
        },
        yAxis: {
            title: {
                text: "Fruit eaten"
            }
        },
        series: [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ]
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var myChart = Highcharts.chart("container4", {
        chart: {
            type: "area"
        },
        title: {
            text: "Chart 4"
        },
        xAxis: {
            categories: ["Apples", "Bananas", "Oranges"]
        },
        yAxis: {
            title: {
                text: "Fruit eaten"
            }
        },
        series: [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ]
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var myChart = Highcharts.chart("container5", {
        chart: {
            type: "bar"
        },
        title: {
            text: "Chart 5"
        },
        xAxis: {
            categories: ["Apples", "Bananas", "Oranges"]
        },
        yAxis: {
            title: {
                text: "Fruit eaten"
            }
        },
        series: [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ]
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var myChart = Highcharts.chart("container6", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Chart 6"
        },
        xAxis: {
            categories: ["Apples", "Bananas", "Oranges"]
        },
        yAxis: {
            title: {
                text: "Fruit eaten"
            }
        },
        series: [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ]
    });
});