function zeruj() {
    document.getElementById("opis").innerHTML = "";
}

function hide() {
    document.getElementById("sukces").style = "top: -200px;";
    document.getElementById("login").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("tytul").value = "";
    document.getElementById("opis").value = "";
    document.getElementById("start-data").value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    zeruj();
});


        function walidacja() {
            var check0 = 0;
            var check1 = 0;
            var check2 = 0;
            var check3 = 0;
            var check4 = 0;
            var check5 = 0;

            let login = document.getElementById("login").value;
            let email = document.getElementById("email").value;
            let telefon = document.getElementById("telefon").value;
            let tytul = document.getElementById("tytul").value;
            let opis = document.getElementById("opis").value;
            let data = document.getElementById("start-data").value;

          
                        
            if ((opis.length >= 1) && (opis.length <= 600)) {
                document.getElementById("opis-pomoc").innerHTML = "";
                document.getElementById("opis-pomoc").style = "color: rgb(47, 228, 11);";
                document.getElementById("opis-help").innerHTML = "<b>✓</b>";
                document.getElementById("opis-help").style = "border-color: rgb(47, 228, 11); background-color: rgb(47, 228, 11);";
                check0 = 1;
            } else {
                if (opis.length < 1) {
                    document.getElementById("opis-pomoc").innerHTML = "<b>Opis nie może pozostać pusty</b>";
                } else {
                    document.getElementById("opis-pomoc").innerHTML = "<b>Opis może zawierać max 600 znaków</b>";
                }
                document.getElementById("opis-pomoc").style = "color:orangered";
                document.getElementById("opis-help").innerHTML = "<b>✗</b>";
                document.getElementById("opis-help").style = "border-color:orangered; background-color:orangered;";
                check0 = 0;
            }

            if (login.length < 2) {
                document.getElementById("login-pomoc").innerHTML = "<b>Napisz co najmniej 2 znaki</b>";
                document.getElementById("login-pomoc").style = "color:orangered";
                document.getElementById("login-help").innerHTML = "<b>✗</b>";
                document.getElementById("login-help").style = "border-color:orangered; background-color:orangered;";
                check1 = 0;
            } else {
                document.getElementById("login-pomoc").innerHTML = "";
                document.getElementById("login-pomoc").style = "color: rgb(47, 228, 11);";
                document.getElementById("login-help").innerHTML = "<b>✓</b>";
                document.getElementById("login-help").style = "border-color: rgb(47, 228, 11); background-color: rgb(47, 228, 11);";
                check1 = 1;
            }

            var today = new Date();
            var date_from = document.getElementById("start-data").value;
            date_from = new Date(date_from)

            if (today >= date_from) {
                document.getElementById("data-pomoc").innerHTML = "<b>Wybierz datę z przyszłości</b>";
                document.getElementById("data-pomoc").style = "color:orangered";
                document.getElementById("data-help").innerHTML = "<b>✗</b>";
                document.getElementById("data-help").style = "border-color:orangered; background-color:orangered;";
                check5 = 0;
            } else {
                document.getElementById("data-pomoc").innerHTML = "";
                document.getElementById("data-pomoc").style = "color: rgb(47, 228, 11);";
                document.getElementById("data-help").innerHTML = "<b>✓</b>";
                document.getElementById("data-help").style = "border-color: rgb(47, 228, 11); background-color: rgb(47, 228, 11);";
                check5 = 1;
            }


            
            if ((tytul.length >= 1) && (tytul.length <= 100)) {
                document.getElementById("tytul-pomoc").innerHTML = "";
                document.getElementById("tytul-pomoc").style = "color: rgb(47, 228, 11);";
                document.getElementById("tytul-help").innerHTML = "<b>✓</b>";
                document.getElementById("tytul-help").style = "border-color: rgb(47, 228, 11); background-color: rgb(47, 228, 11);";
                check2 = 1;
            } else {
                if (tytul.length < 1) {
                    document.getElementById("tytul-pomoc").innerHTML = "<b>Tytuł nie może pozostać pusty</b>";
                    document.getElementById("tytul-pomoc").style = "color:orangered";
                    document.getElementById("tytul-help").innerHTML = "<b>✗</b>";
                    document.getElementById("tytul-help").style = "border-color:orangered; background-color:orangered;";
                    check2 = 0;
                } else {
                    document.getElementById("tytul-pomoc").innerHTML = "<b>Tytuł może zawierać max 100 znaków</b>";
                    document.getElementById("tytul-pomoc").style = "color:orangered";
                    document.getElementById("tytul-help").innerHTML = "<b>✗</b>";
                    document.getElementById("tytul-help").style = "border-color:orangered; background-color:orangered;";
                    check2 = 0;
                }
            }

            if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/.test(telefon)) {
                document.getElementById("telefon-pomoc").innerHTML = "<b>Spróbuj w formacie XXX-XXX-XXX lub XXXYYYXXX</b>";
                document.getElementById("telefon-pomoc").style = "color:orangered";
                document.getElementById("telefon-help").innerHTML = "<b>✗</b>";
                document.getElementById("telefon-help").style = "border-color:orangered; background-color:orangered;";
                check3 = 0;
            } else {
                document.getElementById("telefon-pomoc").innerHTML = "";
                document.getElementById("telefon-pomoc").style = "color: rgb(47, 228, 11);";
                document.getElementById("telefon-help").innerHTML = "<b>✓</b>";
                document.getElementById("telefon-help").style = "border-color: rgb(47, 228, 11); background-color: rgb(47, 228, 11);";
                check3 = 1;
            }

            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                document.getElementById("email-pomoc").innerHTML = "<b>Niepoprawny adres email</b>";
                document.getElementById("email-pomoc").style = "color:orangered";
                document.getElementById("email-help").innerHTML = "<b>✗</b>";
                document.getElementById("email-help").style = "border-color:orangered; background-color:orangered;";
                check4 = 0;
            } else {
                document.getElementById("email-pomoc").innerHTML = "";
                document.getElementById("email-pomoc").style = "color: rgb(47, 228, 11);";
                document.getElementById("email-help").innerHTML = "<b>✓</b>";
                document.getElementById("email-help").style = "border-color: rgb(47, 228, 11); background-color: rgb(47, 228, 11);";
                check4 = 1;
            }


            if (check1 == 1 && check2 == 1 && check3 == 1 && check4 == 1 && check5 == 1 && check0 == 1) {
                //document.getElementById('formularz-form').submit();
                console.log("DODALO");
                document.getElementById("sukces").style = "top: calc(50% - 75px);";
                document.getElementById("schowaj").focus();
                return true;
            }

            console.log("ERROR");
            return false;
        }


