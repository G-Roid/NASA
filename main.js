// fetch('https://api.nasa.gov/planetary/apod?api_key=KBg3bYzYu9n5Qedy4T5EQFzdDx3pJ3chwgtwJIf5')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     document.querySelector('img').src = data.url;
//     document.querySelector('p').textContent = data.explanation
// })

document.querySelector('button').addEventListener('click', space)

function space() {

    let date = document.querySelector('input').value;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=KBg3bYzYu9n5Qedy4T5EQFzdDx3pJ3chwgtwJIf5&date=${date}&thumbs=true`)
    .then(res => res.json())
    .then(data => {
        console.log(data)    


        if (data.media_type === 'video') {
            document.querySelector('img').src = data.thumbnail_url;
            
            
        } else {
            document.querySelector('img').src = data.url;
            
            

        }    
        document.querySelector('p').textContent = data.explanation
        let title = setTitle(data)
        document.querySelector('#title').textContent = title
    })
}

function setTitle(data) {
    console.log('hello')
    return data.title.split(':')[1]
    
}