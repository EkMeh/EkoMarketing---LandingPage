const openNav=document.getElementById("open-nav");
const Navigation=document.querySelector(".navigation");
const navIcon=document.getElementById('nav-icon');
openNav.addEventListener('click', ()=>{
    Navigation.classList.toggle('active');
    if(navIcon.getAttribute('name')==='menu'){
        navIcon.setAttribute('name', 'close');
    }else{
        navIcon.setAttribute('name','menu');
    }
})

const serviceHeading=document.querySelectorAll('.service-heading');
const serviceInfo=document.querySelectorAll('.service-info');
const serviceIcon=document.querySelectorAll('.service-icon')

serviceHeading.forEach((service, index) => {
    service.addEventListener('click', ()=>{
        serviceInfo[index].classList.toggle('active');
        if(serviceIcon[index].getAttribute('name')==='arrow-down')
        {
            serviceIcon[index].setAttribute('name', 'arrow-up');
        }else{
            serviceIcon[index].setAttribute('name', 'arrow-down');
        }
    })
});

// fugiat 


function Change() {
    const changeValue=document.getElementById('change');
    const values = ['fugiat', 'excepturi', 'Voluptas'];
    let index = 0;

    function updateValue() {
        if (index < values.length) {
            changeValue.textContent = values[index];
            changeValue.style.paddingBottom='5px';
            changeValue.style.borderBottom='3px solid rgba(94, 255, 0, 0.596)';
            index++;
            setTimeout(updateValue, 3000);
        }
    }

    updateValue();
}

Change();