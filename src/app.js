const categories = document.querySelector('.home-cat')
                    .getElementsByTagName('a');
    for (category of categories){
        category.addEventListener('mouseover', (e) => {
            const aTarget = e.target;
        })
    }