
function CarregarTela() {
    gb_status = '1';
    Interval();
}

function Interval() {
    setInterval(function () {
        if (gb_status == '1') {
            document.getElementById('idevent1').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent1').innerHTML = 'Drop New Colletion @2021'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent1').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent2').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent2').innerHTML = 'Drop New Colletion @2021'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent2').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent3').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent3').innerHTML = 'Boulevard, LA - 1AM'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent3').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent4').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent4').innerHTML = 'Boulevard, LA - 1AM'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent4').style.opacity = '1';
            }, 1000);            

            document.getElementById('point2').style.background = '#ef6262';
            document.getElementById('point1').style.background = '#646464';
            document.getElementById('point3').style.background = '#646464';

            gb_status = '3';
        }
        else if (gb_status == '2') {
            document.getElementById('idevent1').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent1').innerHTML = 'Pop-up @Steven Alan Fillmore';
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent1').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent2').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent2').innerHTML = 'Pop-up @Steven Alan Fillmore';
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent2').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent3').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent3').innerHTML = 'SF - Sat, August 12 / 5-8PM'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent3').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent4').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent4').innerHTML = 'SF - Sat, August 12 / 5-8PM'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent4').style.opacity = '1';
            }, 1000);

            document.getElementById('point1').style.background = '#ef6262';
            document.getElementById('point2').style.background = '#646464';
            document.getElementById('point3').style.background = '#646464';

            gb_status = '1';
        }
        else if (gb_status == '3') {
            document.getElementById('idevent1').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent1').innerHTML = 'Photos #Summer2021';
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent1').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent2').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent2').innerHTML = 'Photos #Summer2021';
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent2').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent3').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent3').innerHTML = 'La Rambla: Barcelona'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent3').style.opacity = '1';
            }, 1000);

            document.getElementById('idevent4').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('idevent4').innerHTML = 'La Rambla: Barcelona'
            }, 1000);
            setTimeout(function () {
                document.getElementById('idevent4').style.opacity = '1';
            }, 1000);

            document.getElementById('point3').style.background = '#ef6262';
            document.getElementById('point2').style.background = '#646464';
            document.getElementById('point1').style.background = '#646464';

            gb_status = '2';
        }

    }, 5000);
}

function ChangeColl(cod) {
    if (cod == '1' || cod == '0') {
        document.getElementById('line2').style.marginLeft = '0px';

        document.getElementById('work').style.fontSize = '14px';
        document.getElementById('work').style.color = 'white';

        document.getElementById('active').style.fontSize = '13px';
        document.getElementById('active').style.color = '#606060';

        document.getElementById('travel').style.fontSize = '13px';
        document.getElementById('travel').style.color = '#606060';
    }
    else if (cod == '2') {
        document.getElementById('line2').style.marginLeft = '50px';

        document.getElementById('work').style.fontSize = '13px';
        document.getElementById('work').style.color = '#606060';

        document.getElementById('active').style.fontSize = '14px';
        document.getElementById('active').style.color = 'white';

        document.getElementById('travel').style.fontSize = '13px';
        document.getElementById('travel').style.color = '#606060';
    }
    else if (cod == '3') {
        document.getElementById('line2').style.marginLeft = '100px';

        document.getElementById('work').style.fontSize = '13px';
        document.getElementById('work').style.color = '#606060';

        document.getElementById('active').style.fontSize = '13px';
        document.getElementById('active').style.color = '#606060';

        document.getElementById('travel').style.fontSize = '14px';
        document.getElementById('travel').style.color = 'white';
    }
}
