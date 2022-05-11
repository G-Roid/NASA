fetch('https://api.nasa.gov/planetary/apod?api_key=KBg3bYzYu9n5Qedy4T5EQFzdDx3pJ3chwgtwJIf5')
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('img').src = data.url;
    document.querySelector('p').textContent = data.explanation
})