
   let choice1 = ""
        let choice2 = ""
        let choice3 = ""
        let price1 = ""
        let price2 = ""
        let price3 = ""
        let valorFinal = 0
        let nome;
        let endereco;
        let valueNome;
        let valueEndereco;
        let pratoPrincipal = 0
        let bebidaCoca = 0
        let sobremesaPudim = 0
        
        let frangoselected = 0
        function selectedFrango(sel) {
            const frangosel = document.querySelector(".meal .selected");
            if (frangosel !== null) {
                frangosel.classList.remove("selected");
                frangoselected = -10
            }
            sel.classList.add("selected")
            frangoselected = 10
            choice1 = sel.querySelector(".nomedoPrato").innerHTML
            price1 = sel.querySelector(".vlr").innerHTML
        }
        let cocaselected = 0
        function selectedbebida(selbeb) {

            const cocasel = document.querySelector(".beverage .selected");

            if (cocasel !== null) {
                cocasel.classList.remove("selected");
                cocaselected = -10
            }
            selbeb.classList.add("selected")
            cocaselected = 10
            choice2 = selbeb.querySelector(".nomedoPrato").innerHTML
            price2 = selbeb.querySelector(".vlr").innerHTML
        }
        let pudimselected = 0
        function selecteddesert(seldes) {

            const pudimsel = document.querySelector(".desert .selected");

            if (pudimsel !== null) {
                pudimsel.classList.remove("selected");
                pudimselected = -10
            }
            seldes.classList.add("selected")
            pudimselected = 10
            choice3 = seldes.querySelector(".nomedoPrato").innerHTML
            price3 = seldes.querySelector(".vlr").innerHTML
        }

        function checarFrango() {
            if (frangoselected == 10) {
                pratoPrincipal = 10
            } else {
                pratoPrincipal = -10
            }
        }
        function checarBebida() {
            if (cocaselected == 10) {
                bebidaCoca = 10
            }
            else {
                bebidaCoca = -10


            }
        }
        function checarSobremesa() {
            if (pudimselected == 10) {
                sobremesaPudim = 10
            } else {
                sobremesaPudim = -10
            }
        }

        function itensSelecionados() {
            const botaoSemOpcoes = document.getElementById("p1")
            const botaoDeConfirmacao = document.getElementById("finalize")

            if (pratoPrincipal + bebidaCoca + sobremesaPudim == 30) {
                botaoSemOpcoes.classList.add("escondido")
                botaoDeConfirmacao.classList.remove("escondido")


            } else {
                botaoDeConfirmacao.classList.add("escondido")
                botaoSemOpcoes.classList.remove("escondido")

            }
        }

        function finalizar() {
            // opções
            document.getElementById("order1").innerHTML = (choice1)
            document.getElementById("order2").innerHTML = (choice2)
            document.getElementById("order3").innerHTML = (choice3)
            // valores 
            document.getElementById("price1").innerHTML = (price1)
            document.getElementById("price2").innerHTML = (price2)
            document.getElementById("price3").innerHTML = (price3)
            
        }
        function somaValores(){
            document.getElementById("display-confirmacao").classList.remove ("escondido")
            // parseInt, parseFloat e Number() não funcionaram de jeito nenhuma, apesar que no console do navegador estava certo, entao fiz esse 'gato'
            price1++ 
            price1--
            price2++
            price2--
            price3++
            price3--
            valorFinal = price1 + price2 + price3
           
            document.getElementById("vlrfinal").innerHTML = (valorFinal.toFixed(2))
            //bonus aqui 
            nome = prompt("Qual seu nome?");
             endereco = prompt("Qual seu endereço?");
             valueNome = nome;
             valueEndereco = endereco;

        }
        function cancelar(){
            document.getElementById("display-confirmacao").classList.add ("escondido")
        }
        function whatsapp(){
              mensagemWpp = `Olá, gostaria de fazer o pedido:
- Prato: ${choice1}   
- Bebida: ${choice2} 
- Sobremesa: ${choice3}  
Total: R$ ${valorFinal.toFixed(2)}

Nome: ${valueNome}
Endereço: ${valueEndereco}`
//preview do WPP nao funciona porém na mensagem funciona perfeitamente; pode mandar uma mensagem pra mim quando tiver testando :D

        window.open("https://wa.me/5511973610831?text="+ encodeURIComponent(mensagemWpp))}
         