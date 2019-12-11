<?php

$_POST =json_decode(file_get_contents('php://input'), true);

require 'bdd.php';

$sql = $connexion->prepare("INSERT INTO user(nom, prenom, email, password, matricule, id_grade) VALUES (:nom, :prenom, :email, :password, :matricule, :id_grade)");

// protection des données enregistrées
$sql->bindValue(':nom',$_POST['nom'], PDO::PARAM_INT);
$sql->bindValue(':prenom',$_POST['prenom'], PDO::PARAM_STR);
$sql->bindValue(':email',$_POST['email'], PDO::PARAM_STR);
$sql->bindValue(':password',$_POST['password'] , PDO::PARAM_STR);
$sql->bindValue(':matricule',$_POST['matricule'] , PDO::PARAM_STR);
$sql->bindValue(':id_grade',$_POST['id_grade'] , PDO::PARAM_INT);

$sql->execute();

if($sql) {

  ?>
{
   "success": true,
   "secret": " this is the secret no one knows but the admin"
}
<?php
}
else {
  ?>

{
           "success": false,
           "message": "invalid credentials"
}
<?php
}
?>
