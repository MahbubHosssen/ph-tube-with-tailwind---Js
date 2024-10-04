


// Buttons Fetch Data
const fetchButtons = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayButtons(data.categories))
}

// Display Buttons
const displayButtons = (buttons) => {
    const btnContainer = document.querySelector(".btn-container")
    buttons.forEach(btn => {
        const button = document.createElement("button")
        button.classList = "btn"
        button.innerText = btn.category
        btnContainer.append(button)
    });
}
fetchButtons()


// Fetch Videos
const fetchVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data))
}

// Calculate Time
const calculateTime = (time) =>{
    // console.log()
    const hour = parseInt(time / 3600)
    const remainingSecond = time % 3600
    const minute = parseInt(remainingSecond / 60)
    // const second = minute % 60;
    // const second 
    return (`${hour} hour ${minute} minute ago`)
};

{/*  */}
const displayVideos = (videos) => {
    const videoContainer = document.querySelector(".video-container")
    
    videos.videos.forEach(video => {
        console.log(video)
        // calculateTime(video.others.posted_date)
        // console.log()
        const divElement = document.createElement("div")
        divElement.classList = "w-[220px], my-6"
        divElement.innerHTML = `
        <div class="w-[280px] h-[180px] object-fit relative">
            <img class="absolute w-full h-full" src=${video.thumbnail} alt="">
            ${video.others.posted_date?.length == 0? "": `<p class="absolute right-2 bottom-2 bg-black text-white py-1 px-3 rounded-md text-sm">${calculateTime(video.others.posted_date)}</p>`}
            
        </div>
        <div class="flex gap-2 mt-2">
            <div class="logo object-cover">
                <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture}/>
            </div>
            <div class="space-y-2">
                <h2 class="font-semibold text-md">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-400 text-sm">${video.authors[0].profile_name}</p>

                    ${video.authors[0].verified == true ? `<span class="varified"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" fill="#4dd0e1"></circle><path fill="#fff" d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659l-6.083-6.084c-0.879-0.878-0.879-2.303,0-3.182 c0.878-0.879,2.304-0.879,3.182,0l6.083,6.084c0.879,0.878,0.879,2.303,0,3.182C23.643,30.47,23.067,30.69,22.491,30.69z"></path><path fill="#fff" d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659c-0.879-0.878-0.879-2.303,0-3.182l9.539-9.539 c0.878-0.879,2.304-0.879,3.182,0c0.879,0.878,0.879,2.303,0,3.182l-9.539,9.539C23.643,30.47,23.067,30.69,22.491,30.69z"></path>
                    </svg></span>
                </span>` : ""}
                    
                
            </div>
            <p class="text-gray-400 text-sm">${video.others.views} views</p>
        </div>
        `
        videoContainer.appendChild(divElement)
    })
}
fetchVideos()