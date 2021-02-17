const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.createElement('li');

btn.onclick = () => {
  li.innerHTML = input.value;
  input.value = '';
  ul.append(li);
}

