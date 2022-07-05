const navSlide = () =>{
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener( 'click',()=>{
        nav.classList.toggle('nav-active');

        //animation nav links
        navlinks.forEach((link , index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navlinksFade 0.5s ease forwards ${index / 7 * 1.5}s`;
            }

        });
        burger.classList.toggle('toggle');
    });
}
navSlide();
mudule.export = navSlide();