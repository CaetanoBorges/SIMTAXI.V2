class Definicoes {
    constructor(jquery, apiUrl, loader, notificacao) {
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    alteraPasse(atual,nova) {
        var token = localStorage.getItem("token");
        var notificacao = this.notificacao;
        var loader = this.loader;

        loader.abrir(); 
        (this.jquery).post((this.apiUrl) + "/Conta/alterarPasse.php", { token: token, atual: atual, nova: nova }).done(function (dados) {
            console.log(dados);
            var obj = JSON.parse(dados);

            if (obj.ok) {
                document.querySelector("debliwui-btnatualizarpasse").shadowRoot.querySelector("#atual").value = "";
                document.querySelector("debliwui-btnatualizarpasse").shadowRoot.querySelector("#nova").value = "";
                document.querySelector("debliwui-btnatualizarpasse").shadowRoot.querySelector(".backdrop").style.display = "none";
                document.querySelector("debliwui-btnatualizarpasse").shadowRoot.querySelector(".content").style.display = "none";

                notificacao.sms("Alterou a palavra passe");
            } else {
                notificacao.sms(obj.payload, 1);
            }

        }).always(function (always) {
            loader.fechar();
        })
    }

   

    set() {
        var nome = localStorage.getItem('nome');
        var foto = localStorage.getItem('foto');

        document.querySelector("#foto-perfil").setAttribute("src",(this.apiUrl)+"/Conta/foto/"+foto);
        document.querySelector("#nome").innerHTML = nome;
    }
}

window.Definicoes = Definicoes;

