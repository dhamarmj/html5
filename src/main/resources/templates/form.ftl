<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Form - HTML5</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
</head>
<body class="bg-light">
<div class="container">
    <div class="py-3 text-center">
        <h2>Registration Form</h2>
    </div>
    <div class="row justify-content-lg-center">
        <div class="col col-lg-3">
            <form class="needs-validation" id="form" onsubmit="return submitFunction(event)">
                <#--<form class="needs-validation" method="POST" action="/submit">-->
                <div class="row">
                    <div class="mb-2" style="width: 100%;">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" width="col-md-auto" required>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div style="width: 100%;" class="mb-2">
                        <label for="sector">Sector</label>
                        <input type="text" class="form-control col-md-auto" id="sector" required>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="mb-2" style="width: 100%;">
                        <label for="education">Educational Level</label>
                        <select class="custom-select d-block w-150" id="education" name="education" required>
                            <option value="none" selected="selected">Choose...</option>
                            <option value="Basico">Basico</option>
                            <option value="Medio">Medio</option>
                            <option value="Universitario">Universitario</option>
                            <option value="Postgrado">Postgrado</option>
                            <option value="Doctorado">Doctorado</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                </div>
                <hr>
                <button class="btn btn-primary btn-md btn-block" type="submit">Send!</button>
            </form>
        </div>
    </div>
    <br>
    <div>
        <table id="form_values" class="display" style="width:100%">
            <thead>
            <tr>
                <th>Name</th>
                <th>Sector</th>
                <th>Education</th>
                <th>Save?</th>
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
<script src="../js/serviceWorker.js"></script>
<script src="../js/database.js"></script>
<script src="../js/jquery.js"></script>
<#--<script src="../js/creatingTable.js"></script>-->

</body>
</html>