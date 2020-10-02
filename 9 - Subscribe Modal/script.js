const showModal = document.getElementById('show'); 
const btn = document.getElementById('modal');

btn.addEventListener("click", () => {
    console.log('clicked')
  showModal.style.display = 'flex';
  btn.style.display= 'none';

});

document.getElementById('close').addEventListener('click', () => {
showModal.style.display = 'none';
btn.style.display = 'block'
})
