'use strict';
const header = document.querySelector("header");
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky',window.scrollY>120)
})
const sectionsHandler = function () {
    const sections = document.querySelectorAll("section")
    console.log(sections)
    sections.forEach(function (section) {
        section.classList.add("section__hidden");
         
     }
       
     );
    
    const observerSections = function (entries, observer) {
       
        
        const [entry] = entries;
        
        if (!entry.isIntersecting) return
        entry.target.classList.remove("section__hidden")
        observer.unobserve(entry.target)
        
       
    }
    const sectionObserver = new IntersectionObserver(observerSections, {
        root: null,
        threshold: .25,
        
    })
    sections.forEach((section) => sectionObserver.observe(section));
}

sectionsHandler()
    