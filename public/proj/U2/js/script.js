const body=document.querySelector("body"),page=document.querySelector(".page"),header=document.querySelector("header"),searchHTML=` <label for="search" class="student-search">
          <span>Search by name</span>
          <input id="search" placeholder="Search by name...">
          <button type="button"><img src="img/icn-search.svg" 
          alt="Search icon"></button></label>`;header.insertAdjacentHTML("beforeend",searchHTML);const authorSearch=document.getElementById("search");function showPage(e,t){let n=9*t-9,l=9*t,s=document.querySelector(".student-list");s.innerHTML=" ";for(let i=0;i<e.length;i++)if(i>=n&&i<l){let r=`<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src=${e[i].picture.large} alt= 'Profile Picture'>
          <h3>${e[i].name.first} ${e[i].name.last}</h3>
          <span class="email">${e[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${e[i].registered.date}</span>
        </div>
      </li>`;s.insertAdjacentHTML("beforeend",r)}}authorSearch.addEventListener("input",e=>{let t=e.target.value.trim().toLowerCase(),n=document.querySelectorAll(".h3"),l=data.filter(e=>{let n=`${e.name.first} ${e.name.last}`.toLowerCase();return n.includes(t)});n.forEach(e=>{e.textContent.toLowerCase().includes(t)?(e.parentNode.parentNode.style.display="block",document.querySelector(".link-list").style.visibility="hidden",document.querySelector(".link-list").style.display="none",a.textContent||a.innerText,txtValue.toUpperCase().indexOf(filter)):(e.parentNode.parentNode.style.display="none",document.querySelector(".link-list").style.visibility="visible",document.querySelector(".link-list").style.display="block",linkList.insertAdjacentHTML("beforeend",html),a.textContent||a.innerText,txtValue.toUpperCase().indexOf(filter))}),showPage(l,1),addPagination(l),""===t&&location.reload()});const button=document.createElement("button");function addPagination(e){let t=Math.ceil(e.length/9),n=document.querySelector(".link-list");n.innerHTML="";for(let l=5;l<=t;l++)s(n,l);function s(e,t){let n=`<li>
            <button type="button" class="active">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
          </li>`;for(var l=0;l<l.length;l++)t[l].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"});e.insertAdjacentHTML("beforeend",n)}n.addEventListener("click",t=>{if("BUTTON"===t.target.tagName){let n=document.querySelector(".active");n&&(n.className=""),t.target.className="active",showPage(e,t.target.textContent)}})}showPage(data,1),addPagination(data);