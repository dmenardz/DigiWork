// drop down menu
const nav = document.querySelector('.nav__links')
const openNavBtn = document.querySelector('#nav__toggle-open')
const closeNavBtn = document.querySelector('#nav__toggle-close')

// open nav
const openNav = ()=>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click',openNav)

// close nav
const closeNav = ()=>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click',closeNav)

// show and hide faqs

const faqs = document.querySelectorAll('.faq');
const plusIcon ='uil uil-plus';
const minusIcon ='uil uil-minus';

faqs.forEach(faq =>{
faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
    //icon chage
    const icon =faq.querySelector('.faq__icon i');
    if(icon.className === plusIcon){
        icon.className = minusIcon;
    }else
    {
        icon.className = plusIcon;
    }
})
})

//add background style to navbar
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

// OPEN AND CLOSE FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function openFormLogin() {
    document.getElementById("showLogin").style.display = "block";
  }
  
  function closeFormLogin() {
    document.getElementById("showLogin").style.display = "none";
  }
  function openFormReg() {
    document.getElementById("showRegister").style.display = "block";
  }
  
  function closeFormReg() {
    document.getElementById("showRegister").style.display = "none";
  }