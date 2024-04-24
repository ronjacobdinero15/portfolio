document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar-nav a.nav-link')

  navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault()

      const targetId = this.getAttribute('href').substring(1)

      if (targetId === 'header') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const offset = 50
          const targetPosition = targetElement.offsetTop - offset

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          })
        }
      }
    })
  })
})
