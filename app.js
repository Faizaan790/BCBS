const navSearch = document.querySelector('.search_Box');
navSearch.addEventListener('click',()=>handleFn('150px'));

navSearch.onblur = ()=>{
    console.log('mouse leave');
    handleFn('50px')
};

navSearch.removeEventListener("mousemove",()=>handleFn('30px')); 
function handleFn(data){
    navSearch.style.width= data;
    navSearch.style.fontWeight = 'normal';
}