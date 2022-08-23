function myFunction(btnElement, titleElement){
  const selectBtn = document.getElementById(btnElement);
  selectBtn.addEventListener('click', function clickF(){
    const nameTitle1 = document.getElementById(titleElement);
    const listItems = document.getElementById('list-items');

  if(listItems.children.length < 5){
    const li = document.createElement('li');
    li.innerText = nameTitle1.innerText;
    li.classList.add('list-decimal', 'my-2');
    listItems.appendChild(li);

    selectBtn.setAttribute('disabled', '');
    selectBtn.style.backgroundColor = 'gray';
    selectBtn.style.color = '#e8e8e8';
    selectBtn.innerText = "SELECTED";
  }
  else if(listItems.children.length === 6){
    return;
  }
  else{
    window.alert("Your Team Filled Up");
  }
})
}

myFunction('select-btn-1', 'name-title-1');
myFunction('select-btn-2', 'name-title-2');
myFunction('select-btn-3', 'name-title-3');
myFunction('select-btn-4', 'name-title-4');
myFunction('select-btn-5', 'name-title-5');
myFunction('select-btn-6', 'name-title-6');
myFunction('select-btn-7', 'name-title-7');
myFunction('select-btn-8', 'name-title-8');
myFunction('select-btn-9', 'name-title-9');


