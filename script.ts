const formularioDeCadastro = document.getElementById('formularioDeCadastro') as HTMLFormElement;

formularioDeCadastro.addEventListener('submit' , function(event){
    event.preventDefault();

    const nome = document.getElementById('nome') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const dataDeNascimento = document.getElementById('dataDeNascimento') as HTMLInputElement;
   

    const DadosDaBaseDeDados = {
        nome: nome.value,
        email: email.value,
        dataDeNascimento: dataDeNascimento.value,
        
    };
    // Armazenando os dados na base de Dados.
        console.log('Dados do Cadastro:' , DadosDaBaseDeDados);
    
    // Confirmando o cadastro
        alert('Seu cadastro foi concluído!');
   });
