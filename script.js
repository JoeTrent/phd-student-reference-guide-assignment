let buttons = document.getElementsByClassName('btn');

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', () => {
        let sections = document.getElementsByTagName('div');
        for (let j = 0; j < sections.length; j++) {
            sections[j].classList.add('hidden');
        }
    });
};