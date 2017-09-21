<?php
/*
Author: Colin Hoffman
REF: W3 Schools

Date: Setember 21, 2017

How to read this file: I defined vars, fuctions, statements in the order of how the data is
linked on the pizza order form.

Notes: This code is not portable, and it is intended to be used with a previouse assinment. Also,
W3 schools was hevaly refrenced during the creation of this php file. I like to base my code of of there
examples, since I don't pre-plan my code. This way it is simpler for somone other than me to follow.
*/


//EMPTY VARS DECL AND INIT
$nameErr = $emailErr = $addrErr = $cityErr = $phoneErr = $crustErr = $sizeErr = $toppingsErr = "";
$name = $email = $instructions = $address = $city = $phone = $crust = $size = $toppings = "";
$subject = "A Copy Of You Order";

/*
This function was taken from W3 schools. This is one of the reasons why I chose to follow there
coding syntax. The previous version of this file was hard to read and redundednt at times.
*/
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }


/*
This if else block is seeing if the name field is empty, or has anything
werid characters entered. I used a static variable defined in php5 the first time writing
this file. Here they have chosen to use a reguler expresson. I am think there thought behind this
is that perfoming the validation the way I did created alot of overhead to run. However, I did not
see this mentioned in the php5 documentation.
*/ 
if (empty($_GET["name"])) {
    $nameErr = "Name is required";
} else {
    $name = test_input($_GET["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)){
    $nameErr = "Only letters and white space allowed"; 
    }
}//end else

/*
After some light googling, I don't think I am going to be able to fine tune the
adresss validation any more than the validation preformed on the special instructions
text area. As a result the if else block for both will be identical with regards to the
tests preformed on it.
*/

if (empty($_GET["address"])) {
    $addrErr = "";
  } else {
    $address = test_input($_GET["address"]);
}//end else

/*
Sine a city name is treated the same way as a name of a person I used the same tests
preformed in the name if else block. As a result only the names of the varaibles have changed.
*/
if (empty($_GET["city"])) {
    $cityErr = "Name is required";
} else {
    $city = test_input($_GET["city"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$city)){
    $cityErr = "Only letters and white space allowed"; 
    }
}//end else

/*
This is an if else block that is seeing if the email passed in the form is okay. In my last block
comment I mentiond the use of a php5 static variable to check the authenticity of the information passed
from the form. Here they are validating the same way I did in the origional version of this document.
I am think that they just wanted to give an example of both methods of validation. Or perhaps the way I was
validating previously had an un-descovered error in it.
*/
if (empty($_GET["email"])) {
    $emailErr = "Email is required";
} else {
    $email = test_input($_GET["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format"; 
    }
}//end else

/*
The phone number is going to be tested diffrently as everything else, however the way the 
tests are going to be performed will be the same.
*/
if (empty($_GET["phone"])) {
    $phoneErr = "Name is required";
} else {
    $phone = test_input($_GET["phone"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[0-9]*$/",$phone)){
    $phoneErr = "Only letters and white space allowed"; 
    }
}//end else

/*
This if else block does loose validation, since it is a textArea. When or if I do choose to set
up a dataBase to store the information, I would have to declare alot of memory. To avoid doing this
I might limit the number of characters that can be entered into this portion of the form.
*/
if (empty($_GET["instructions"])) {
    $instructions = "";
  } else {
    $instructions = test_input($_GET["instructions"]);
}//end else


/*
The values for the raido, dropDown, and checkBoxes are all pre-defined. Therefor the only validation
that needs to be done is to check if is has a value or not.
*/
if(empty($_GET["crust"])){
    $crustErr = "A crust type is required";
}else{
   $crust = $_GET["crust"];
}//end esle


if(empty($_GET["size"])){
    $sizeErr = "A size is required";
}else{
   $size = $_GET["size"];
}//end esle


if(empty($_GET["toppings"])){
    $toppingsErr = "A topping is required";
}else{
   $toppings = $_GET["toppings"];
}//end esle

/*
Untill I am done developing this php page, the user will be redirected to a standered
html page. I used the exit command just becuse that is what the php5 doucmentation showed. It
also showed when redirecting a user using the header command you have to pass it a string with
the word location with the l capitlized and a collin after it. I might look into this futher in the
documentation as to why this is a requirement to using this commmand in the mannor that I did.
*/

$errHTML = <<<HTML
<!DOCTYPE html>
<html>
<head>
   <!--
      JavaScript Hands-On Project

      Author: Colin Hoffman
   -->
   <meta charset="utf-8" />
   <meta id="viewport" content="width=device-width, initial-scale=1.0">
   <title>JavaScript Hands-On Project</title>
   <link rel="stylesheet" href="../css/styles.css" />
</head>

<body>
 
  <!-- BEGIN HEAD -->
   <header>
      <h1>
         JavaScript Hands-On Project
      </h1>
   </header>
	<!-- END HEAD -->
  
   <section>
     
      <h2>Pizza Order Form</h2>
      
      
      <h3>Oh no... We Have an issue</h3>
      <p>There was a few errors in your form. You can click <a href="index.html"><span>here</span></a> to try agian.</p>
     <h4>List of Errors</h4>
     <ul>
         <li>$nameErr</li>
         <li>$addrErr</li>
         <li>$cityErr</li>
         <li>$emailErr</li>
         <li>$phoneErr</li>
         <li>$crustErr</li>
         <li>$sizeErr</li>
         <li>$toppingsErr</li>
     </ul>
   </section>
</body>
</html>
HTML;


if($nameErr == "" && $addrErr == "" && $cityErr == "" && $emailErr == "" && $phoneErr == "" && $crustErr == "" && $sizeErr == "" && $toppingsErr == ""){
	
	$messege = "Your name:\t" . $name . "\nAddress:\t" . $address . "\nCity:\t" . $city . "\nEmail:\t" . $email . "\nPhone Number:\t" . $phone . "\nCrust Type:\t" . $crust . "\nSize:\t" . $size . "\nToppings:\t" . $toppings . "\nMessege:\t" . $instructions;
	
	mail($email, $subject, $messege);
	
	header("Location: http://bwm350.webandinteractivemedia.courses/orderForm/orderComplete.html");
    
    //Makeing sure any code that might be below does not get executed when user is redirected
    //exit;
}else{
    echo($errHTML);
}


?>