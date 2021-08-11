$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();

    const userName = $("#username").val().trim();
    const userPhone = $("#userphone").val().trim();
    const userEmail = $("#useremail").val().trim();
    const pageName = $("#pageName").val().trim();

    if (userName == "") {
      $("#error").text("Запишите имя").addClass("alert-danger");
      return false;
    } else if (userPhone == "") {
      $("#error").text("Запишите номер телефона").addClass("alert-danger");
      return false;
    } else if (userEmail == "") {
      $("#error").text("Запишите email").addClass("alert-danger");
      return false;
    }

    $("#error").text("").removeClass("alert-danger");

    $.ajax({
      url: "../tg/tg.php",
      type: "POST",
      cache: false,
      data: {
        name: userName,
        phone: userPhone,
        email: userEmail,
        pageName: pageName,
      },
      dataType: "html",
      beforeSend: function () {
        $("#send")
          .append('<img src="../img/loader.gif">')
          .prop("disabled", true);
      },
      success: function (data) {
        if (data == false) {
          $("#error").text("Сообщение не отправлено").addClass("alert-danger");
        } else {
          $("#error")
            .text("Сообщение успешно отправлено")
            .addClass("alert-success");
        }
        setTimeout(function () {
          $("#form").trigger("reset");
          $("#error").text("").removeClass("alert-danger alert-success");
          $("#send img").remove();
          $("#send").prop("disabled", false);
        }, 2000);
      },
    });
  });
});
