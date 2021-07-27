let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.ly1', 3, { y: -450})
    .to('.ly2', 3, { y: -300}, '-=3')
    .fromTo('.bg1', { y : -50 }, { y: 0, duration: 3}, '-=3')
    .to('.contentcs', 3, {top: '0%'}, '-=3')
    .fromTo('.content-images', { opacity : 0 }, { opacity : 1, duration: 3})
    //.fromTo('.text', { opacity : 0 }, { opacity : 1, duration: 3})

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '100%',
    triggerHook: 0,    
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);

function MouseEnter(cod) {
    if (window.innerWidth <= 700){
        if (cod == '1'){
            document.getElementById('idservice').style.opacity = '0';
        }   
        else if (cod == '2'){
            document.getElementById('idcontact').style.opacity = '0';
        }       
    }
}

function MouseExit(cod) {
    if (window.innerWidth <= 700){
        if (cod == '1'){
            document.getElementById('idservice').style.opacity = '1';
        }   
        else if (cod == '2'){
            document.getElementById('idcontact').style.opacity = '1';
        }       
    }
}

function IconsMove(cod, acao) {
    if (acao == 1) {
      if (cod == 1) {
        document.querySelector('#Icon2 i').style.color = '#dadada';
        document.querySelector('#Icon3 i').style.color = "#dadada";
        document.querySelector('#Icon4 i').style.color = "#dadada";
      }
      else if (cod == 2) {
        document.querySelector('#Icon1 i').style.color = "#dadada";
        document.querySelector('#Icon3 i').style.color = "#dadada";
        document.querySelector('#Icon4 i').style.color = "#dadada";
      }
      else if (cod == 3) {
        document.querySelector('#Icon1 i').style.color = "#dadada";
        document.querySelector('#Icon2 i').style.color = "#dadada";
        document.querySelector('#Icon4 i').style.color = "#dadada";
      }
      else if (cod == 4) {
        document.querySelector('#Icon1 i').style.color = "#dadada";
        document.querySelector('#Icon2 i').style.color = "#dadada";
        document.querySelector('#Icon3 i').style.color = "#dadada";
      }
    }
    else {
      document.querySelector('#Icon1 i').style.color = "white";
      document.querySelector('#Icon2 i').style.color = "white";
      document.querySelector('#Icon3 i').style.color = "white";
      document.querySelector('#Icon4 i').style.color = "white";
    }
  }