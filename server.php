<?php

  $name = $_POST['user-name'];
  $phone = $_POST['user-phone'];
  $prospect = $_POST['user-prospect'];
  $house = $_POST['user-house'];
  $hull = $_POST['user-hull'];
  $flat = $_POST['user-flat'];
  $floor = $_POST['user-floor'];
  $comment = $_POST['comment'];
  $pay = $_POST['pay-option'];

  $callback = $_POST['call-back'];
  $callback = isset($disturb) ? ('Нет') : ('Да');

  $mail = '
  <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <br>
                <li>Улица: ' . $prospect . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус: ' . $hull . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж: ' . $floor . '</li>
                <br>
                <li>Комментарии к заказу: ' . $comment . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>
  ';

  $headers = "From: Бургер-бот <noreply@burger.com>\r\n".
   "MIME-Version: 1.0" . "\r\n" .
   "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('kaloev.eltech@gmail.com', 'Заказ', $mail, $headers);

  $data = [];

  if($mail) {
    $data['status'] = 0;
    $data['message'] = 'Success';
  } else {
    $data['status'] = 1;
    $data['message'] = 'Failure';
  }

  //проверка без ajax
  echo json_encode($data);

 ?>
