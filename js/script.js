function openSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
};

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};

const targetBlock = document.querySelector('.main__inner');

const targetServers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
})

targetServers.observe(targetBlock);

const tagetServicesBlock = document.querySelector('.services__inner');

const block = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
})

block.observe(tagetServicesBlock);

const targetStart = document.querySelector('.start__inner');

const start = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
})

start.observe(targetStart);