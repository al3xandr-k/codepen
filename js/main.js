const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');


let arrList = [];


btn.addEventListener('click', () => {
  const li = document.createElement('li');
  arrList.push(input.value);
  li.innerHTML = input.value;
  ul.append(li);
});