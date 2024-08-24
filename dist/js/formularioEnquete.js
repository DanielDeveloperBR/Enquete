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
        radio.addEventListener('click', () => {
            if (radio.id === 'masculino') {
                sexo = radio.id;
            } else if (radio.id === 'feminino') {
                sexo = radio.id;
            } else if (radio.id === 'outro') {
                sexo = radio.id;
            } else {
                alert('Selecione um sexo,');
            }
        });
    });

    if (nome === '' || idade === '' || profissao === '' || comentario === '') {
        alert('Preencha todos os dados!!!');
        return;
    }
    if (idade >0 && idade < 100){
        alert('Digite uma idade válida');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/cadastrar', {
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
        });

        if (response.ok) {
            alert('Enquete inserida com sucesso!');
            location.reload();
        } else {
            alert('Erro ao comentar!');
        }
    } catch (error) {
        alert('Erro interno no servidor.');
    }
});