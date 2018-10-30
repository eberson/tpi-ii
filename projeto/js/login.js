$(function(){
    var usrTextField = $("input[name=usr]"); //através do JQuery pegamos, na pagina, um input cujo name seja usr
    var pwdTextField = $("input[name=pwd]");
    
    $('button[type="submit"]').click(function(e) {
        e.preventDefault();

        //little validation just to check username
        if (usrTextField.val() != "") {
            $.post("backend/login.php", {
                "username": usrTextField.val(),
                "password": pwdTextField.val()
            }, function(data){
                $("#output").addClass("alert alert-success animated fadeInUp")
                            .html("Seja bem vindo " + "<span style='text-transform:uppercase'>" + data.name + "</span>");
                $("#output").removeClass(' alert-danger');    
            }, "json");

            /*
            $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
            $("#output").removeClass(' alert-danger');
            
            $("input").css({
                "height":"0",
                "padding":"0",
                "margin":"0",
                "opacity":"0"
            });

            //change button text 
            $('button[type="submit"]').html("continue").removeClass("btn-info").addClass("btn-default").click(function(){
                $("input").css({
                    "height":"auto",
                    "padding":"10px",
                    "opacity":"1"
                }).val("");
            });
            
            //show avatar
            $(".avatar").css({
                "background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
            });

            */
        } else {
            //remove success mesage replaced with error message
            $("#output").removeClass(' alert alert-success');
            $("#output").addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
        }
    });
});
