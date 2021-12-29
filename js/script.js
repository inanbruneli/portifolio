dark = 'off';

function ChangeFont() {
    alert(screen.width);
    alert(screen.height);

    cod = 1;
    lg = 1;
    Interval();
    language(1);
}

function Interval() {
    setInterval(function () {
        var font = document.getElementById('change-font');
        var img = document.getElementById('imgsvg');
        if (cod == 1) {
            font.style.opacity = '0';
            img.style.marginTop = '100%';
            setTimeout(function () {
                if (lg == 1) {
                    font.innerHTML = 'um desenvolvedor web';
                }
                else{  
                    font.innerHTML = 'a web developer';
                }

                img.src = 'imagens/svg/svg2.svg';
            }, 1500);
            setTimeout(function () {
                font.style.opacity = '1';
                img.style.marginTop = '0';
            }, 1500);
            cod = 2;
        }
        else if (cod == 2) {
            font.style.opacity = '0';
            img.style.marginTop = '100%';
            setTimeout(function () {
                if (lg == 1) {
                    font.innerHTML = 'um amante de café';
                }                        
                else{
                    font.innerHTML = 'a coffe lover';
                }

                img.src = 'imagens/svg/svg4.svg';
            }, 1500);
            setTimeout(function () {
                font.style.opacity = '1';
                img.style.marginTop = '0';
            }, 1500);
            cod = 3;
        }
        else if (cod == 3) {
            font.style.opacity = '0';
            img.style.marginTop = '100%';
            setTimeout(function () {
                font.innerHTML = 'Inan Brunelli';
                img.src = 'imagens/svg/svg1.svg';
            }, 1500);
            setTimeout(function () {
                font.style.opacity = '1';
                img.style.marginTop = '0';
            }, 1500);
            cod = 1;
        }
    }, 7000);
}

function slideRight() {
    if (document.getElementById('slide-container').style.transform == '' || document.getElementById('slide-container').style.transform == 'translateX(0vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-63vw)';
        ChangeDot('1', '2');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-63vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-126vw)';
        ChangeDot('2', '3');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-126vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-189vw)';
        ChangeDot('3', '4');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-189vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-254vw)';
        ChangeDot('4', '5');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-254vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(0vw)';
        ChangeDot('5', '1');
    }
}

function slideLeft() {
    if (document.getElementById('slide-container').style.transform == '' || document.getElementById('slide-container').style.transform == 'translateX(0vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-254vw)';
        ChangeDot('1', '5');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-254vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-189vw)';
        ChangeDot('5', '4');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-189vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-126vw)';
        ChangeDot('4', '3');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-126vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(-63vw)';
        ChangeDot('3', '2');
    }
    else if (document.getElementById('slide-container').style.transform == 'translateX(-63vw)') {
        document.getElementById('slide-container').style.transform = 'translateX(0vw)';
        ChangeDot('2', '1');
    }
}

function ChangeDot(oldd, newd) {
    document.getElementById('dot' + oldd).style.background = 'rgb(218, 218, 218)';
    document.getElementById('dot' + oldd).style.width = '7px';
    document.getElementById('dot' + oldd).style.height = '7px';

    document.getElementById('dot' + newd).style.background = 'rgb(20, 96, 109)';
    document.getElementById('dot' + newd).style.width = '9px';
    document.getElementById('dot' + newd).style.height = '9px';
}

function MouseDark(cod) {
    var descricao;
    if (lg == 1) {
        descricao = 'Modo Escuro';
    }
    else {
        descricao = ' Dark Mode';
    }

    if (cod == 1) {
        document.getElementById('darkmode').style.transform = 'scale(1.1)';
        if (dark == 'on') {
            document.getElementById('darkmode').innerHTML = "<i class='fas fa-lightbulb'></i>" + descricao;
        }
        else {
            document.getElementById('darkmode').innerHTML = "<i class='fas fa-moon'></i>" + descricao;
        }

    }
    else {
        document.getElementById('darkmode').style.transform = 'scale(1.0)';
        if (dark == 'on') {
            document.getElementById('darkmode').innerHTML = "<i class='far fa-lightbulb'></i>" + descricao;
        }
        else {
            document.getElementById('darkmode').innerHTML = "<i class='far fa-moon'></i>" + descricao;
        }
    }

}

function DarkMode() {
    if (dark == 'off') {
        document.getElementById('li-dark1').style.color = 'white';
        document.getElementById('li-dark2').style.color = 'white';
        document.getElementById('li-dark3').style.color = 'white';
        document.getElementById('li-dark4').style.color = 'white';
        document.getElementById('li-dark5').style.color = 'white';
        document.getElementById('darkmode').style.color = 'white';
        document.getElementById('welcome').style.color = 'white';
        document.getElementById('folks').style.color = 'white';
        document.getElementById('build').style.color = 'white';
        document.querySelector('.title-project').style.color = 'white';
        document.getElementById('tlp').style.backgroundColor = 'white';
        document.getElementById('me-img').style.color = 'white';
        document.getElementById('me-text').style.color = 'white';
        document.getElementById('header').style.backgroundColor = '#17171A';
        document.querySelector('body').style.backgroundColor = '#17171A';
        document.querySelector('.contact').style.backgroundImage = 'url(imagens/footer/footer_light.png)';
        document.querySelector('.contact').style.backgroundColor = 'white';
        document.getElementById('name').style.backgroundColor = '#bbb';
        document.getElementById('email').style.backgroundColor = '#bbb';
        document.getElementById('message').style.backgroundColor = '#bbb';
        document.getElementById('tcl').style.backgroundColor = 'black';
        document.getElementById('tc').style.color = 'black';
        document.getElementById('btn-send').style.backgroundColor = 'white';

        document.getElementById('img-html').src = 'imagens/icons/html_black.png';
        document.getElementById('img-css').src = 'imagens/icons/css_black.png';
        document.getElementById('img-js').src = 'imagens/icons/javascript_black.png';
        document.getElementById('img-pg').src = 'imagens/icons/postgres_black.png';
        document.getElementById('img-ps').src = 'imagens/icons/photoshop_black.png';
        document.getElementById('img-il').src = 'imagens/icons/illustrator_black.png';
        document.getElementById('img-git').src = 'imagens/icons/git_black.png';

        document.getElementById('skills-title1').style.color = 'white';
        document.getElementById('skills-title2').style.color = 'white';

        var elList = document.querySelectorAll('.skill-circle');
        elList.forEach(el => el.style.backgroundColor = "white");

        var elListmt = document.querySelectorAll('.skill-maintitle');
        elListmt.forEach(el => el.style.color = "white");

        var elListst = document.querySelectorAll('.skill-secondtitle');
        elListst.forEach(el => el.style.color = "white");

        var elList = document.querySelectorAll('.skill-line');
        elList.forEach(el => el.style.backgroundColor = "white");

        if (lg == 1){
            document.getElementById('idm-pt').style.color = '#17171a';
            document.getElementById('idm-pt').style.background = 'white';
            document.getElementById('idm-pt').style.border = '1px solid #17171a';

            document.getElementById('idm-en').style.color = 'white';
            document.getElementById('idm-en').style.background = '#17171a';
            document.getElementById('idm-en').style.border = '1px solid white';                         
        }
        else{
            document.getElementById('idm-en').style.color = '#17171a';
            document.getElementById('idm-en').style.background = 'white';
            document.getElementById('idm-en').style.border = '1px solid #17171a';

            document.getElementById('idm-pt').style.color = 'white';
            document.getElementById('idm-pt').style.background = '#17171a';
            document.getElementById('idm-pt').style.border = '1px solid white';     
        }            

        dark = 'on';
    }
    else {
        document.getElementById('li-dark1').style.color = 'black';
        document.getElementById('li-dark2').style.color = 'black';
        document.getElementById('li-dark3').style.color = 'black';
        document.getElementById('li-dark4').style.color = 'black';
        document.getElementById('li-dark5').style.color = 'black';
        document.getElementById('darkmode').style.color = 'black';
        document.getElementById('welcome').style.color = 'black';
        document.getElementById('folks').style.color = 'black';
        document.getElementById('build').style.color = 'black';
        document.querySelector('.title-project').style.color = 'black';
        document.getElementById('tlp').style.backgroundColor = 'black';
        document.getElementById('me-img').style.color = 'black';
        document.getElementById('me-text').style.color = 'black';
        document.getElementById('header').style.backgroundColor = 'white';
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('.contact').style.backgroundImage = 'url(imagens/footer/footer_dark.png)';
        document.querySelector('.contact').style.backgroundColor = '#17171a';
        document.getElementById('name').style.backgroundColor = '#292929';
        document.getElementById('email').style.backgroundColor = '#292929';
        document.getElementById('message').style.backgroundColor = '#292929';
        document.getElementById('tcl').style.backgroundColor = 'white';
        document.getElementById('tc').style.color = 'white';
        document.getElementById('btn-send').style.backgroundColor = '#292929';

        document.getElementById('img-html').src = 'imagens/icons/html_white.png';
        document.getElementById('img-css').src = 'imagens/icons/css_white.png';
        document.getElementById('img-js').src = 'imagens/icons/javascript_white.png';
        document.getElementById('img-pg').src = 'imagens/icons/postgres_white.png';
        document.getElementById('img-ps').src = 'imagens/icons/photoshop_white.png';
        document.getElementById('img-il').src = 'imagens/icons/illustrator_white.png';
        document.getElementById('img-git').src = 'imagens/icons/git_white.png';

        document.getElementById('skills-title1').style.color = '#17171a';
        document.getElementById('skills-title2').style.color = '#17171a';

        var elList = document.querySelectorAll('.skill-circle');
        elList.forEach(el => el.style.backgroundColor = "#17171a");

        var elListmt = document.querySelectorAll('.skill-maintitle');
        elListmt.forEach(el => el.style.color = "#17171a");

        var elListst = document.querySelectorAll('.skill-secondtitle');
        elListst.forEach(el => el.style.color = "#17171a");

        var elList = document.querySelectorAll('.skill-line');
        elList.forEach(el => el.style.backgroundColor = "#17171a");

        if (lg == 1){
            document.getElementById('idm-en').style.color = '#17171a';
            document.getElementById('idm-en').style.background = 'white';
            document.getElementById('idm-en').style.border = '1px solid #17171a';

            document.getElementById('idm-pt').style.color = 'white';
            document.getElementById('idm-pt').style.background = '#17171a';
            document.getElementById('idm-pt').style.border = '1px solid transparent';                         
        }
        else{
            document.getElementById('idm-pt').style.color = '#17171a';
            document.getElementById('idm-pt').style.background = 'white';
            document.getElementById('idm-pt').style.border = '1px solid #17171a';

            document.getElementById('idm-en').style.color = 'white';
            document.getElementById('idm-en').style.background = '#17171a';
            document.getElementById('idm-en').style.border = '1px solid transparent';     
        }       


        dark = 'off';
    }

    MouseDark(1);
}

function MouseImg(cod) {
    var _name;
    var i = 1;
    if (cod == 1) {
        _name = '_hover.PNG';
    }
    else {
        _name = '_vf.PNG';
    }

    while (i <= 5) {
        document.getElementById('img' + i).src = 'imagens/slides/projeto' + i + _name;
        i++;
    }
}

function ViewProject(cod) {
    if (cod == 1) {
        window.open('Projetos/Nature Parallax/index.html', '_blank');
    }
    else if (cod == 2) {
        window.open('Projetos/Card Precos/index.html', '_blank');
    }
    else if (cod == 3) {
        window.open('Projetos/Range Hotels/index.html', '_blank');
    }
    else if (cod == 4) {
        window.open('Projetos/backpack/index.html', '_blank');
    }
    else if (cod == 5) {
        window.open('Projetos/Strata/index.html', '_blank');
    }
}

function hoverSend(cod) {
    if (dark == 'off') {
        if (cod == 1) {
            document.getElementById('btn-send').style.border = 'border: 2.5px solid transparent';
            document.getElementById('btn-send').style.background = '#219aaf';
            document.getElementById('btn-send').style.color = '#292929';
        }
        else {
            document.getElementById('btn-send').style.border = 'border: 2.5px solid #3bc0d8';
            document.getElementById('btn-send').style.background = '#292929';
            document.getElementById('btn-send').style.color = '#219aaf';
        }
    }
    else {
        if (cod == 1) {
            document.getElementById('btn-send').style.border = 'border: 2.5px solid transparent';
            document.getElementById('btn-send').style.background = '#219aaf';
            document.getElementById('btn-send').style.color = 'white';
        }
        else {
            document.getElementById('btn-send').style.border = 'border: 2.5px solid #3bc0d8';
            document.getElementById('btn-send').style.background = 'white';
            document.getElementById('btn-send').style.color = '#219aaf';
        }
    }
}

function Scroll(cod) {
    if (cod == '1') {
        window.scrollTo(0, 0);
    }
    else if (cod == '2') {
        window.scrollTo(0, 850);
    }
    else if (cod == '3') {
        window.scrollTo(0, 1700);
    }
    else if (cod == '4') {
        window.scrollTo(0, 2900);
    }
}

function socialLink(cod) {
    if (cod == 1) {
        window.open('https://www.facebook.com/inanbrunelli', '_blank');
    }
    else if (cod == 2) {
        window.open('https://www.linkedin.com/in/inan-brunelli-4b4913b2/', '_blank');
    }
    else if (cod == 3) {
        window.open('https://www.instagram.com/inan.brunelli/', '_blank');
    }
    else if (cod == 4) {
        window.open('https://github.com/inanbruneli', '_blank');
    }            
}

function SkillHover(cod, elem) {
    var scale;
    if (window.innerWidth < 500){
        scale = '1.07';
    }
    else{
        scale = '1.1';
    }


    if (cod == '1') {
        document.getElementById(elem.id).style.transform = 'scale('+scale+')';
    }
    else if (cod == '2') {
        document.getElementById(elem.id).style.transform = 'scale(1)';
    }
}

function downloadResume() {
    if (lg == 1){
        window.open('files/Inan Brunelli Brandao-pt.pdf');
    }
    else{
        window.open('files/Inan Brunelli Brandao-en.pdf');
    }
    
}

function language(start) {
    changeLanguage(lg, start);
    
    if (lg == 1) {
        if (dark  == 'on'){
            document.getElementById('idm-en').style.backgroundColor = 'white';
            document.getElementById('idm-en').style.border = '1px solid #17171a';
            document.getElementById('idm-en').style.color = '#17171a';

            document.getElementById('idm-pt').style.backgroundColor = '#17171a';
            document.getElementById('idm-pt').style.border = '1px solid white';
            document.getElementById('idm-pt').style.color = 'white';
        }
        else{
            document.getElementById('idm-en').style.backgroundColor = '#17171a';
            document.getElementById('idm-en').style.border = '1px solid white';
            document.getElementById('idm-en').style.color = 'white';

            document.getElementById('idm-pt').style.backgroundColor = 'white';
            document.getElementById('idm-pt').style.border = '1px solid #17171a';
            document.getElementById('idm-pt').style.color = '#17171a';
        }

        lg = 2;
    }
    else {
        if (dark == 'on'){
            document.getElementById('idm-pt').style.backgroundColor = 'white';
            document.getElementById('idm-pt').style.border = '1px solid #17171a';
            document.getElementById('idm-pt').style.color = '#17171a';

            document.getElementById('idm-en').style.backgroundColor = '#17171a';
            document.getElementById('idm-en').style.border = '1px solid white';
            document.getElementById('idm-en').style.color = 'white';
        }
        else{
            document.getElementById('idm-pt').style.backgroundColor = '#17171a';
            document.getElementById('idm-pt').style.border = '1px solid white';
            document.getElementById('idm-pt').style.color = 'white';

            document.getElementById('idm-en').style.backgroundColor = 'white';
            document.getElementById('idm-en').style.border = '1px solid #17171a';
            document.getElementById('idm-en').style.color = '#17171a';
        }

        lg = 1;
    }
}

function changeLanguage(cod, start) {
    if (!start) {
        $('.change-language').css('opacity', '0');
    }

    setTimeout(function () {
        if (cod == 1) {
            document.getElementById('li-dark2').innerHTML =
                "About";

            document.getElementById('li-dark3').innerHTML =
                "Skills";

            document.getElementById('li-dark4').innerHTML =
                "Projects";

            document.getElementById('li-dark5').innerHTML =
                "Contact";

            document.getElementById('darkmode').innerHTML =
                "<i class='far fa-moon'></i> Dark Mode";

            document.getElementById('welcome').innerHTML =
                "Welcome to my portifolio website.";

            document.getElementById('folks').innerHTML =
                "Hey folks, I'm <b id='change-font'>Inan Brunelli</b>";

            document.getElementById('build').innerHTML =
                "Building a sucessful product is a challenge. I am highly energetic in user experience design, interfaces and web development.";

            document.getElementById('who').innerHTML =
                "Who's this guy?";

            document.getElementById('front-text').innerHTML =
                "I'm a Front-End/Back-End Developer for CRG Gestão in Americana-São Paulo, Brazil.<br>" +
                "I have serious passion for UI effects, minimalist design and creating intuitive, dynamic user experiences.<br>" +
                "I'm only 2 years into web development, but I program for 4 years.<br>" +
                "I was a programer in delphi software, but then I fall in love with web development and start to make that as my main career.<br> " +
                "<a onclick='Scroll(4);'>Let's make something special.</a>";

            document.getElementById('btn-resume').innerHTML =
                "Download resume " +
                "<i class='fas fa-save'></i>";

            document.getElementById('skills-title1').innerHTML =
                "Skills";

            document.getElementById('skills-title2').innerHTML =
                "More Skills";

            document.getElementById('lg-html').innerHTML =
                "As well as HTML, I learned HTML on my own, using both in my day at my current work.";

            document.getElementById('lg-css').innerHTML =
                "I work with CSS for 2 years, where I have a full mastery of the language," +
                "being able to develop a whole project in a responsive way. I also have knowledge and experience in Bootstrap";

            document.getElementById('lg-js').innerHTML =
                "I have comprehensive knowledge in JavaScript, from the front-end manipulation, " +
                "to the treatment of the data in the back-end.";

            document.getElementById('lg-pg').innerHTML =
                "I have 3 year of experience in postgres, dealing daily with a data base that attend 20 supermarkets, " +
                "where I do upgrades and tratment of the data";

            document.getElementById('lg-ps').innerHTML =
                "I had a professional experience using photoshop for 2 years, " +
                "where I performed tratment and images montage.";

            document.getElementById('lg-il').innerHTML =
                "I have done some works with illustrations using Illustrator." +
                "I also utilize this tool to develope or modify some art/illustration in my personal projects.";

            document.getElementById('lg-git').innerHTML =
                "I use daily github to manage versions, both personal and professional projects";

            document.getElementById('proje').innerHTML =
                "projects";

            document.getElementById('tc').innerHTML =
                "contact";

            document.getElementById('question').innerHTML =
                "Have a question or want to work together?";

            document.getElementById('name').placeholder =
                "Name";

            document.getElementById('email').placeholder =
                "Email";

            document.getElementById('message').placeholder =
                "Your Message";

            document.getElementById('btn-send').innerHTML =
                "Submit";
        }
        else {
            document.getElementById('li-dark2').innerHTML =
                "Sobre";

            document.getElementById('li-dark3').innerHTML =
                "Habilidades";

            document.getElementById('li-dark4').innerHTML =
                "Projetos";

            document.getElementById('li-dark5').innerHTML =
                "Contato";

            document.getElementById('darkmode').innerHTML =
                "<i class='far fa-moon'></i> Modo Escuro";

            document.getElementById('welcome').innerHTML =
                "Bem-vindo ao meu portifolio.";

            document.getElementById('folks').innerHTML =
                "Oi galera, eu sou <b id='change-font'>Inan Brunelli</b>";

            document.getElementById('build').innerHTML =
                "Criar um produto de sucesso é um desafio. Eu sou muito interessado em design de experiência de usuário, interfaces e desenvolvimento web.";

            document.getElementById('who').innerHTML =
                "Quem é esse cara?";

            document.getElementById('front-text').innerHTML =
                "Eu sou um Desenvolvedor Fron-End/Back-End pela CRG Gestão em Americana-São Paulo, Brasil.<br>" +
                "Eu tenho uma seria paixão por efeitos UI, design minimalista e criar intuitovo, experiencia de usuário dinamica.<br>" +
                "Eu estou apenas 2 anos desenvolvendo web, porém faz 4 anos que programo.<br>" +
                "Eu desenvolvia softwares em delphi, mas então eu me apaixonei por desenvolvimento web e começei a fazer este como minha carreira principal.<br> " +
                "<a onclick='Scroll(4);'>Vamos fazer algo especial.</a>";

            document.getElementById('btn-resume').innerHTML =
                "Download curriculo " +
                "<i class='fas fa-save'></i>";

            document.getElementById('skills-title1').innerHTML =
                "Habilidades";

            document.getElementById('skills-title2').innerHTML =
                "Mais Habilidades";

            document.getElementById('lg-html').innerHTML =
                "Assim como CSS, aprendi HTML de forma autônoma, utilizando ambos no meu dia-a-dia de trabalho atualmente.";

            document.getElementById('lg-css').innerHTML =
                "Trabalho com CSS há 2 anos, onde tenho pleno domínio da linguagem," +
                "podendo desenvolver projetos completos de forma responsiva. Também tenho conhecimento e experiência em Bootstrap.";

            document.getElementById('lg-js').innerHTML =
                "Possuo conhecimento abrangente em JavaScript, desde a manipulação do front-end, " +
                "quanto o tratamento de dados no back-end.";

            document.getElementById('lg-pg').innerHTML =
                "Tenho 3 anos de experiência com o postgres, lidando diáriamente com um" +
                "banco de dados que atende 20 supermercados, onde faço upgrades e tratamento de dados diários.";

            document.getElementById('lg-ps').innerHTML =
                "Tive uma experiência profissional utilizando o photoshop por 2 anos, " +
                "onde executava tratamentos e montagens de imagens.";

            document.getElementById('lg-il').innerHTML =
                "Já fiz alguns trabalhos de ilustrações utilizando Illustrator. " +
                "Também utilizo está ferramenta pra desenvolver ou modificar alguma arte/ilutração para meus projetos pessoais.";

            document.getElementById('lg-git').innerHTML =
                "Utilizo diáriamente o github para gerenciar versões, tanto em projetos pessoais como profissionais.";

            document.getElementById('proje').innerHTML =
                "projetos";

            document.getElementById('tc').innerHTML =
                "contato";

            document.getElementById('question').innerHTML =
                "Tem alguma pergunta ou quer trabalhar junto?";

            document.getElementById('name').placeholder =
                "Nome";

            document.getElementById('email').placeholder =
                "Email";

            document.getElementById('message').placeholder =
                "Sua mensagem";

            document.getElementById('btn-send').innerHTML =
                "Enviar";
        }

        $('.change-language').css('opacity', '1');
    }, 500);
}

function mouseLanguage(cod, el){
    if (cod == 1){

    }
    else{

    }
}