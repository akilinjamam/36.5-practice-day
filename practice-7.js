// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।


function showingData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => displayPhoto(json))
}

showingData();

const displayPhoto = photos => {

    const showDiv = document.getElementById('showing-photo')
    photos.forEach(showPhotos => {
        // console.log(showPhotos);

        const newDiv = document.createElement('div');
        newDiv.classList.add('card');

        newDiv.innerHTML = `

        <div class="card">
        <img onclick="showDetails(${showPhotos.id})" src="${showPhotos.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${showPhotos.title}</h5>    
        </div>
        </div>

        `

        showDiv.appendChild(newDiv);
    })
}

const showDetails = info => {
    console.log(info)
    const url = `https://jsonplaceholder.typicode.com/photos`
    fetch(url)
        .then(res => res.json())
        .then(convert => displayDetails(convert[info - 1]))

}

const displayDetails = info => {
    console.log(info)
    const singleCard = document.getElementById('single-card');
    singleCard.textContent = ''
    const newSingleDiv = document.createElement('div');
    newSingleDiv.classList.add('card');

    newSingleDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="${info.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${info.title}</h5>
               
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `

    singleCard.appendChild(newSingleDiv);

}