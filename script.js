function clickedEvent(){
  const dropup=document.querySelector('.dropup-content');
  dropup.classList.toggle('show');
}
const button=document.querySelector('.dropbtn');
button.addEventListener('click',clickedEvent);
