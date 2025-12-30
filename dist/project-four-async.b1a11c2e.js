let e=async(e,t)=>await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${e}&page=1&per_page=${t}&key=53972263-c9e9823441f8f52f69cf141bb`).then(e=>e.json()).then(e=>e.hits),t=document.querySelector(".gallery"),a=document.getElementById("search-input"),s=document.getElementById("load-more");localStorage.setItem("per_page",12);let i=localStorage.getItem("per_page"),l="",n=(a,s)=>(t.innerHTML="",e(a,s).then(e=>{let a=e.map(e=>`<li class="photo-item">
            <div class="photo-card">
                <img src="${e.largeImageURL}" alt="" />
                <div class="stats">
                    <p class="stats-item">
                        <i class="material-icons">${e.likes}</i>
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">${e.views}</i>
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">${e.comments}</i>
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">${e.downloads}</i>
                    </p>
                </div>
            </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a)}));a.addEventListener("input",_.debounce(e=>{e.preventDefault(),0===(l=e.target.value).length&&(t.innerHTML=""),n(l,i)},500)),s.addEventListener("click",e=>{e.preventDefault(),i=Number(i)+Number(i),localStorage.setItem("per_page",i),n(l,i)});
//# sourceMappingURL=project-four-async.b1a11c2e.js.map
