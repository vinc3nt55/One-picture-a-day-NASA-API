// Global Variables
const popupContianer = document.querySelector('#popup');

function getNasaApi() {
    const displaImgAndInfo = document.querySelector('.display-img-and-info');
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => res.data)
    .then(data => {
        // console.log(data)
        const { date, explanation, title, url } = data; 
        displaImgAndInfo.querySelector('img').src = `${url}`;
        // displaImgAndInfo.querySelector('h2').textContent = `${title}`;
        // displaImgAndInfo.querySelector('label').textContent = `${date}`;
        // displaImgAndInfo.querySelector('p').textContent = `${explanation}`;
        
        // popupImage(displaImgAndInfo, url);
    })
    .catch(err => console.log(err));
    
}

getNasaApi();


// Pop up when image is click

function popupImage(displaImgAndInfo, url) {

    const image = displaImgAndInfo.querySelector('img');
    image.addEventListener('click', () => {
        console.log('click')
    })

}
