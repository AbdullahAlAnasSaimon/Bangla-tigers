let selectBtns = document.querySelectorAll('.select-btn');

for(let selectAllBtn of selectBtns){
  selectAllBtn.addEventListener('click', function(){
    const nameTitle = document.querySelector('.name-title');
    console.log(nameTitle);
  })
}




