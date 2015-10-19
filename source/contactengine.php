<?php

require_once('recaptchalib.php');
$privatekey = "6Ld8x_sSAAAAABFlg_sFKQjAqMsTDl43VA261m5l";
$resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

if (!$resp->is_valid) {
  die ("The reCAPTCHA wasn't entered correctly. Please reload the page and try again. Sorry for the inconvenience.");
}

$EmailTo = "davidpagini+gengrasvolvonightmare@gmail.com";
$Subject = "Contact Submission";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  // print "<meta http-equiv=\"refresh\" content=\"0;URL=\\\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// redirect to success page 
if ($success){
  // print "<meta http-equiv=\"refresh\" content=\"0;URL=\\\">";
	echo("Thanks for your submission!");
}
else{
  // print "<meta http-equiv=\"refresh\" content=\"0;URL=\\\">";
}
?>