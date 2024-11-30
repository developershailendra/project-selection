const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.querySelector('.click-show').style.display = 'none';
    });
    button.classList.add('active');
    button.querySelector('.click-show').style.display = 'block';
  });
});

