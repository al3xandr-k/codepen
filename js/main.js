const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.createElement('li');

let arrList = [];

btn.addEventListener('click', () => {
  let newList = {
    list: input.value
  }

  arrList.push(newList);
  console.log('arrList: ', arrList);
  displayMessages();
});

const displayMessages = () => {
  let displayMessage = '';

  arrList.forEach(() => {
    displayMessage += `
    <li>
      ${input.value}
    </li>
    `
    li.innerHTML = displayMessage;
    ul.append(li);
  })
}
