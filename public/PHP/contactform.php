<?php


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "speaksoftlycast@gmail.com";


    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n"

    mail($mailTo, $subject, $txt, $headers);

    header("Location: contact.html$mailsend");
}
?>