/*=============== Show menu  ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== Menu show =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== Menu hidden =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=====Scroll animation =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
});

sr.reveal('.home__data,.about__data,.title_style,.cert__title',{})
sr.reveal('button',{delay:400})
sr.reveal('.wrapper,.skills_programing,.skills_language',{interval:600})
sr.reveal('.home__img,.about__img,.card1,.contact_Section,.footer',{delay:400,interval:600})


/*=====Scroll active link =====*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
})
}

window.addEventListener('scroll', scrollActive)

/*=====send messege =====*/

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "qosimjonovhamidilloh@gmail.com",
        Password:"qosimjonov2003",
        To : 'qhamidilloh@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + document.getElementById("name").value
            +"<br> Email : "+document.getElementById("email").value
            +"<br> Message : "+document.getElementById("textarea").value
            
    }).then(
    message => alert("Message Sent Succesfully")
    );
}

/*=====change home h1 =====*/
var typingEffect = new Typed(".typedText",{
    strings : ["Topik Master","Web Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})
