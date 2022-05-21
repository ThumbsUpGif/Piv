
// // Scroll into view

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {



 link.addEventListener('click', (event) => {
        console.log(event)

        event.preventDefault()

        const href = link.getAttribute('href')
        console.log(href)
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })
    })

})
