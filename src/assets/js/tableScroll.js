module.exports = {
  tableScroll: function () {
    let table = document.querySelector('.table-main');
    let headerTable = document.querySelector('thead');
    let fakeHead = document.querySelector('.mobile-icons__head');
    table.addEventListener("scroll", function() {
      let icons = document.querySelector('.mobile-icons');
      if (table.scrollLeft > 32) {
        icons.style.display = 'block';
        fakeHead.style.paddingBottom = headerTable.clientHeight + 2 + 'px';
        console.log();
      } else {
        icons.style.display = 'none';
      }
    });
  }
}