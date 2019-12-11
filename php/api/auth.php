<?php

$_POST =json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)){
   $email = $_POST['email'];
   $password = $_POST['password'];

   if($email == 'admin@gmail.com' && $password == 'admin') {
       ?>
{
   "success": true,
   "secret": " this is the secret no one knows but the admin"
}
   <?php
   } else {
       ?>
       {
           "success": false,
           "message": "invalid credentials"
       }
       <?php
   }
} else {
   ?>
{
   "success": false,
   "message": "Only POST Acces acepted"
}
<?php

}

?>
