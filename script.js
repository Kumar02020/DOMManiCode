function changeBoxColorAndSize() {
    var box = document.querySelector('.box');

    if (box.style.backgroundColor === 'red') {
      box.style.backgroundColor = 'yellow';
      box.style.width = '600px';
      box.style.height = '600px';
    } else {
      box.style.backgroundColor = 'red';
      box.style.width = '300px';
      box.style.height = '300px';
    }
  }