<template>
  <footer class="footer">   
    <div class="container">
      <nav class="footer-menu">
        <ul>
          <li class="footer-menu__copyright">&copy; 2018 AllCoinStat</li>
          <li class="footer-menu__item"><a href="#">About</a></li>
          <li class="footer-menu__item"><a href="#">Advertise</a></li>
          <li class="footer-menu__item"><a href="#">FAQ</a></li>
          <li class="footer-menu__item"><a href="#">Request Form</a></li>
          <li class="footer-menu__item"><a href="#">Change language</a></li>
        </ul>
      </nav>  
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterApp'
  }
</script>

<style scoped>
  .footer-menu {
    padding: 40px 0;
  }
  .footer-menu__copyright,
  .footer-menu__item {
    padding-right: 30px;
  }
</style>