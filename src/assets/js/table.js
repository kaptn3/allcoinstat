document.addEventListener("DOMContentLoaded", function(event){
  document.onmouseover = function (e) {
    if (e.target.nodeName === 'TH') {
      let data = e.target.parentElement.parentElement.parentElement.dataset.table;
      let table = document.querySelector('[data-table=' + data + ']');
      let column = table.querySelectorAll('td.' + e.target.className);
      for (let i = 0; i < column.length; i++) {
        column[i].classList.add('td-hover');
      }
    }
  }
  document.onmouseout = function (e) { 
    if (e.target.nodeName === 'TH') {
      let data = e.target.parentElement.parentElement.parentElement.dataset.table;
      let table = document.querySelector('[data-table=' + data + ']');
      let column = table.querySelectorAll('td.' + e.target.className);
      for (let i = 0; i < column.length; i++) {
        column[i].classList.remove('td-hover');
      }
    }
  }
});