//Link :-  https://api.unsplash.com/search/photos?query=${cat}&client_id=zzVz2vwLxY4BdqojW2ejVDUb1pR0IL4sJV2O_kUK4Cs&per_page=500&order_by=latest 
const API="zzVz2vwLxY4BdqojW2ejVDUb1pR0IL4sJV2O_kUK4Cs";
import { navbar } from "../components/navbar.js";
let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();


//importing the fetch
import { searchImages ,append} from "./fetch.js";

let search = async (event) => {
     if(event.key === "Enter")
     {
          let value = document.getElementById("query").value;
          let data = await searchImages(API,value);//it give promis
         
          console.log(data)
          let container=document.getElementById("container");
          container.innerHTML=null;//to remove the previous element data in search box
          append(data.results,container);
          //return data;
     }
};

document.getElementById("query").addEventListener("keydown",search);

//implementation of making button functional
let categories= document.getElementById("categories").children;
//console.log(categories);
//don't use arrow function here it will give the error
function cSearch()
{
     //console.log(this.id);
     searchImages(API,this.id).then((data) => { //it give promis
         
          console.log(data)
          let container=document.getElementById("container");
          container.innerHTML=null;//to remove the previous element data in search box
          append(data.results,container);
     });
}
for(let el of categories)
{
     el.addEventListener("click",cSearch)
}

//fetch data

// let searchImages = async () => {
//       let value = document.getElementById("query").value;
//       try
//       {
//            let res = await fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=${API}&per_page=500&order_by=latest `);
//            let data = await res.json();
//            console.log(data);
//            return data;
//       }
//       catch(err)
//       {
//            console.log(err);
//       }
// }
