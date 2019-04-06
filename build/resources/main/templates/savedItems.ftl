<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Form - HTML5</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
</head>
<body class="bg-light">
<div class="container">
    <div align="center">
        <div id="map" style="height: 400px; width: 100%;"></div>
    </div>
    <br>
    <div>
        <div class="py-3 text-center">
            <h2>Saved Forms</h2>
        </div>
        <table id="form_saved_values" class="display" style="width:100%">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Sector</th>
                <th>Education</th>
            </tr>
            </thead>
            <tbody>
            <tr>

            </tr>
            </tbody>
        </table>
    </div>
    <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">2019 Dhamar's Form</p>
    </footer>
</div>
<script src="../js/jquery.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJMpzfoCoa4Mvg5GA-dNwVTnVXPvXIFQs&callback=initMap"
        type="text/javascript">
</script>
<script src="../js/table.js"></script>
<script src="../js/savedItemController.js"></script>
</body>
</html>