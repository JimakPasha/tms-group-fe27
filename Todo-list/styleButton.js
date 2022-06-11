export   const styleButton = `
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: 2px solid #000;
border-radius: 10px;
background-color: aquamarine;
cursor: pointer;
`;

export function styleBtn() {
    const styleButttonHover = document.getElementsByTagName('button');
    for (let index = 0; index < styleButttonHover.length; index++) {
        let button = styleButttonHover[index];
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'ease 0.5s';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
        button.addEventListener('mousedown', () => {
            button.style.color = 'white';
            button.style.transition = 'ease 0.2s';
        });
        button.addEventListener('mouseup', () => {
            button.style.color = '#000000';
            button.style.transition = 'ease 0.5s';
        });
    }
}
