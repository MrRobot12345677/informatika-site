const gradesBox = document.getElementById('grades');
const addButton = document.getElementById('addGrade');
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');
const average = document.getElementById('average');
const count = document.getElementById('count');
const message = document.getElementById('message');

function addGrade(value = '') {
  const input = document.createElement('input');
  input.className = 'grade';
  input.type = 'number';
  input.min = '1';
  input.max = '5';
  input.step = '1';
  input.placeholder = 'Оценка';
  input.value = value;
  gradesBox.appendChild(input);
  input.focus();
}

function calculate() {
  const inputs = [...document.querySelectorAll('.grade')];
  const values = inputs.map(i => Number(i.value)).filter(n => n >= 1 && n <= 5);
  if (!values.length) {
    average.textContent = '—';
    count.textContent = '0';
    message.textContent = 'Добавь хотя бы одну оценку от 1 до 5.';
    return;
  }
  const avg = values.reduce((a,b) => a+b, 0) / values.length;
  average.textContent = avg.toFixed(2);
  count.textContent = values.length;
  message.textContent = avg >= 4.5 ? 'Отличный результат! 🌟' :
                         avg >= 3.5 ? 'Хороший результат! 👍' :
                         avg >= 3 ? 'Можно ещё немного улучшить! 💪' :
                         'Продолжай заниматься — всё получится! 🚀';
}

addButton.addEventListener('click', () => addGrade());
calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', () => {
  gradesBox.innerHTML = '';
  average.textContent = '—';
  count.textContent = '0';
  message.textContent = 'Добавь оценки, чтобы увидеть результат.';
  addGrade();
});

addGrade();
addGrade();
addGrade();
