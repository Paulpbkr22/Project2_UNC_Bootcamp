<?php


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "speaksoftlycast@gmail.com";


    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n"

    mail($mailTo, $subject, $txt, $headers);

    header("Location: contact.html$mailsend");
}
?>