class Conta {
    constructor(jquery, apiUrl, loader, notificacao) {
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    editar() {
        var token = localStorage.getItem("token");
        var notificacao = this.notificacao;
        var loader = this.loader;

        var nome = document.querySelector('#nome').value;
        var telefone = document.querySelector('#telefone').value;
        var email = document.querySelector('#email').value;
        var genero = document.querySelector('#genero').value;
        var provincia = document.querySelector('#provincia').value;
        var municipio = document.querySelector('#municipio').value;

        loader.abrir(); 
        (this.jquery).post((this.apiUrl) + "/Conta/editar.php", { token: token, nome: nome, telefone: telefone, email: email, genero: genero, provincia: provincia, municipio: municipio }).done(function (dados) {
            console.log(dados);
            var obj = JSON.parse(dados);

            if (obj.ok) {
                //vaiTela("/verificarcadastro");

                notificacao.sms("Alterou os detalhes de conta");
                localStorage.setItem('nome', nome);
                localStorage.setItem('telefone', telefone);
                localStorage.setItem('email', email);
                localStorage.setItem('genero', genero);
                localStorage.setItem('provincia', provincia);
                localStorage.setItem('municipio', municipio);


            } else {
                notificacao.sms(obj.payload, 1);
            }

        }).always(function (always) {
            loader.fechar();
        })
    }

    set() {
        var token = localStorage.getItem("token");
        if(!token){
            return;
        }
        var nome = localStorage.getItem('nome');
        var telefone = localStorage.getItem('telefone');
        var email = localStorage.getItem('email');
        var genero = localStorage.getItem('genero');
        var provincia = localStorage.getItem('provincia');
        var municipio = localStorage.getItem('municipio');
        var foto = localStorage.getItem('foto');

        document.querySelector('#nome').value = nome;
        document.querySelector('#telefone').value = telefone;
        document.querySelector('#email').value = email;

        document.querySelector("#foto-perfil").setAttribute("src",(this.apiUrl)+"/Conta/foto/"+foto);

        var gen = document.createElement('option');
        gen.value = genero;
        gen.innerHTML = genero;
        gen.setAttribute("selected", "selected");
        document.querySelector('#genero').prepend(gen);

        var prov = document.createElement('option');
        prov.value = provincia;
        prov.innerHTML = provincia;
        prov.setAttribute("selected", "selected");
        document.querySelector('#provincia').prepend(prov);
        document.querySelector("#provincia").addEventListener("change", function () {

            var municipios = territorios[(this.value)].municipios;
            var opt = '';
            for (const key in municipios) {
                opt += '<option value="' + municipios[key] + '">' + municipios[key] + '</option>';
            }
            document.querySelector("#municipio").innerHTML = (opt);
            document.querySelector("#municipio").removeAttribute("disabled");
        });


        var mun = document.createElement('option');
        mun.value = municipio;
        mun.innerHTML = municipio;
        document.querySelector('#municipio').prepend(mun);
        document.querySelector("#municipio").setAttribute("disabled", "disabled");


        var esse = this;
        document.querySelector("#imagem").addEventListener("change", function () {
            console.log(this.value);
            var fd = new FormData();
            var files = $('#imagem')[0].files[0];
            var token = localStorage.getItem("token");
            fd.append('foto', files);
            fd.append('token', token);
            (esse.jquery).ajax({
                url: (esse.apiUrl) + "/Conta/alterarFoto.php",
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function (dados) {
                     console.log(dados);
                    var obj = JSON.parse(dados);
                    if (obj.ok) {
                        localStorage.setItem("foto",obj.payload);
                        document.querySelector("#foto-perfil").setAttribute("src", (esse.apiUrl) + "/Conta/foto/"+obj.payload);
                    } else {

                    }
                },
            });
        })
    }


}

window.Conta = Conta;

