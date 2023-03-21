let res = document.querySelector('#res');
const container = document.querySelector('.showimage')

var botao = document.getElementById("button");
botao.addEventListener("click", function() {
  botao.style.display = "none";
});

function mudarImagem(){

  var imagens = [
    "https://criticalhits.com.br/wp-content/uploads/2021/04/hagrid-910x512.jpg", 
    "http://2.bp.blogspot.com/-F-nlIlntJXo/TmgQ9MqjnAI/AAAAAAAAALk/HSCmxdPS7kE/s1600/harry-potter1.jpg",
    "https://criticalhits.com.br/wp-content/uploads/2021/04/dobby-910x512.jpg",
    "http://pm1.narvii.com/6416/36bca4c484986ae5eecfce03de29177395f353bf_00.jpg",
    "https://img.ibxk.com.br/2022/11/25/25104649167073.jpg",
    "https://i.pinimg.com/236x/4d/31/04/4d310489cf7d9f2504547012a8827350--harry-potter-birthday-harry-potter-parties.jpg",
    "https://super.abril.com.br/wp-content/uploads/2018/07/ginnn.jpg",
    "https://criticalhits.com.br/wp-content/uploads/2021/04/ron-weasley-910x512.jpg",
    "https://4.bp.blogspot.com/-47ygNfjv7ew/WiyNura0YHI/AAAAAAAAxGY/hSunKhEjcyon0PFpgz_zyC0s-4imQN1rACLcBGAs/s1600/LunaLovegood_WB_F6_LunaLovegoodInQuibblerSpecsOnHogwartsExpress_Still_080615_Port.jpg",
    "https://super.abril.com.br/wp-content/uploads/2018/07/dumbledore.jpg",
    "https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2021/08/legiao_FgHoNpOkxn_m.jpg.webp",
    "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcL2MwY2NmOTc2LTAzOWYtNDUzNy1hZWQ5LTJjYzYyYzBlYTRmMS0xOTIwLTEwODAucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    "https://www.rbsdirect.com.br/imagesrc/24035946.jpg?w=700",
    "https://static.wikia.nocookie.net/harrypotter/images/3/35/Fred-and-george-weasley-half-blood-prince-portrait-2.jpg/revision/latest/smart/width/250/height/250?cb=20211124024246&path-prefix=pt-br",
    "https://img.quizur.com/f/img622698407d6d93.46237505.jpg?lastEdited=1646696516",
  ];

        var imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
		var img = document.getElementById("imagem");
		img.src = imagemAleatoria;


}

