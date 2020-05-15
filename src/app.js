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
//Form
const NameForm = () => {
    const NAME_REGEX = /^[A-z\sa-z\sA-Z]{3,30}$/;        
    let         name = document.querySelector('#form-contact-footer').querySelector('input[name="nombre"]');
        if(!NAME_REGEX.test(name.value)){            
            name.classList.add('border')
            name.classList.add('border-danger')
            return false
        }else{
            name.classList.remove('border-danger')
            name.classList.add('border-success')    
            return true
        }
}

const ValidateEmail = (correo) => {
    const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(!EMAIL_REGEX.test(correo.value)){
        correo.classList.add('border')
        correo.classList.add('border-danger')
        return false
    }else{
        correo.classList.remove('border-danger')
        correo.classList.add('border-success')    
        return true
    }
}

const ValidateNumberForm = () => {
    const REGEX_NUMBER = /^[0-9]{8,10}$/;
    let form = document.querySelector('#form-contact-footer'),
        number = form.querySelector('input[name="numero"]');
        if(!REGEX_NUMBER.test(number.value)){
            number.classList.add('border')
            number.classList.add('border-danger')
            return false
        }else{
            number.classList.remove('border-danger')
            number.classList.add('border-success')    
            return true
        }
}

const MesaggeArea = () => {
    const REGEX_TEXTAREA = /^[\WA-z a-z A-Z]{10,100}$/
        textArea = document.querySelector('#exampleFormControlTextarea1');
    if(!REGEX_TEXTAREA.test(textArea.value)){
        textArea.classList.add('border')
        textArea.classList.add('border-danger')
        return false
    }else{
        textArea.classList.remove('border-danger')
        textArea.classList.add('border-success')    
        return true
    }
}

const validate = () => {    
    let btn = document.querySelector('#btn-submit-form'),
        flag = true,
        correo = document.querySelector('#form-contact-footer').querySelector('input[name="correo"]');
    if(!NameForm()){
        flag  = false
    }
    if(!ValidateEmail(correo)){
        flag  = false
    }
    if(!ValidateNumberForm()){
        flag  = false
    }
    if(!MesaggeArea()){
        flag  = false
    }

    if(flag){
        btn.classList.remove('btn-danger')
        btn.classList.add('btn-success')
        btn.disabled = false;
    }else{        
        btn.disabled = true;
        btn.classList.remove('btn-primary')
        btn.classList.add('btn-danger')

    }
}

const AjaxSend = (e) => {    
    e.preventDefault();
    let form         = document.querySelector('#form-contact-footer'),
        formInputs   = form.querySelectorAll('input'),
        formTextArea = form.querySelectorAll('textarea'),
        final        = [...formInputs, ...formTextArea],
        bodyCreate   = { nombre: '', correo: '', numero: '', mensaje: ''},
        txt          = document.querySelector('.txt-form-alerts').firstElementChild;  
        final.forEach(item => {bodyCreate[item.name] = item.value});
        const BODY_AJAX = JSON.stringify(bodyCreate),
              BASE_URL_JS = window.location.origin,
              url  = `${BASE_URL_JS}/a/wp-content/themes/woocomercetheme/src/mailer/checkAjax.php`;            
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application-json',
                'Accept': 'applications-json'
            },
            body: BODY_AJAX
        })
        .then( first => {
            if(first.ok){
                txt.innerHTML = '¡Gracias! nos pondremos en contacto contigo pronto.'
            }else{
                txt.innerHTML = 'Upps, creo que algo salío mal :c, intenta de nuevo más tarde.'
            }
        })

        form.reset();
}

const ValidateFormCompetely = () => {
    let form = document.querySelector('#form-contact-footer');
        form.addEventListener('keyup', validate);
        form.addEventListener('submit', AjaxSend, false);
}

const RemoveCol = () => {
    let colsSet = document.querySelector('.col2-set'),
        col1    = document.querySelector('.col-1'),
        col2    = document.querySelector('.col-2');
        JoinCols = [colsSet,col1,col2];
        JoinCols.forEach(item => {
            let classCss = item.getAttribute('class');
                item.classList.remove(classCss)
        })

}

const AddFormControlAndBesUXregister = () => {
    let inputs = Array.from(document.querySelector('.register').querySelectorAll('input')),    
        cols1 = document.querySelector('.col-1'),
        cols2 = document.querySelector('.col-2'),
        allCols = [cols1,cols2];     
        allCols.forEach(item => {
            item.parentElement.classList.add('row');
            item.classList = 'col-12 col-md-6';
        })
    inputs.forEach(item => {
        item.parentElement.classList.add('form-group')
        if(item.parentElement.parentElement.tagName === 'P' , item.parentElement.parentElement.tagName){            
            item.parentElement.parentElement.classList.add('d-flex', 'flex-column');
        }
        if( item.getAttribute('type') === 'text' || item.getAttribute('type') === 'email' || item.getAttribute('type') === 'password'){
                item.classList.add('form-control');
        }
    })
}

const ValidateUser = () => {
    let user = document.querySelector('.woocommerce-form-register').querySelector('input[name="username"]'),
        regexUser = /^[\w]{2,20}$/;
    if(regexUser.test(user.value)){
        user.classList.remove('border-danger')
        user.classList.add('border', 'border-success');
        return true
    }else{
        user.classList.remove('border-success')
        user.classList.add('border', 'border-danger')
    }
    return false
}

const ValidatePassword = () => {
    let regex = /^[\w\W]{12,30}$/,
        pass = document.querySelector('.woocommerce-form-register').querySelector('input[name="password"]')
        if(!regex.test(pass.value)){
            pass.classList.remove('border-success')
            pass.classList.add('border', 'border-danger')
            return false
        }
        pass.classList.remove('border-danger')
        pass.classList.add('border', 'border-success');
        return true
}

const CompleteValidate = () => {    
    let flag = true,
        form = document.querySelector('.woocommerce-form-register'),
        btn = form.querySelector('button[type="submit"]'),
        correo = form.querySelector('#reg_email');

    if(!ValidateUser()){
        flag = false
    }

    if(!ValidateEmail(correo)){
        flag = false
    }

    if(!ValidatePassword()){
        flag = false
    }

    if(flag){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    }

}

const ValidateForRegister = () => {
    document.querySelector('.woocommerce-form-register').addEventListener('change', CompleteValidate)
    document.querySelector('.woocommerce-form-register').addEventListener('keyup', CompleteValidate)
    document.querySelector('.woocommerce-form-register').addEventListener('focusin', CompleteValidate)
    document.querySelector('.woocommerce-form-register').addEventListener('focusout', CompleteValidate)
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
        RemoveCol()
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
    if(document.querySelector('#form-contact-footer')){
        ValidateFormCompetely()
    }
    if(document.querySelector('.register')){
        btn = document.querySelector('.woocommerce-form-register').querySelector('button[type="submit"]');
        btn.disabled = true
        AddFormControlAndBesUXregister()
        ValidateForRegister()
    }
    //   
//End
});