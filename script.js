function onMenuToggle(e) {
    const navlinks = document.querySelector(".navLinks");
    e.name = e.name === "menu" ? "close" : "menu";
    navlinks.classList.toggle("left-[0%]");
  }
  
  AOS.init();

  const navDialog = document.getElementById('nav_dialog');

  function handleMenu(){
   navDialog.classList.toggle('hidden');
  }





