const changeBootstrap = () => {
    let form = document.querySelector('#customer_details').children,
        kids = form[0].getElementsByClassName('woocommerce-billing-fields__field-wrapper')[0].children;
        console.log(kids.length);
        for(let a = 0; a < kids.length; a++){
            kids[a].classList.add('form-group')
            let input = kids[a].children;
            console.log(input[1].getElementsByTagName('input'))
            // if(){
                
            // }
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
    //   
//End
});