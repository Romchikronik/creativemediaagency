<?php
/* session_start(); */
ob_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
if (!empty($_POST['name'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "ФИО отправителя: ";
    }
  }
}
if (!empty($_POST['phone'])){
  if (isset($_POST['phone'])) {
    if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефонный номер отправителя: ";
    }
  }
}
if (!empty($_POST['email'])){
  if (isset($_POST['email'])) {
    if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Адрес почты отправителя: ";
    }
  }
}

if (!empty($_POST['pageName'])){
  if (isset($_POST['pageName'])) {
    if (!empty($_POST['pageName'])){
      $pageName = strip_tags($_POST['pageName']);
  $pageNameFieldset = "Отправлено со страницы: ";
    }
  }
}

$token = "1949696820:AAGn6ow9mMLZPwb63BEIef_ZciwdVwzbpc4";
$chat_id = "-557124702";
$arr = array(
  $pageNameFieldset => $pageName,
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
   /*  $_SESSION['sendsuccess'] = 'Ваша заявка отправлена'; */
    header("Location: /");
    return true;
}
else{
  /* $_SESSION['senderror'] = 'Ваша заявка не отправлена'; */
  header("Location: /");
}
}
?>