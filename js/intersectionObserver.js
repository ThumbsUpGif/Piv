console.log('hei verden!!')

// ///// Case 2 - Research ////
const quotes = document.querySelectorAll('.animation-quote')

observerQuotes = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `animation-quote 0.3s ${entry.target.dataset.delay} forwards ease`
                observerQuotes.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

quotes.forEach(quote => {
    observerQuotes.observe(quote)
})
