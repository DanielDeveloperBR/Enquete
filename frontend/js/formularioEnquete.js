const form = document.getElementById('enquete');
const radios = document.querySelectorAll('input[name="sexo"]');
let sexo = 'Masculino';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const idade = form.idade.value.trim();
    const profissao = form.profissao.value.trim();
    const comentario = form.comentario.value.trim();
    radios.forEach(radio => {
        if (radio.checked) {
            sexo = radio.id;
        }
    });


    const fields = [nome, idade, profissao, comentario];
    if (fields.some(field => field === '')) {
        alert('Preencha todos os dados!!!');
        return;
    }


    if (idade <= 0 || idade >= 100) {
        alert('Digite uma idade válida');
        return;
    }


    const response = await fetch('/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'sexo': sexo,
            'idade': idade,
            'profissao': profissao,
            'comentario': comentario
        })
    })

    if (response.ok) {
        alert('Enquete inserida com sucesso!');
        location.reload();
    } else {
        alert('Erro ao comentar!');
    }

})