<?php
// Connexion à la base de données
if($_SERVER['HTTP_HOST'] =='localhost'){
  $host = 'localhost';
  $dbname   = 'pannel';
  $username = 'root';
  $password = '';



}else{

  $host = 'sql201.epizy.com';
  $dbname   = 'epiz_23995489_control';
  $username = 'epiz_23995489';
  $password = 'waYgw7BLoSKZS';

}

try {

  // PDO est un objet qui prend 3 parametres minimum
  $connexion = new PDO("mysql:host=".$host.";charset=UTF8;dbname=".$dbname, $username, $password);

} catch (PDOException $error) {

  print "Erreur ! :" . "<br>".$error->getMessage().'<br>';
  die();
}

