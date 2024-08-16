<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accountants List</title>
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

    <h2>Accountants List</h2>

    <table>
        <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        <?php
        // Read the file
        $file = fopen("data.txt", "r");

        // Loop through each line of the file
        while (($line = fgets($file)) !== false) {
            // Split the line by commas
            $data = explode(",", $line);

            // Check if the profession is 'Accountant'
            if (trim($data[1]) === 'Accountant') {
                // Display the data in a table row
                echo "<tr>";
                echo "<td>" . htmlspecialchars($data[0]) . "</td>";
                echo "<td>" . htmlspecialchars($data[2]) . "</td>";
                echo "<td>" . htmlspecialchars($data[3]) . "</td>";
                echo "<td>" . htmlspecialchars($data[4]) . "</td>";
                echo "</tr>";
            }
        }

        // Close the file
        fclose($file);
        ?>
    </table>

</body>

</html>