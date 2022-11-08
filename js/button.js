const btns = document.querySelectorAll('button[id^=btn]')

let values = new Array(btns.length).fill(0);

const colors = ['blue', 'green', 'yellow', 'orange', 'red'];

for(let i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', function onClick() {
        btns[i].style.backgroundColor = colors[values[i]];
        btns[i].style.color = 'white';
      
        values[i] = values[i] >= colors.length - 1 ? colors.length - 1 : values[i] + 1;
      });
}
