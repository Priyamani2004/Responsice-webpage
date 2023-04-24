window.addEventListener('scroll',function(){
    const header=this.document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 0);
})

function togglemenu(){
    const togglemenu=document.querySelector('.menuToggle');
    togglemenu.classList.toggle('active');
    const navigation=document.querySelector('.navigate');
    navigation.classList.toggle('active')
}