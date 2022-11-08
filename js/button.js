const btns = document.querySelectorAll('button[id^=btn]')

let values = new Array(btns.length).fill(0);

const colors = ['cyan', 'blue', 'green', 'yellow', 'orange', 'red'];

for(let i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', function onClick() {
        values[i] = values[i] >= colors.length - 1 ? colors.length - 1 : values[i] + 1;

        btns[i].style.backgroundColor = colors[values[i]];
        btns[i].style.color = 'white';

        if (values.every(value => value == colors.length - 1)) {
          alert("You have completed calibration. Redirecting to home page.");
          window.location = "index.html";
        }
      });
}
