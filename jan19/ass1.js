var reviews = [
    {
       id: 1,
       name: "THOR",
       job: "ACTOR",
       img: "https://cdn.vox-cdn.com/thumbor/9eMMS0KrIzKbHN0kZM0Av1yVbOg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9490719/thor_big.jpg",
       text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus ullam perspiciatis quisquam tenetur consequuntur necessitatibus quos! Cum reiciendis inventore, eligendi doloribus aliquid animi facere ea quam quos quo quae.",
    },
    {
       id: 2,
       name: "VIRAT KOHLI",
       job: "CRICKETER",
       img: "https://www.pinkvilla.com/imageresize/virat-kohli-steps-down-as-test-captain.jpg?width=752&format=webp&t=pvorg",
       text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus ullam perspiciatis quisquam tenetur consequuntur necessitatibus quos! Cum reiciendis inventore, eligendi doloribus aliquid animi facere ea quam quos quo quae.",
    },
    {
       id: 3,
       name: "MAHESH BABU",
       job: "ACTOR",
       img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/06/1013450-feature-image-17.jpg",
       text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus ullam perspiciatis quisquam tenetur consequuntur necessitatibus quos! Cum reiciendis inventore, eligendi doloribus aliquid animi facere ea quam quos quo quae.",
    },
    {
       id: 4,
       name: "ROMAN-REIGNS",
       job: "WWE-WRESTLER",
       img: "https://pbs.twimg.com/media/FB6x5A6VEAQGUJm.jpg",
       text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus ullam perspiciatis quisquam tenetur consequuntur necessitatibus quos! Cum reiciendis inventore, eligendi doloribus aliquid animi facere ea quam quos quo quae.",
    },
    {
       id: 5,
       name: "AB-DE-VILLERS",
       job: "CRICKETER",
       img: "https://i.guim.co.uk/img/media/8bbc11933480cab90eda224189d41d661450b797/374_150_4454_2673/master/4454.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=86ffa706a28f90e4b9e15b45b5af7ff3",
       text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi minus ullam perspiciatis quisquam tenetur consequuntur necessitatibus quos! Cum reiciendis inventore, eligendi doloribus aliquid animi facere ea quam quos quo quae.",
    },
 ];
 
 
 var imgElement = document.getElementById('person-img');
 var author = document.getElementById('author');
 var job = document.getElementById('job');
 var info = document.getElementById('info');
 var prevBtn = document.querySelector("#prev-btn");
 var nextBtn = document.querySelector("#next-btn");
 var randomBtn = document.querySelector(".random-btn");
 
 
 
 var currentIndex = 0;
 
 
 
 
 
 
 
 
 prevBtn.addEventListener("click", prevClick);
 
 
 function prevClick() {
    if(currentIndex === 0 ) {
       currentIndex = reviews.length - 1;
    } else {
       currentIndex --;
    }
    updateUserDetails();
 }
 
 
 
 nextBtn.addEventListener("click", nextClick);
 
 
 function nextClick() {
    if(currentIndex === reviews.length - 1) {
       currentIndex = 0;
    } else {
       currentIndex ++;
    }
    updateUserDetails();
 }
 
 
 
 function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
 }
 
 
 
 randomBtn.addEventListener("click", randomaize);
 
 function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    updateUserDetails();
  }
