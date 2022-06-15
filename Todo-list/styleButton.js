export   const styleButton = `
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: 2px solid #000;
border-radius: 10px;
background-color: rgba(0, 0, 0, 0.5);
cursor: pointer;
color: rgba(255, 255, 255, 0.8);
box-shadow: 10px 10px 10px 2px rgba(255, 255, 255, 0.2);
`;

export function styleBtn() {
    const styleButttonHover = document.getElementsByTagName('button');
    for (let index = 0; index < styleButttonHover.length; index++) {
        let button = styleButttonHover[index];
        button.addEventListener('mouseover', () => {
            button.style.border = '2px solid rgba(255, 255, 255, 0.8)';
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'ease 0.5s';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.border = '2px solid #000';
        });
        button.addEventListener('mousedown', () => {
            button.style.color = 'rgba(255, 255, 255, 1)';
            button.style.transition = 'ease 0.2s';
        });
        button.addEventListener('mouseup', () => {
            button.style.color = 'rgba(255, 255, 255, 0.8)';
            button.style.transition = 'ease 0.5s';
        });
    }
}
