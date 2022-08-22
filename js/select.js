
const listItems = document.getElementById('list-items');

function myFunction(btnElement, titleElement){
  const selectBtn = document.getElementById(btnElement);
  selectBtn.addEventListener('click', function(){
  const nameTitle1 = document.getElementById(titleElement);

  if(listItems.children.length < 5){
    const li = document.createElement('li');
    li.innerText = nameTitle1.innerText;
    li.classList.add('list-decimal', 'my-2');
    listItems.appendChild(li);

    selectBtn.setAttribute('disabled', '');
    selectBtn.style.backgroundColor = 'gray';
    selectBtn.style.color = '#e8e8e8';
  }
  else if(listItems.children.length === 6){
    return;
  }
  else{
    window.alert("You can not add more")
  }
})
}

myFunction('select-btn-1', 'name-title-1');
myFunction('select-btn-2', 'name-title-2');
myFunction('select-btn-3', 'name-title-3');
myFunction('select-btn-4', 'name-title-4');
myFunction('select-btn-5', 'name-title-5');
myFunction('select-btn-6', 'name-title-6');
