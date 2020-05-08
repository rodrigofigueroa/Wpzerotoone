const changeBootstrap = () => {
    let form = document.querySelector('#customer_details').children,
        kids = form[0].getElementsByClassName('woocommerce-billing-fields__field-wrapper')[0].children,
        adittionalFields = document.querySelector('.shipping_address').firstElementChild.children,
        aditionTextArea = document.querySelector('.woocommerce-additional-fields__field-wrapper').firstElementChild,
        concatKidsAFields = [...adittionalFields,...kids];
        aditionTextArea.classList.add('form-group');
        aditionTextArea.children[1].firstElementChild.classList.add('form-control');
        for(let a = 0; a < concatKidsAFields.length - 1; a++){            
            concatKidsAFields[a].classList.add('form-group')
            let input = concatKidsAFields[a].children;
            if(input[1].getElementsByTagName('input')[0]){
                if(input[1].getElementsByTagName('input')[0] !== undefined){
                    if(
                        input[1].getElementsByTagName('input')[0].getAttribute('type') === 'text' ||
                        input[1].getElementsByTagName('input')[0].getAttribute('type') === 'tel'  ||
                        input[1].getElementsByTagName('input')[0].getAttribute('type') === 'email'){
                        input[1].getElementsByTagName('input')[0].classList.add('form-control');                        
                    }
                }
            }
        }
        
}

const loginFunction = () => {
    let form = document.querySelector('.login'),
        formChildren = form.children;
    for(let a= 0; a < formChildren.length - 1; a++ ){
            // console.log(formChildren[a])
            formChildren[a].classList.add('form-group')
            let input = formChildren[a].getElementsByTagName('input');
            if(
                input[0].getAttribute('type') === 'text' ||
                input[0].getAttribute('id') === 'password'){

                input[0].classList.add('form-control');                        
            }
            
            
    }
} 

const ResetPassword = () => {
    let input = document.querySelector('.woocommerce-form-row');
    input.classList.add('form-group')
    input.children[1].classList.add('form-control')

}

const EditAccountInputs = () => {
    let form = document.querySelector('.woocommerce-EditAccountForm').getElementsByTagName('p');        
    for(let a = 0; a < form.length - 1; a++){            
        form[a].classList.add('form-group')
        let input = form[a].children;
        if(input[1]){
            
                if(
                    input[1].getAttribute('type') === 'text'  ||
                    input[1].getAttribute('type') === 'tel'   ||
                    input[1].getAttribute('type') === 'email' ||
                    input[1].getAttribute('type') === 'password'
                    ){
                    input[1].classList.add('form-control');                        
                }else{
                    let spanChild = input[1].children
                    console.log(spanChild)
                    input[1].classList.add('form-group')
                    spanChild[0].classList.add('form-control');                        
                }
        }
    }
}

//start the web site
window.addEventListener('load', () => {
    const bars = document.querySelector('.fa-bars');
    const shadow = document.querySelector('.shadow');
    let menu = document.querySelector('.menu').style;
    let flagMenu = false;
    const menuResponsive = () => {        
        if(flagMenu !== true){
            flagMenu = true
            menu.left = '0px'
            shadow.style.display =  'block';
        }else{
            flagMenu = false
            menu.left = '-1000px'
            shadow.style.display =  'none';
        }
    }
    bars.addEventListener('click', menuResponsive);
    shadow.addEventListener('click', menuResponsive);

    if(document.querySelector('#customer_details')){
        changeBootstrap()
    }
    if(document.querySelector('.login')){
        loginFunction();
    }
    if(document.querySelector('.lost_reset_password')){
        ResetPassword()
    }
    if(document.querySelector('.woocommerce-EditAccountForm')){
        EditAccountInputs();
    }
    //   
//End
});