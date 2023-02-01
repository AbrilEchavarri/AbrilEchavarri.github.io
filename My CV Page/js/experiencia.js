(function(){
    const titleExperiencia = [...document.querySelectorAll('.experiencia__title')];
    console.log(titleExperiencia);
    
    
    titleExperiencia.forEach(experiencia =>{
        experiencia.addEventListener('click', ()=>{
            let height = 0;
            let answer = experiencia.nextElementSibling;
            let addPadding = experiencia.parentElement.parentElement;

            addPadding.classList.toggle('experiencia__padding--add');
            
            experiencia.children[0].classList.toggle('experiencia__arrow--rotate');
           
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    })

})();