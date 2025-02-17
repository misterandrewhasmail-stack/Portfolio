const randomUserUrl="https://randomuser.me/api/?results=12&inc=dob,name,gender,location,phone,email,picture",gallery=document.getElementById("gallery"),header=document.querySelector("header"),searchHTML=`  <form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>`;function showModal(e){let t=document.createElement("div");t.classList.add("modal-container"),t.innerHTML=`
    <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        ${e.picture?`<img class="modal-img" src="${e.picture.large}" alt="profile picture">`:""}
        <h3 class="modal-name cap">${e.name.first||""} ${e.name.last||""}</h3>
        <p class="modal-text">${e.email||""}</p>
        <p class="modal-text cap">${e.location.city||""}</p>
        <hr>
        ${e.phone?`<p class="modal-text">${e.phone}</p>`:""}
        ${e.location.street?`<p class="modal-text">${e.location.street.number||""} ${e.location.street.name||""}, ${e.location.city||""}, ${e.location.state||""} ${e.location.postcode||""}</p>`:""}
        ${e.dob?`<p class="modal-text">Birthday: ${new Date(e.dob.date).toLocaleDateString()}</p>`:""}
      </div>
    </div>
    <div class="modal-btn-container">
      <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
      <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
  `,document.body.appendChild(t);let a=t.querySelector("#modal-prev");a.addEventListener("click",()=>{handleModalNavigation("prev"),t.remove()});let n=t.querySelector("#modal-next");n.addEventListener("click",e=>{handleModalNavigation("next"),t.remove()});let r=t.querySelector("#modal-close-btn");r.addEventListener("click",()=>{t.remove()})}function handleModalNavigation(e){"next"===e?currentIndex=(currentIndex+1)%users.length:"prev"===e&&(currentIndex=(currentIndex-1+users.length)%users.length);let t=users[currentIndex];showModal(t)}header.insertAdjacentHTML("beforeend",searchHTML);let users=[],currentIndex=0;function displayGallery(e){e.forEach(e=>{generateHTML(e)})}function generateHTML(e){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`
    <div class="card-img-container">
      <img class="card-img" src="${e.picture.medium}" alt="profile picture">
    </div>
    <div class="card-info-container">
      <h3 class="card-name cap">${e.name.first} ${e.name.last}</h3>
      <p class="card-text">${e.email}</p>
      <p class="card-text cap">${e.location.city}, ${e.location.state}</p>
    </div>
  `,t.addEventListener("click",()=>{showModal(e)}),gallery.appendChild(t)}fetch("https://randomuser.me/api/?results=12&inc=dob,name,gender,location,phone,email,picture").then(e=>e.json()).then(e=>{displayGallery(users=e.results)}).catch(e=>console.error("Error fetching data:",e));const searchInput=document.getElementById("search-input");searchInput.addEventListener("input",()=>{let e=searchInput.value.trim().toLowerCase(),t=document.querySelectorAll(".card");t.forEach(t=>{let a=t.querySelector(".card-name").textContent.trim().toLowerCase();a.includes(e)?t.style.display="block":t.style.display="none"})});