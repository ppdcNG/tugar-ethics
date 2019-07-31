$(window).scroll(function () {
    if ($(window).scrollTop() > 63) {
        $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 64) {
        $('.navbar').removeClass('navbar-fixed');
    }
});

$(function () {
    var table = $("#data-table").DataTable({
        lengthChange: false,
        responsive: true,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });

    table.buttons().container()
        .appendTo("#data-table_wrapper .col-md-6:eq(0)");


    var table1 = $("#data-table1").DataTable({
        lengthChange: false,
        responsive: true,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });

    table1.buttons().container()
        .appendTo("#data-table1_wrapper .col-md-6:eq(0)");

    var table2 = $("#data-table2").DataTable({
        lengthChange: false,
        responsive: true,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });

    table2.buttons().container()
        .appendTo("#data-table2_wrapper .col-md-6:eq(0)");
});
