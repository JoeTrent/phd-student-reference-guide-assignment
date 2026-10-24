let buttons = document.getElementsByClassName('btn');
let sections = document.getElementsByClassName('section');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const target = buttons[i].dataset.target;
        for (let j = 0; j < sections.length; j++) {
            if (sections[j].id == target) {
                sections[j].classList.remove('hidden');
            }
            else {
                sections[j].classList.add('hidden');
            }
        }
    });
};
