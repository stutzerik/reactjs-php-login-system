<?php

//Call API header
require_once '../config/request_config.php';

unset($_SESSION['username']);
unset($_SESSION['loggedIn']);

session_destroy();

exit;

?>