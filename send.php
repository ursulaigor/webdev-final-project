<?php
  $to = "ursulaigor@gmail.com" ;    
  $message = $_POST['message'] ;
  $from = $_POST['email'];
  $headers =  "From: ".$_POST['email'];
  $result= mail( $to, "Mail from ".$from, $message, $headers);
  if ($result){
    header("Location: success.html");
  }else{
    header("Location: error.html");
  }
?>
