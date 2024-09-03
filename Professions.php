<?php
// Read the CSV file
$filename = 'CTCC2.csv';  // Specify the file name
$file = fopen($filename, 'r');  // Open the file for reading

// Get the headers
$headers = fgetcsv($file);

// Initialize an array to store data by industry
$industryData = [];

// Loop through each row in the CSV
while (($row = fgetcsv($file)) !== FALSE) {
    // Combine the row with headers
    $entry = array_combine($headers, $row);

    // Check if the Industry field exists and is not empty
    if (!empty($entry['Type'])) {
        // Get the industry and trim any extra spaces
        $industry = trim($entry['Type']);

        // Check if Phone Number is empty, then use Mobile Phone Number
        $phoneNumber = empty($entry['Phone Number']) ? $entry['*Mobile Phone Number'] : $entry['Phone Number'];

        // Add the entry to the industry group
        $industryData[$industry][] = [
            'name' => $entry['First Name'] . ' ' . $entry['Last Name'],
            'phone' => $phoneNumber,
            'email' => $entry['Email'],
            'address' => $entry['*Company Address'] ?? 'N/A' // Use correct address field
        ];
    }
}
// Close the CSV file
fclose($file);

// Sort the industries alphabetically
ksort($industryData);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professionals List by Industry</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
            background-color: #f4f4f4;
        }

        h1 {
            text-align: center;
        }

        .industry-section {
            margin-top: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .industry-header {
            cursor: pointer;
            padding: 10px;
            background-color: #f2f2f2;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            text-align: center;
        }

        .industry-content {
            display: none;
            padding: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 0;
            overflow-x: auto;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #e2e2e2;
        }

        /* Responsive styles */
        @media (max-width: 600px) {
            .industry-header {
                font-size: 14px;
                padding: 8px;
            }

            th,
            td {
                padding: 8px;
                font-size: 12px;
            }

            table {
                display: block;
                width: 100%;
                overflow-x: auto;
            }

            th,
            td {
                white-space: nowrap;
            }
        }
    </style>
</head>

<body>
    <h1>Professionals List by Industry</h1>

    <?php foreach ($industryData as $industry => $entries) : ?>
        <div class="industry-section">
            <div class="industry-header" onclick="toggleContent('<?php echo htmlspecialchars($industry); ?>')">
                <?php echo htmlspecialchars($industry); ?>
            </div>
            <div class="industry-content" id="<?php echo htmlspecialchars($industry); ?>">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    <?php foreach ($entries as $entry) : ?>
                        <tr>
                            <td><?php echo htmlspecialchars($entry['name']); ?></td>
                            <td><?php echo htmlspecialchars($entry['phone']); ?></td>
                            <td><?php echo htmlspecialchars($entry['email']); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        </div>
    <?php endforeach; ?>

    <script>
        function toggleContent(id) {
            var content = document.getElementById(id);
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    </script>

</body>

</html>