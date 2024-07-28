function onMenuToggle(e) {
    const navlinks = document.querySelector(".navLinks");
    e.name = e.name === "menu" ? "close" : "menu";
    navlinks.classList.toggle("left-[0%]");
  }
  
  AOS.init();

  const navDialogue = document.getElementById('nav_dialogue');

  function handleMenu(){
   navDialogue.classList.toggle('hidden');
  }





