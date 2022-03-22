// 
// 
// XPF-vqRbYXh0P65_p


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_jxe403y',
            'template_1zqzve5',
            event.target,
            'XPF-vqRbYXh0P65_p'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => { 
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarly unavailable. Please contact me durectly on leo.durand87@gmail.com"
            );
        })
}

let isModalOpen= false;
function toggleModal() {
    
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    } 
    isModalOpen = true;
    document.body.classList += " modal--open";
}