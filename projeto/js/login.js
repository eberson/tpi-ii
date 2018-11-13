$(function(){
    var usrTextField = $("input[name=usr]"); //através do JQuery pegamos, na pagina, um input cujo name seja usr
    var pwdTextField = $("input[name=pwd]");
    
    $('button[type="submit"]').click(function(e) {
        e.preventDefault();

        if (usrTextField.val() != "" && pwdTextField.val() != "") {
            
            $.post("php/login.php", {
                "username": usrTextField.val(),
                "password": pwdTextField.val()
            }, function(data){
                if (data.status == "fail"){
                    $("#output").removeClass(' alert alert-success');
                    $("#output").addClass("alert alert-danger animated fadeInUp").html(data.message); 
                    return;
                }
                
                $("#output").removeClass(' alert alert-danger');
                $("#output").addClass("alert alert-success animated fadeInUp")
                            .html("Seja bem vindo, " + "<span style='text-transform:uppercase'>" + data.user + "</span>");

                $("input").css({ "height":"0", "padding":"0", "margin":"0", "opacity":"0" });

                $('button[type="submit"]').html("Continue").removeClass("btn-info").addClass("btn-default").click(function(){
                    $("input").css({ "height":"auto", "padding":"10px", "opacity":"1"}).val("");
                });

                $(".avatar").css({"background-image": "url('" + data.avatar + "')"});
            }, "json");
        } else {
            //remove success mesage replaced with error message
            $("#output").removeClass(' alert alert-success');
            $("#output").addClass("alert alert-danger animated fadeInUp").html("informe um usuário e uma senha ");
        }
    });
});
