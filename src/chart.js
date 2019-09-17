// chart
document.addEventListener("DOMContentLoaded", function () {

    // first chart
    Highcharts.chart("container1", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Existence of codes"
        },
        series: [
            {
                name: 'Brands',
                data: [{
                    name: 'Either Code of COnduct or Code of Ethics',
                    y: 89
                }, {
                    name: 'No information obtained',
                    y: 3
                }, {
                    name: 'Organizations with no COC or COE',
                    y: 89
                }
                ]
            }
        ]
    });

    // second chart
    Highcharts.chart("container2", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Organizations indicating that their Codes have explicit anti-corruption elements"
        },
        series: [{
            name: 'Brands',
            data: [{
                name: 'Yes',
                y: 24
            }, {
                name: 'No response',
                y: 150
            }, {
                name: 'Yet to be verified',
                y: 7
            }
            ]
        }
        ]
    });

    // third chart
    Highcharts.chart("container3", {
        chart: {
            type: "column"
        },
        title: {
            text: "Regularities of Ethics Training"
        },
        xAxis: {
            categories: ['Yes', 'No', 'No information']
        },
        series: [{
            name: 'Brands',
            data: [23, 15, 143]
        }]
    });

    // fourth chart
    Highcharts.chart("container4", {
        chart: {
            type: "column"
        },
        title: {
            text: "Ethics introfuction in Induction new staff"
        },
        xAxis: {
            categories: ['Yes', 'No', 'No information']
        },
        series: [{
            name: 'Brands',
            data: [32, 2, 147]
        }]
    });

    // Fifth chart
    Highcharts.chart("container5", {
        chart: {
            type: "column"
        },
        title: {
            text: "Public access to Codes on website"
        },
        xAxis: {
            categories: ['Yes', 'No', 'Link not working']
        },
        series: [{
            name: 'Brands',
            data: [23, 154, 4]
        }]
    });

    // Sixth chart
    Highcharts.chart("container6", {
        chart: {
            type: "column"
        },
        title: {
            text: "Public Agencies with their Codes on the website"
        },
        xAxis: {
            categories: ['Yes', 'No', 'Broken Link']
        },
        series: [{
            name: 'Brands',
            data: [7, 81, 1 ]
        }]
    });

    // seventh chart
    Highcharts.chart("container7", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Complaint Mechanism"
        },
        series: [
            {
                name: 'Brands',
                data: [{
                    name: 'Yes',
                    y: 56
                }, {
                    name: 'No',
                    y: 8
                }, {
                    name: 'No Information',
                    y: 117
                }]
            }
        ]
    })

    // eight chart
    Highcharts.chart("container8", {
        chart: {
            type: "pie"
        },
        title: {
            text: "Public Agencies with Organization-specific complaint mechanism"
        },
        series: [
            {
                name: 'Brands',
                data: [{
                    name: 'Yes',
                    y: 29
                }, {
                    name: 'No',
                    y: 1
                }, {
                    name: 'No Information',
                    y: 57
                }]
            }
        ]
    })

    // ninth chart
    Highcharts.chart("container9", {
        chart: {
            type: "column"
        },
        title: {
            text: "Organizations with Complaints procedures displayed of their website"
        },
        xAxis: {
            categories: ['Yes', 'No']
        },
        series: [{
            name: 'Numbers',
            data: [23, 158]
        }]
    });

    // tenth chart
    Highcharts.chart("container10", {
        chart: {
            type: "column"
        },
        title: {
            text: "Public Agencies with Codes other than the CCPO"
        },
        xAxis: {
            categories: ['Internal Codes', 'Only POCC', 'No Information']
        },
        series: [{
            name: 'Numbers',
            data: [37, 3, 49]
        }]
    });


        // 11th chart
        Highcharts.chart("container11", {
            chart: {
                type: "column"
            },
            title: {
                text: "The State of Periodic Review of Codes of Conduct or Ethics"
            },
            xAxis: {
                categories: ['No information', 'Disputable', 'No', 'Yes']
            },
            series: [{
                name: 'Numbers',
                data: [155, 7, 22, 2]
            }]
        });


}); // end domContent loaded