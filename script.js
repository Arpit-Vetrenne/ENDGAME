//------------------------------------------------ ENDGAME -------------------------------------------------------

let score = 0
cross = true;
audio = new Audio("Sounds/JUMP.mp3");
code = 116
let gover
let highScore = 0
m = 0
let w = 1
let el
let scora

// High Score At Local storage _________________________________________

if (localStorage.getItem("played") == undefined) {
    localStorage.setItem("highScore", 10)
}
setTimeout(() => {
    highScore = localStorage.getItem("highScore")
}, 70);
setTimeout(() => {
    localStorage.setItem("highScore", highScore)
}, 200);

// Keyboard Button Events________________________________________________________

document.onkeydown = function(e) {
    try {
        // console.log(e.keyCode)
        if (e.keyCode == 32 || e.keyCode == 38) {
            jump()
        } else if (e.keyCode == 39) {
            right()
        } else if (e.keyCode == 37) {
            left()

        } else if (e.keyCode == code) {
            attackF()
        }
    } catch (eror) {}
}


// _____________________________FUNCTIONS OF MOVEMENT________________________________________

// JUMP

function jump() {
    ironMan = document.querySelector('.hero')
    ironMan.classList.add("animateIronMan");
    ironx = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('left'));

    setTimeout(() => {
        try {
            if (ironMan.style.transform == "scaleX(-1)") {
                ironMan.style.left = ironx - 30 + "px";
            } else {
                ironMan.style.left = ironx + 30 + "px";
            }
        } catch (er) {}
    }, 300);

    setTimeout(() => {
        try {
            ironMan.classList.remove("animateIronMan")
        } catch (err) {}
    }, 700);
}

// RIGHT

function right() {
    ironMan = document.querySelector('.ironMan')
    ironx = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('left'));
    ironMan.style.left = ironx + 72 + "px";
    $('.ironMan').css("transform", "scaleX(1)")
    $('#attack').css("transform", "scaleX(1)")
}

// LEFT

function left() {
    ironMan = document.querySelector('.ironMan')
    ironx = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('left'));
    ironMan.style.left = ironx - 72 + "px"
    $('.ironMan').css("transform", "scaleX(-1)")
    $('#attack').css("transform", "scaleX(-1)")
}


//ATTACK With Keyboard FUNCTION___________________________________________________

function attackF() {
    if (code == 70) {
        attack = document.querySelector('.attack')
        ironMan = document.querySelector('.ironMan');
        ironx = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('left'));
        attack.style.left = ironx + 70 + "px"
        $('.attack').show()
        if (ironMan.style.transform == "scaleX(-1)") {
            $('.attack').css("--boi", ironx - 1800 + "px")
            setTimeout(() => {
                $('.attack').addClass("animateAttackRight")
                setTimeout(() => {
                    $('.attack').removeClass("animateAttackRight")
                    $('.attack').hide()
                }, 1900);

            }, 2);

        } else {

            $('.attack').css("--boi", ironx + 1400 + "px")
            setTimeout(() => {

                $('.attack').addClass("animateAttack")
                setTimeout(() => {
                    $('.attack').removeClass("animateAttack")
                    $('.attack').hide()
                }, 1900);

            }, 2);
        }
    }
}
// _________________________________________________________________________________________________


// Set Interval (Main Event  Taker ever millisecond)________________

setInterval(() => {
    try {

        ironMan = document.querySelector('.ironMan');
        welcome = document.querySelector('.welcome');
        thanos = document.querySelector('.thanos');
        attack = document.querySelector('#attack')

        vAttack = document.querySelector('#vAttack')

        attackx = parseInt(window.getComputedStyle(attack, null).getPropertyValue('left'));
        attacky = parseInt(window.getComputedStyle(attack, null).getPropertyValue('top'));

        ironx = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('left'));
        irony = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('top'));
        ironr = parseInt(window.getComputedStyle(ironMan, null).getPropertyValue('right'));

        thanosx = parseInt(window.getComputedStyle(thanos, null).getPropertyValue('left'));
        thanosy = parseInt(window.getComputedStyle(thanos, null).getPropertyValue('top'));

        vAttackX = parseInt(window.getComputedStyle(vAttack, null).getPropertyValue('left'));
        vAttackY = parseInt(window.getComputedStyle(vAttack, null).getPropertyValue('top'));

        offsetAttackX = Math.abs(attackx - thanosx);
        offsetAttackY = Math.abs(attacky - thanosy);

        offsetX = Math.abs(ironx - thanosx);
        offsetY = Math.abs(irony - thanosy);

        vAttackOffsetX = Math.abs(ironx - vAttackX);
        vAttackOffsetY = Math.abs(irony - vAttackY);

        vAttackAndAttackX = Math.abs(vAttackX - attackx);
        vAttackAndAttackY = Math.abs(vAttackY - attacky);

        // Prevent Iron Man From going Out Of Screen
        if (ironx <= -50) {
            ironMan.style.left = 0 + "px"
        }
        if (ironr <= 100 && ironMan.style.transform == "scaleX(-1)") {

        } else if (ironr <= 100) {

            ironMan.style.left = 94 + "%"
        }

        // Attack Killer ("Kills Thanos and Thanos's Attack ")________________________________
        if (offsetAttackX < 10 && offsetAttackY < 100 || vAttackAndAttackX < 10 && vAttackAndAttackY < 100) {
            $('.attack').hide()
            $('#vAttack').hide()
            score++
            setTimeout(() => {
                updateScore(score);
            }, 350);

            $('.thanos').fadeOut(10)

            setTimeout(() => {
                $('.thanos').fadeToggle(1);
                aniDur = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.05;
                thanos.style.animationDuration = newDur + "s"
            }, 50);
        }

        // On key Code 70 opactity of button ___
        if (code == 70) {
            $('#attackF').css('opacity', '0.7')
        } else {
            $('#attackF').css('opacity', '0.3')
        }

        //Gamo Over Function
        // GAME OVER _______________________________________________________________________

        function gomer() {
            score - 10
            heroe = document.querySelector('.hero');
            heroe.style.left = "100px";
            setTimeout(() => {
                w = 1
            }, 1700);
            audioTheme.pause();
            $('.stone').hide()
            audio.play()
            thanos.classList.remove("animateThanos")
            $('.play').show();
            $('.highScore').show()
            $('.gems').hide()
            setTimeout(() => {
                $('.thanos').hide();
            }, 450);
            $('#playbtn').text('Click To Replay')
            $('#playbtn').css('width', '1px');
            $('#playbtn').css('height', '1px')
            $('.bten').hide();
            $('#playbtn').animate({
                opacity: 1,
                width: '13%',
                height: '10%'

            }, 2500)
            setTimeout(() => {
                $('#mssgs').hide()
            }, 300);
            $('#welcome ').text(`Game over`)
            $('#welcome ').removeClass('welcome')
            $('#welcome ').addClass('gameOver')
            setTimeout(() => {
                $('#mssgs').hide()
                document.getElementById("mssgs").style.display = "none"
            }, 800);

            txt = $('#score').text()
            var numb = txt.match(/\d/g);
            numb = numb.join("");

            displayScore = (parseInt(numb) - 10)

            if (displayScore == -10) {
                displayScore = 0
            } else {
                $('.score').text("Your Score : " + displayScore);
                $('#score').hide();
                $('.rulesDiv').hide();
            }
            $('#vAttack').hide()
            setTimeout(() => {
                localStorage.setItem("played", true)
            }, 80);
            $('.highScore').text(`High Score : ${localStorage.getItem("highScore")}`)

            if (displayScore > 0 && displayScore > localStorage.getItem("highScore")) {
                localStorage.setItem("highScore", displayScore);
                $('.highScore').text(`High Score : ${localStorage.getItem("highScore")}`)
                    // console.log('updated')
            }
            setTimeout(() => {
                if (displayScore == 00 && localStorage.getItem("played") == undefined) {
                    localStorage.setItem("highScore", 00)
                    $('.highScore').text(`High Score : ${localStorage.getItem("highScore")}`)
                }
            }, 70);

            gover = true
            setTimeout(() => {
                $('.hero ').removeClass('ironMan')
                heroe.style.left = "100px";
            }, 1000);

            $('#thanos').css('left', '1000px')
            setTimeout(() => {
                $('.thanos').hide()
                $('.ironMan').hide()
            }, 360);

            setTimeout(() => {
                score = 0;
            }, 1000);
            $('.attack').hide()
        }

        // Game Over Func Apply - 

        if (offsetX < 93 && offsetY < 52 || vAttackOffsetX < 93 && vAttackOffsetY < 52) {
            gomer()

        }
        // Iron Man Jumped Successfully Over Thanos Pass Function ___________________________________________
        else if (offsetX < 145 && cross) {
            score++
            updateScore(score)
            cross = false
            gover = false
            setTimeout(() => {
                cross = true
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.05;
                thanos.style.animationDuration = newDur + "s"
            }, 500);
        }
        //  Winning Screen  -
        else if (scora > 590 && scora < 610 && w == 1 && el == true) {
            console.log(scora)
            console.log("You Won Itttttttttttttttttttttttttttttt")
            gomer()
            document.getElementById('welcome').innerText = "You Won !!"
            document.getElementById('final').innerText = "Your Score : 600"
            document.getElementById('hs').innerText = "Your Score : 600"
            localStorage.setItem("highScore", 600);
            w++
        }

        // MSSG DISPLAY FUNCTION
        if (gover == false) {
            scora = score * 10;

            if (scora % 50 == 0) {
                code = 70;
            } else {
                code = 116;
            }
            if (scora == 0 && $('.bten').css("--phone") == 1 || scora == 50 && $('.bten').css("--phone") == 1 || scora == 100 && $('.bten').css("--phone") == 1) {
                $('#mssgs').show()
                document.getElementById("mssgs").innerText = "Click 🔥 to attack";
                document.getElementById("mssgs").style.paddingLeft = 43 + "vw"
            } else if (scora == 10 && $('.bten').css("--phone") == 1) {
                document.getElementById("mssgs").innerText = "Press ⏫ to Jump";
                document.getElementById("mssgs").style.paddingLeft = 43 + "vw"

            } else if (scora == 0 || scora == 50 || scora == 100) {
                $('#mssgs').show()
                document.getElementById("mssgs").innerText = "Click F to attack";
                document.getElementById("mssgs").style.paddingLeft = 41 + "vw"
            } else if (scora == 10) {
                document.getElementById("mssgs").innerText = "Press SpaceBar to Jump";
                document.getElementById("mssgs").style.paddingLeft = 35 + "vw"

            } else {
                $('#mssgs').hide()
            }
            scora = score * 10

            // INFINITY STONE FUNCTION ______________________________________________________________

            if (scora >= 100) { $("#stone1").show() }
            if (scora >= 200) { $("#stone2").show() }
            if (scora >= 300) { $("#stone3").show() }
            if (scora >= 400) { $("#stone4").show() }
            if (scora >= 500) { $("#stone5").show() }
            if (scora >= 600) { $("#stone6").show() }

            // VILIAN CHANGE AND THANOS ATTACK SPEED FUNCTION________________________________________
            if (scora >= 0 && scora < 100) {
                // console.log("HI LOKI")
                document.querySelector('#thanos').classList.remove('thanoo', 'loki', 'ronan', 'ultron');
                document.querySelector('#thanos').classList.add('loki');
                document.querySelector('#vAttack').classList.remove('lokiAttack', 'thanosAttack', 'ultronAttack', 'ronanAttack');
                document.querySelector('#vAttack').classList.add('lokiAttack');
                $('#vAttack').css("--dur", 4.5 + "s")
            }
            if (scora >= 100 && scora < 200) {
                // console.log("BYE LOKI")
                document.querySelector('#thanos').classList.remove('thanoo', 'loki', 'ronan', 'ultron');
                document.querySelector('#thanos').classList.add('ronan');
                document.querySelector('#vAttack').classList.remove('lokiAttack', 'thanosAttack', 'ultronAttack', 'ronanAttack');
                document.querySelector('#vAttack').classList.add('ronanAttack');
                $('#vAttack').css("--dur", 4.2 + "s")
            }
            if (scora >= 200 && scora < 300) {
                document.querySelector('#thanos').classList.remove('thanoo', 'loki', 'ronan', 'ultron');
                document.querySelector('#thanos').classList.add('ultron');
                document.querySelector('#vAttack').classList.remove('lokiAttack', 'thanosAttack', 'ultronAttack', 'ronanAttack');
                document.querySelector('#vAttack').classList.add('ultronAttack');
                $('#vAttack').css("--dur", 4 + "s")
            }
            if (scora >= 300 && scora < 400) {
                document.querySelector('#thanos').classList.remove('thanoo', 'loki', 'ronan', 'ultron');
                document.querySelector('#thanos').classList.add('ultron');
                document.querySelector('#vAttack').classList.remove('lokiAttack', 'thanosAttack', 'ultronAttack', 'ronanAttack');
                document.querySelector('#vAttack').classList.add('ultronAttack');
                $('#vAttack').css("--dur", 3.7 + "s")

            }
            if (scora >= 400 && scora < 500) {

                document.querySelector('#thanos').classList.remove('thanoo', 'loki', 'ronan', 'ultron');
                document.querySelector('#thanos').classList.add('thanoo');
                document.querySelector('#vAttack').classList.remove('lokiAttack', 'thanosAttack', 'ultronAttack', 'ronanAttack');
                document.querySelector('#vAttack').classList.add('thanosAttack');
                $('#vAttack').css("--dur", 3.4 + "s")

            }
            if (scora >= 500 && scora < 600) {
                el = true
                document.querySelector('#thanos').classList.remove('thanoo', 'loki', 'ronan', 'ultron');
                document.querySelector('#thanos').classList.add('thanoo');
                document.querySelector('#vAttack').classList.remove('lokiAttack', 'thanosAttack', 'ultronAttack', 'ronanAttack');
                document.querySelector('#vAttack').classList.add('thanosAttack');
                $('#vAttack').css("--dur", 3.2 + "s")

            }
        }
        // If Iron Man Jumps over Thanos's Attack the Score ++ 
        if (document.querySelector('#vAttack').style.zIndex == 35) {
            score++
            // console.log("THSHHSJH H ")
            updateScore(score)
            cross = false
            gover = false
            setTimeout(() => {
                cross = true
            }, 1000);
        }
    } catch (error) {}
}, 3);


// Thanos ATTACK ____________________________________________________________________________
setInterval(() => {

    if (gover == false) {
        scora = score * 100
        taj = parseInt(window.getComputedStyle(document.querySelector('.thanos'), null).getPropertyValue('left'))
        if (scora % 30 == 0 && taj >= -5 && taj < 25 && score > 0) {
            document.querySelector('#vAttack').classList.add('vAnimate');
            $('#vAttack').show()
            $('#thanos').hide()
        } else if (scora % 30 != 0 && score > 0) {
            document.querySelector('#vAttack').classList.remove('vAnimate');
            $('#vAttack').hide()
            $('#thanos').show()
        } else if (score == 0) {
            document.querySelector('#vAttack').classList.remove('vAnimate');
            $('#vAttack').hide()
            $('#thanos').show()
        } else if ($('#vAttack').css("--oy") == 100) {
            $('#thanos').show()
        }
    }
}, 50);


// Update Score Function ___________________________

function updateScore(score) {
    document.getElementById("score").innerText = "Score " + " : " + score * 10
}
setInterval(() => {
    // console.log("The score is ", score);
}, 1000);

//Window  Onload_____________________________________________________________

window.onload = function() {
    $('#vAttack').hide()
    $('.rules').hide();
    $('.highScore').hide()
    $('#score').hide()
    $('.thanos').hide();
    $('.gems').hide()
    $('.stone').hide()
    $('.ironMan').hide();
    $('.bten').hide();
    $('.thanos').removeClass("animateThanos")
    $('#mssgs').hide();
    gover = true;
    document.getElementById("mssgs").style.display = "none"

}

// PLAY BUTTON EVENT ___________________________________________________________

playbtn = document.querySelector('#playbtn');
playbtn.addEventListener("click", function() {
    $('.thanos').show();
    if ($('.bten').css("--phone") == 1) {
        $('.bten').show();
    }
    $('.ironMan').show();
    $('.stone').show()
    gover = false
    $('#mssgs').show()
    document.getElementById("mssgs").style.display = "block"
    $('.thanos').addClass("animateThanos");
    audioTheme = new Audio("Sounds/THEME.mp3");
    $('#score').show()
    thanos.style.animationDuration = 4.5 + 's'
    setTimeout(() => {
        audioTheme.play()
    }, 1000);
    $('.play').hide();
    if (document.getElementsByClassName("hero").className != "ironMan") {
        $('.hero').addClass("ironMan");
    }
    $('#score').text("Score  : 0")
    $('.thanos').show()
    $('.ironMan').show()
    heroe = document.querySelector('.hero');
    heroe.style.left = 100 + "px"
    thanos.style.left = 1000 + "px"
    $('.ironMan').css("transform", "none")

})

// RULES AND CONTROL _________________________________________________________________

$('.rule1').click(function() {
    $('.rules1').slideToggle(300);
});
$('.rule2').click(function() {
    $('.rules2').slideToggle(300);
})

// Hero Image Change _________________________________________________________________

$('#IRONMAN').click(() => {
    $(".displayIronMan").attr("src", "images/characters/ironMan.png");
    $('.hero').attr("id", "ironMan")
});

$('#CAPTAIN').click(() => {
    $(".displayIronMan").attr("src", "images/characters/captain.jpg");
    $('.hero').attr("id", "captain");
});

$('#THOR').click(() => {
    $(".displayIronMan").attr("src", "images/Display/thorD.png");
    $('.hero').attr("id", "thor");
});
$('#HULK').click(() => {
    $(".displayIronMan").attr("src", "images/characters/hulk.png");
    $('.hero').attr("id", "hulk");
});
$('#STRANGE').click(() => {
    $(".displayIronMan").attr("src", "images/characters/strange.png");
    $('.hero').attr("id", "strange");
});
$('#SPIDER').click(() => {
    $(".displayIronMan").attr("src", "images/characters/spider.png");
    $('.hero').attr("id", "spider");
});

// Hero Image Change Button _________________________________________________

$('#next').click(() => {

    if (document.getElementById("IRONMAN").className == "opt me") {
        $('#IRONMAN').removeClass('me')
        $('#CAPTAIN').addClass("me");
        document.getElementById("attack").className = "attack captainAttack";

    } else if (document.getElementById("CAPTAIN").className == "opt me") {
        $('#CAPTAIN').removeClass('me')
        $('#THOR').addClass("me");
        document.getElementById("attack").className = "attack thorAttack";
    } else if (document.getElementById("THOR").className == "opt me") {
        $('#THOR').removeClass('me')
        $('#HULK').addClass("me");
        document.getElementById("attack").className = "attack hulkAttack";

    } else if (document.getElementById("HULK").className == "opt me") {
        $('#HULK').removeClass('me')
        $('#STRANGE').addClass("me");
        document.getElementById("attack").className = "attack strangeAttack";;
    } else if (document.getElementById("STRANGE").className == "opt me") {
        $('#STRANGE').removeClass('me')
        $('#SPIDER').addClass("me");
        document.getElementById("attack").className = "attack spiderAttack";;
    } else if (document.getElementById("SPIDER").className == "opt me") {
        $('#SPIDER').removeClass('me')
        $('#IRONMAN').addClass("me");
        document.getElementById("attack").className = "attack ironAttack";
    }
    $('.me').click()

    nxt = document.getElementById("next")
    nxt.innerText = "»»»"
    nxt.style.fontSize = 4.4 + "vh"

});

// Helper a tool________________________________-

function stn() { $(".hero").remove() }


// Phone Orientation (Rotate mssg)__________________________________
setInterval(() => {

    if (screen.availHeight > screen.availWidth) {
        $(".displayIronMan").attr("src", "images/characters/captain.jpg");
        $('.gameContainer').hide()
        $('#h1').show()

    }
    if (screen.availHeight < screen.availWidth) {
        $('.gameContainer').show()
        $('#h1').hide()
    }
}, 100);