const accdn = document.getElementsByClassName("accordion");
const accordian = document.getElementsByClassName('accordionBox');
console.log(accordian)
const toggleAccordian = ({target}) => {

    [...accordian].map((acc,index) => {
        accdn[index].classList.remove('active')
        acc.classList.remove('block')
    })

    target.classList.toggle("active");
    target.nextElementSibling.classList.add('block');
}

for (let i = 0; i < accdn.length; i++) {
    accdn[i].addEventListener("click", toggleAccordian);
}

