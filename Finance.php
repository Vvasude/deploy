<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finance and Consulting List</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        table,
        th,
        td {
            border: 1px solid black;
        }

        th,
        td {
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

    <h2>Finance and Consulting List</h2>

    <table>
        <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        <?php
        // Read the JSON file
        $jsonData = file_get_contents("members.json");

        // Decode JSON data
        $dataArray = json_decode($jsonData, true);

        // Loop through each entry
        foreach ($dataArray as $entry) {
            // Check if the profession is 'Finance and Consulting'
            if (trim($entry['type']) === 'Finance') {
                // Display the data in a table row
                echo "<tr>";
                echo "<td>" . htmlspecialchars($entry['Firstname'] . " " . $entry['Lastname']) . "</td>";
                echo "<td>" . htmlspecialchars($entry['phone']) . "</td>";
                echo "<td>" . htmlspecialchars($entry['email']) . "</td>";
                echo "<td>" . htmlspecialchars($entry['address']) . "</td>";
                echo "</tr>";
            }
        }
        ?>
    </table>

</body>

</html>