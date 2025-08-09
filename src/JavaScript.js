export function setupCounter(element) {
  element.innerHTML = `Random Cat Video`
  element.style.cursor = 'pointer'
  const catVideos = [
    "https://www.youtube.com/watch?v=J---aiyznGQ",
    "https://www.youtube.com/watch?v=hY7m5jjJ9mM",
    "https://www.youtube.com/watch?v=5dsGWM5XGdg",
    "https://www.youtube.com/watch?v=FtutLA63Cp8",
    "https://www.youtube.com/watch?v=CbUhz8m1v7w"
  ]
  element.addEventListener('click', () => {
    const randomUrl = catVideos[Math.floor(Math.random() * catVideos.length)]
    window.open(randomUrl, '_blank')
  })
}