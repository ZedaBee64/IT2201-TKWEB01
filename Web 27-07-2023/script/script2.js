window.onload = function() {
    let m = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for(let im of images)
        im.onmousemove = function() {
            m.src = this.src;
        }
    
    let buttons = document.querySelectorAll(".btn button");
    for (let b of buttons)
        b.onclick = function() {
            let c =this.getAttribute("rel");
            m.src = `image/galaxys8/${c}_1.jpg`;

            for(let i = 0; i< images.length; i++)
                images[i].src =`image/galaxys8/${c}_${i+1}.jpg`;
        }
}