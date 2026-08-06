<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON"]);
        exit;
    }

    $fullName = $data['fullName'] ?? '';
    $companyName = $data['companyName'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $businessLocation = $data['businessLocation'] ?? '';
    $serviceRequired = $data['serviceRequired'] ?? '';
    $numberOfRiders = $data['numberOfRiders'] ?? '';
    $messageBody = $data['message'] ?? '';

    if (!$fullName || !$email || !$serviceRequired) {
        http_response_code(400);
        echo json_encode(["error" => "Missing required fields"]);
        exit;
    }

    $to = "alaya@fastflydelivery.com";
    $subject = "New Lead: $serviceRequired from $companyName";
    
    $message = "
    <html>
    <head>
      <title>New Contact Request</title>
    </head>
    <body>
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> " . htmlspecialchars($fullName) . "</p>
      <p><strong>Company:</strong> " . htmlspecialchars($companyName) . "</p>
      <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
      <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
      <p><strong>Location:</strong> " . htmlspecialchars($businessLocation) . "</p>
      <hr />
      <h3>Service Requirements</h3>
      <p><strong>Service Requested:</strong> " . htmlspecialchars($serviceRequired) . "</p>
      <p><strong>Number of Riders:</strong> " . htmlspecialchars($numberOfRiders) . "</p>
      <hr />
      <h3>Additional Message</h3>
      <p>" . nl2br(htmlspecialchars($messageBody)) . "</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Fast Fly Website <alaya@fastflydelivery.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email. Please check server mail configuration."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
