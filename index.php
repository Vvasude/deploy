<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Category Buttons</title>
    <style>
        .button-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 20px;
        }

        .category-button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .category-button:hover {
            background-color: #45a049;
        }
    </style>
</head>

<body>

    <h2>Select a Category</h2>

    <div class="button-container">
        <a href="Accountants.php"><button class="category-button">Accountants</button></a>
        <a href="AutoServices.php"><button class="category-button">Auto Services</button></a>
        <a href="Beauty.php"><button class="category-button">Beauty</button></a>
        <a href="CleaningServices.php"><button class="category-button">Cleaning Services</button></a>
        <a href="Education.php"><button class="category-button">Education</button></a>
        <a href="Engineering.php"><button class="category-button">Engineering</button></a>
        <a href="Entrepreneur.php"><button class="category-button">Entrepreneur</button></a>
        <a href="EventManagement.php"><button class="category-button">Event Management</button></a>
        <a href="Finance.php"><button class="category-button">Finance and Consulting</button></a>
        <a href="Funeral.php"><button class="category-button">Funeral</button></a>
        <a href="HealthCare.php"><button class="category-button">HealthCare</button></a>
        <a href="Impex.php"><button class="category-button">Impex</button></a>
        <a href="Lawyers.php"><button class="category-button">Lawyers and Paralegals</button></a>
        <a href="RealEstate.php"><button class="category-button">Real Estate</button></a>
        <a href="Restaurants.php"><button class="category-button">Restaurants</button></a>
    </div>

</body>

</html>