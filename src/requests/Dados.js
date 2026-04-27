class Dados{
    constructor(jquery, apiUrl, loader, notificacao){
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    buscar(){
        var token = localStorage.getItem("token");
        var notificacao = this.notificacao;
        var loader = this.loader;
        
        if(!token){
            return;
        }

        (this.jquery).get((this.apiUrl)+"/Corrida/corridas.php",{token:token}).done(function(dados){
            localStorage.setItem("corridas",dados);  
        }).always(function(always){
            
        });
        
        (this.jquery).get((this.apiUrl)+"/Corrida/precoporkilometro.php",{token:token}).done(function(dados){
            var obj = JSON.parse(dados);
            localStorage.setItem("precoPorKilometroCarro",obj[0]["valor"]);  
            localStorage.setItem("precoPorKilometroMoto",obj[1]["valor"]);  
        }).always(function(always){
            
        });
        
        (this.jquery).get((this.apiUrl)+"/Rentacar/alugueres.php",{token:token}).done(function(dados){
            localStorage.setItem("alugueres",dados);  
        }).always(function(always){
            
        });
        
        (this.jquery).get((this.apiUrl)+"/Rentacar/carros.php",{token:token}).done(function(dados){
            localStorage.setItem("carros",dados);  
        }).always(function(always){
            
        });
        (this.jquery).get((this.apiUrl)+"/Guesthouse/alugueres.php",{token:token}).done(function(dados){
            localStorage.setItem("arrendamentos",dados);  
        }).always(function(always){
            
        });
        
        (this.jquery).get((this.apiUrl)+"/Guesthouse/apartamentos.php",{token:token}).done(function(dados){
            localStorage.setItem("apartamentos",dados);  
        }).always(function(always){
            
        });

        (this.jquery).get((this.apiUrl)+"/Conta/ver.php",{token:token}).done(function(dados){
            
            var obj = JSON.parse(dados);
            var payload = obj.payload;
            localStorage.setItem('nome',payload.nome);
            localStorage.setItem('telefone',payload.telefone);
            localStorage.setItem('email',payload.email);
            localStorage.setItem('genero',payload.genero);
            localStorage.setItem('provincia',payload.provincia);
            localStorage.setItem('municipio',payload.municipio);
            localStorage.setItem('foto',payload.foto);
            localStorage.setItem('valorsubscricao',payload.valor);
            localStorage.setItem('identificador',payload.identificador);
            
        }).always(function(always){
            
        });
        
         (this.jquery).get((this.apiUrl)+"/Conta/subscricao.php",{token:token}).done(function(dados){
            localStorage.setItem("subscricao",dados);  
        }).always(function(always){
            
        });
        
    }
    
}

window.Dados = Dados;

