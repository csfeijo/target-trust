<!-- navbar-default : mantem o estilo padrao em cinza -->
<!-- navbar-inverse : muda o estilo para "alto-contraste" -->
<nav class="navbar navbar-inverse">
  <!-- o FLUID faz o elemento se esticar por toda largura da tela -->
  <div class="container">

    <!-- DEFINIÇÕES PARA O BURGER MENU - MOBILE -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-crud">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">LOGOTIPO</a>
    </div>

    <div class="collapse navbar-collapse" id="menu-crud">

      <ul class="nav navbar-nav">
        <!-- Para CADA ITEM NOVO no MENU vai um LI -->
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">DEPARTAMENTOS <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="listar-departamentos.php">Listar</a></li>
            <li><a href="form-departamentos.php">Cadastrar</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">FUNCIONÁRIOS <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="listar-funcionarios.php">Listar</a></li>
            <li><a href="form-funcionarios.php">Cadastrar</a></li>
          </ul>
        </li>

      </ul>

      <!--  TODOS ITENS dentro deste UL irão ficar à direita da barra -->
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="logout.php">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>