//this searchImages must be async image 

let searchImages = async (API,value) => {

     //let value = document.getElementById("query").value;
     try
     {
          let res = await fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=${API}&per_page=500&order_by=latest `);
          let data = await res.json();
          //console.log(data);
          return data;
     }
     catch(err)
     {
          console.log(err);
     }
};

//append the data 
let append = (data,container) =>
{
data.forEach(({ alt_description,urls: { small }}) => {
     let div = document.createElement("div");
     let img = document.createElement("img");
     img.src = small;
     // let title = document.createElement("h3");
     // title.innerText = alt_description;
    // div.append(img,title);
    img.setAttribute("class","imageAll")
    div.append(img);
     container.append(div);
     
});
}

export { searchImages ,append };