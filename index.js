document.addEventListener(  
    //garante que carrega o todo o HTML antes de executar o JS
    "DOMContentLoaded", 
    function(){
        //selecione o elemento <menu> do HTML pelo elemento
        const nav = document.querySelector("nav");
        //obtem a distancia em PX entre o topo da pagina e o meu menu
        const topo = nav.offsetTop;
        window.addEventListener("scroll", function(){
            const posicaoScroll = document.documentElement.scrollTop || 
document.body.scrollTop;
            if(posicaoScroll>=topo){
                //fixa o meu menu
            nav.classList.add("fixed");
        }else{
                //remove a propriedade de fixar o menu no topo da pagina
                nav.classList.remove("fixed");
            }

        });

    }
);
