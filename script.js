function clickedEvent(){
  const dropup=document.querySelector('.dropup-content');
  //one hour to remove a dot. from 'show' fucking hell thank you vs code I'm grateful
  dropup.classList.toggle('show');
}
const button=document.querySelector('.dropbtn');
button.addEventListener('click',clickedEvent);