<?php
    function OpenCon()
     {
     $dbhost = "localhost";
     $dbuser = "websitejan_nl_mirotterdam";
     $dbpass = "Z7MHhf7feXfw";
     $db = "websitejan_nl_mirotterdam";
     $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
     
     return $conn;
     }
     
    function CloseCon($conn)
     {
     $conn -> close();
     }
       
    ?>