



const scrollContainer = document.querySelector('[data-scroll-container]')
const cardContainer = document.querySelector('[data-card-container]')
const leftScrollBtn = document.querySelector('[data-left-scroll-btn]')
const rightScrollBtn = document.querySelector('[data-right-scroll-btn]')
const dataCardItem = document.querySelector('[data-card-item]')



const scrollAmount = dataCardItem.offsetWidth
const maxScroll = -cardContainer.offsetWidth + scrollContainer.offsetWidth
let currentScrollPosition = 0


cardContainer.style.left = maxScroll + 'px'



leftScrollBtn.addEventListener('click', () => {
    scrollHorizontally(1)
})
rightScrollBtn.addEventListener('click', () => {
    scrollHorizontally(-1)
})


function scrollHorizontally(value) {
    currentScrollPosition += (value * scrollAmount)
    if (currentScrollPosition > 0) {
        currentScrollPosition = 0
    }
    
    if (currentScrollPosition < maxScroll) {
        currentScrollPosition = maxScroll
    }

    cardContainer.style.left = currentScrollPosition + 'px'
}
