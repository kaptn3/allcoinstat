document.addEventListener("DOMContentLoaded", function(event){
  document.onmouseover = function (e) {
    if (e.target.nodeName === 'TH') {
      let column = document.querySelectorAll('td.' + e.target.className);
      for (let i = 0; i < column.length; i++) {
        column[i].classList.add('td-hover');
      }
    }
  }
  document.onmouseout = function (e) { 
    if (e.target.nodeName === 'TH') {
      let column = document.querySelectorAll('td.' + e.target.className);
      for (let i = 0; i < column.length; i++) {
        column[i].classList.remove('td-hover');
      }
    }
  }
});