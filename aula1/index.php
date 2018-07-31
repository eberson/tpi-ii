<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Primeira Página em PHP</title>
    </head>

    <body>
        Olá eu sou o PHP, seu amiguinho.... <br />

        <input type="text" placeholder="input" />

        <div>
            <?php
                $texto = "Este é um texto.... badum... <br />";
                print "este é um texto junto ao outro $texto";

                $texto = 171;

                print "o valor atual é: $texto";
            ?>
        </div>
    </body>
</html>