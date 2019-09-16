function toggleNavDropdown () {
  console.log('click is working')
  const links = document.getElementsByClassName('menu-bar-links')[0]
  if (links.style.display === 'block') {
    links.style.display = "none"
  } else {
    links.style.display = "block"
  }
}

// if a menu link is pressed links.style.display = "none"