
function visiteur(){
  alert('rouge');
}

function ChangerTitre(){
  console.debug("ChangerTitre");
if (document.getElementById('titre_header').innerHTML=="Curriculum Vitae") {
    document.getElementById('titre_header').innerHTML="Par Vincent Lorcy";
  }
    else {
      document.getElementById('titre_header').innerHTML="Curriculum Vitae";
  }
}
function Changer_theme(){
  var couleur ;
  if (this.id=="Cyan"){
    couleur="#3bc2be";}
    if (this.id=="Orange"){
      couleur="#cc5500";}
      if (this.id=="Rouge"){
        couleur="#da2964";}
  document.getElementById('mon_header').style.backgroundcolor=color
  document.getElementById('mon_footer').style.backgroundcolor=color
  document.getElementById('mon_nav').style.backgroundcolor=color

}


var p_footer = document.getElementById("p_footer");
p_footer.addEventListener('dblclick', visiteur);

document.getElementById('titre_header').addEventListener("mouseover",ChangerTitre);

document.getElementById('theme_couleur_cyan').addEventListener("click",Changer_theme);
document.getElementById('theme_couleur_orange').addEventListener("click",Changer_theme);
document.getElementById('theme_couleur_rouge').addEventListener("click",Changer_theme);
