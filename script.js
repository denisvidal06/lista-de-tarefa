function listar() {
  let txtTarefa = document.querySelector('input#txtTarefa');
  let resultado = document.querySelector('ol#listar-tarefas');



  if (txtTarefa.value == '') {
    alert('Insira a Sua Tarefa')
  } else {

    let li = document.createElement('li');

    let textoTarefa = document.createElement('span');
    textoTarefa.textContent = txtTarefa.value;
  }
}