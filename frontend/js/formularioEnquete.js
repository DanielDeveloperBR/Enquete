const form = document.getElementById('enquete');
const radios = document.querySelectorAll('input[name="sexo"]');
let sexo = 'Masculino'
radios.forEach(radio => {
    radio.addEventListener('click', () => {
        sexo = radio.id;
    });
});
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const idade = form.idade.value.trim();
    const profissao = form.profissao.value.trim();
    const comentario = form.comentario.value.trim();

    if (nome === '' || idade === '' || comentario === '') {
        alert('Preencha todos os dados!!!');
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
            location.reload()
        } else {
            alert('Erro ao comentar!');
        }
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
        alert('Erro interno no servidor.');
    }
});