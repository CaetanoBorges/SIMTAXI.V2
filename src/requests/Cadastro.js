class Cadastro{
    constructor(jquery, apiUrl, loader, notificacao){
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    seOsDadosForamPreenchidos(){
        setInterval(function(){
            var aceitotp = document.querySelector('#aceito-tp').checked;
            if(aceitotp){
                document.querySelector('.label-tp').style.color = "#2196F3";
            }else{
                document.querySelector('.label-tp').style.color = "red";
            }
            var nome = document.querySelector("#nome").value;
            var telefone = document.querySelector("#telefone").value;
            var email = document.querySelector("#email").value;
            var genero = document.querySelector("#genero").value;
            var provincia = document.querySelector("#provincia").value;
            var municipio = document.querySelector("#municipio").value;
            if((nome.length > 5) && (telefone.length > 5) && (email.length > 5) && (genero.length > 1) && (provincia.length > 1) && (municipio.length > 1) && aceitotp){
                document.querySelector("#btn-seguinte").removeAttribute("disabled");
            }else{
                document.querySelector("#btn-seguinte").setAttribute("disabled","disabled");
            }
        },100);
        
    }

    seTemDadosMete(){
        var nome = localStorage.getItem('nome');
        var telefone = localStorage.getItem('telefone');
        var email = localStorage.getItem('email');
        var genero = localStorage.getItem('genero');
        var provincia = localStorage.getItem('provincia');
        var municipio = localStorage.getItem('municipio');

        if(((typeof nome) != 'object') && ((typeof nome) != 'undefined')){
            document.querySelector("#nome").value = nome;
        }
        if(((typeof telefone) != 'object') && ((typeof telefone) != 'undefined')){
            document.querySelector("#telefone").value = telefone;
        }
        if(((typeof email) != 'object') && ((typeof email) != 'undefined')){
            document.querySelector("#email").value = email;
        }
        if(((typeof genero) != 'object') && ((typeof genero) != 'undefined')){
            var item1 = document.createElement('option');
            item1.value = genero;
            item1.innerHTML = genero;

            var item2 = document.createElement('option');
            item2.value = "Feminino";
            item2.innerHTML = "Feminino";
            var item3 = document.createElement('option');
            item3.value = "Masculino";
            item3.innerHTML = "Masculino";

            document.querySelector("#genero").innerHTML='';
            document.querySelector("#genero").append(item1,item2,item3);
        }
        if(((typeof provincia) != 'object') && ((typeof provincia) != 'undefined')){
            var item1 = document.createElement('option');
            item1.value = provincia;
            item1.innerHTML = provincia;

            document.querySelector("#provincia").innerHTML='';
            document.querySelector("#provincia").append(item1);
            for (const key in provincias) {
                var item = document.createElement('option');
                item.value = provincias[key];
                item.innerHTML = provincias[key];
                document.querySelector("#provincia").append(item);
            }
        }
        if(((typeof municipio) != 'object') && ((typeof municipio) != 'undefined')){
            var item1 = document.createElement('option');
            item1.value = municipio;
            item1.innerHTML = municipio;

            document.querySelector("#municipio").innerHTML='';
            document.querySelector("#municipio").append(item1);
        }
    }

    setDados(){
        var notificacao = this.notificacao;
        var loader = this.loader;

        
        document.querySelector("#nome").addEventListener("input",function(){
            localStorage.setItem('nome', this.value);
        });
        document.querySelector("#telefone").addEventListener("input",function(){
            localStorage.setItem('telefone', this.value);
        });
        document.querySelector("#email").addEventListener("input",function(){
            localStorage.setItem('email', this.value);
        });

        document.querySelector("#provincia").addEventListener("change",function(){
            if(this.value == "0"){
                document.querySelector("#municipio").setAttribute("disabled","disabled");
                notificacao.sms("Provincia invalida",1)
                return;
            }
            localStorage.setItem('provincia', this.value);
            var municipios = territorios[(this.value)].municipios;
            var opt = '<option value="0">Municipio</option>';
            for (const key in municipios) {
                opt+='<option value="'+municipios[key]+'">'+municipios[key]+'</option>';
            }
            document.querySelector("#municipio").innerHTML = (opt);
            document.querySelector("#municipio").removeAttribute("disabled");
        });
        document.querySelector("#municipio").addEventListener("change",function(){
            if(this.value == "0"){
                notificacao.sms("Municipio invalido",1)
                return;
            }
            localStorage.setItem('municipio', this.value);
        });
        document.querySelector("#genero").addEventListener("change",function(){
            if(this.value == "0"){
                notificacao.sms("Genero invalido",1)
                return;
            }
            localStorage.setItem('genero', this.value);
        });

        this.seTemDadosMete();
        this.seOsDadosForamPreenchidos();
    }

    continuarCadastro(){
        var telefone = localStorage.getItem('telefone');
        var email = localStorage.getItem('email');

        this.verificarTelefoneEmail(telefone,email);
    }

    /**
     * 
     */
    verificarCadastro(){
        var telefone = localStorage.getItem('email');
        var numero = document.querySelector("#numero").value;

        this.confirmarCadastro(telefone,numero);
    }
    reenviarCodigo(){
        var telefone = localStorage.getItem('email');
        this.receberConfirmacao(telefone);
    }


    verificarTelefoneEmail(telefone,email){
        loader.abrir();
        (this.jquery).post((this.apiUrl)+"/_cadastrar/verificarTelefone.php",{telefone:telefone, email:email}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                vaiTela("/concluircadastro");
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    receberConfirmacao(telefone){
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        (this.jquery).post((this.apiUrl)+"/_cadastrar/receberNumeroVerificacao.php",{telefone:telefone}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                //vaiTela("/verificarcadastro");
                notificacao.sms(obj.payload);
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    
    confirmarCadastro(telefone,numero){
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        (this.jquery).post((this.apiUrl)+"/_cadastrar/confirmarNumeroVerificacao.php",{telefone:telefone, numero: numero}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                vaiTela("/concluircadastro");
                notificacao.sms(obj.payload);
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    
    concluirCadastro(){
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();

        var cadastrar = {};
        cadastrar.nome = localStorage.getItem('nome');
        cadastrar.telefone = localStorage.getItem('telefone');
        cadastrar.email = localStorage.getItem('email');
        cadastrar.genero = localStorage.getItem('genero');
        cadastrar.provincia = localStorage.getItem('provincia');
        cadastrar.municipio = localStorage.getItem('municipio');
        cadastrar.palavra_passe = document.querySelector("#palavra-passe").value;

        (this.jquery).post((this.apiUrl)+"/_cadastrar/concluirCadastro.php",cadastrar).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                localStorage.setItem('token', obj.payload);
                vaiTela("/home");
                notificacao.sms("Bem vindo ao SimTaxi...");
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    


    /**
     * Comeca a logica de fazer login
     */

    login(){
        
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        var telefone = document.querySelector("#telefone").value;
        var palavra_passe = document.querySelector("#palavra-passe").value;

        (this.jquery).post((this.apiUrl)+"/entrar.php",{telefone:telefone,palavra_passe:palavra_passe}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                //localStorage.setItem('token', obj.payload);
                //_DADOS.buscar();
                //vaiTela("/home");
                localStorage.setItem('telefone', telefone);
                document.querySelector(".d2fa").style.display = "block";
                notificacao.sms(obj.payload);
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    /**
     * Comeca a logica de fazer login
     */

    login2FA(){
        
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        var telefone = localStorage.getItem("telefone");
        var codigo = document.querySelector("#confirmar-codigo").value;

        (this.jquery).post((this.apiUrl)+"/d2fa.php",{telefone:telefone,numero:codigo}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                localStorage.setItem('token', obj.payload);
                _DADOS.buscar();
                vaiTela("/home");
                notificacao.sms("É bom que esteja de volta");
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }

    /**
     * COMECA RECUPERAR CONTA
     * 
     */

    receberNumeroRecuperacao(){
        var telefone = document.querySelector("#telefone").value;
        this.esqueceuPasse(telefone);
    }
    confirmarRecuperacao(){
        var telefone = localStorage.getItem("telefone");
        var numero = document.querySelector("#numero").value;
        this.confirmarEsqueceuPasse(telefone,numero);
    }
    renovarPalavraPasse(){
        var telefone = localStorage.getItem("telefone");
        var numero = localStorage.getItem("numero");
        var passe = document.querySelector("#passe").value;
        this.novaPalavraPasse(telefone, numero, passe)
    }


    esqueceuPasse(telefone){
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        (this.jquery).post((this.apiUrl)+"/_recuperarConta/receberNumeroRecuperacao.php",{telefone:telefone}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                //vaiTela("/verificarcadastro");
                localStorage.setItem("telefone",telefone);
                notificacao.sms(obj.payload);
                vaiTela("confirmaresqueceuapasse");
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    confirmarEsqueceuPasse(telefone,numero){
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        (this.jquery).post((this.apiUrl)+"/_recuperarConta/confirmarNumeroRecuperacao.php",{telefone:telefone, numero: numero}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                //vaiTela("/verificarcadastro");
                localStorage.setItem("numero",numero);
                notificacao.sms(obj.payload);
                vaiTela("novapalavrapasse");
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
    novaPalavraPasse(telefone, numero, passe){
        var notificacao = this.notificacao;
        var loader = this.loader;
        loader.abrir();
        (this.jquery).post((this.apiUrl)+"/_recuperarConta/renovarPalavraPasse.php",{palavra_passe:passe, telefone: telefone, numero: numero}).done(function(dados){
            console.log(dados);
            var obj = JSON.parse(dados);
            
            if(obj.ok){
                //vaiTela("/verificarcadastro");
                localStorage.setItem('token', obj.payload);
                _DADOS.buscar();
                notificacao.sms("Renovou a palavra passe");
                vaiTela("/home");
                location.reload()
            }else{
                notificacao.sms(obj.payload, 1);
            }
            
        }).always(function(always){
            loader.fechar();
        })
    }
}

window.Cadastro = Cadastro;