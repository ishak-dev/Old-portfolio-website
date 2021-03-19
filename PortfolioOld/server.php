<?php 
$servername = "localhost";
$username = "id14565220_user";
$password = "q?5URf74u9[6j25S";
$dbname = "id14565220_ofanzile";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("connection problem: ". $conn->connect_error);

}
if (isset($_POST['submit'])){
    $name = mysqli_real_escape_string($conn,$_POST['name']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $message = mysqli_real_escape_string($conn,$_POST['message']);
    $sql = "INSERT INTO korisnici (username, email, poruka) VALUES ('$name','$email', '$message')";
   if($conn->query($sql) === true){
       $message = "Thanks on your message";
       echo "<script type='text/javascript'>alert('$message');</script>";
    
   }
   else echo "greska";
}

$conn->close();




?>