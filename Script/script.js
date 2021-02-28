//função que pega os dados do arquivo json e cria no index.html
function exibirCompras() {
    $.getJSON("Dados/Produtos.json", function(data){          
        for (var i = 0; i<data.produtos.length; i++)
        {
           var div = '<div class="produtos"><h2>'+ data.produtos[i].restaurante+
           '<hr></h2><p>'+data.produtos[i].nome+'</p><p>'+' R$ '+data.produtos[i].valor+ 
           '</p><button class="botao" onclick="addCarrinho(\''+data.produtos[i].nome+'\','+data.produtos[i].valor+')">adicionar</button></div>'
           $("#compras").append(div);

           
        }
    });   
}
//função que pega os itens e joga para o webstorage
function addCarrinho(nomeprodutos,valorprodutos){
    
    localStorage.setItem(nomeprodutos,valorprodutos);
    alert("Seu Pedido" +"  "+ nomeprodutos + "  " + "Foi adicionar ao Carrinho");
        
}

//recuperar as informações do webstorange
function SomaraddCarrinho(){
    var soma = 0;
    var quantidade = localStorage.length;

    for(var i = 0; i<quantidade; i++){
        var valorprodutos = localStorage.getItem(localStorage.key(i));

        soma =+ valorprodutos + soma;
    };   
    document.getElementById("soma").innerHTML = soma;
}
//função que pega o xml e cria o menu
function Menudasgalaxias() {
    $.ajax({
        url: "Dados/menu.xml",
        success: function (xml) {
            $(xml).find("cont").each(function () {
                var link = '<a href="'+$(this).attr("link")+'">'+ $(this).text() + '</a><br><br>';
                $("#menu").append(link);
            });
        },
        error: function () {
            alert("Mensagem de erro.");
        }
    });
}
//limpa a tebela com os itens
function Limpar(){
    var onclick = false;

    if(onclick == false){
    $("#Tabela tr").remove();
    }
};

function Jogarprato(){
    var quant = localStorage.length;

    for(var i = 0; i<quant;i++){
        var nomeprato = localStorage.key(0);
        var nomeprato1 = localStorage.key(1);
        var nomeprato2 = localStorage.key(2);
        var nomeprato3 = localStorage.key(3);
        var nomeprato4 = localStorage.key(4);
       
        x = nomeprato ;
        y = nomeprato1;
        z = nomeprato2;
        q = nomeprato3;
        p = nomeprato4;
    }
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
    document.getElementById("z").innerHTML = z;
    document.getElementById("q").innerHTML = q;
    document.getElementById("p").innerHTML = p;

}
function Jogarvalores(){
    
    var quant = localStorage.length;

    for(var i = 0; i<quant;i++){
        var v1 = localStorage.getItem(localStorage.key(0));
        var v2 = localStorage.getItem(localStorage.key(1));
        var v3 = localStorage.getItem(localStorage.key(2));
        var v4 = localStorage.getItem(localStorage.key(3));
        var v5 = localStorage.getItem(localStorage.key(4));
       

        val1 = v1;
        val2 = v2;
        val3 = v3;
        val4 = v4;
        val5 = v5;
    }
    document.getElementById("val1").innerHTML = val1;
    document.getElementById("val2").innerHTML = val2;
    document.getElementById("val3").innerHTML = val3;
    document.getElementById("val4").innerHTML = val4;
    document.getElementById("val5").innerHTML = val5;

}