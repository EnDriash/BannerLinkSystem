$(function() {
     // Calendar Date Range SECTION
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('.reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('.reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

     // CHAR SECTION
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // 1
        type: 'bar',
        data: {
            // 2
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
           
            // 3
            datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [ 350, 170, 200, 400, 370, 280, 250, 230, 290, 0 ],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 400, 150, 290, 220, 470, 110, 190, 500, 310, 0 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                // 7
                hidden: true,
            }]
        },
    });

});

