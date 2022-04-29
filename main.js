const api="https://forkify-api.herokuapp.com/api/search?q="

var recipes=[];
gutData ('pasta')

function gutData (mala){
  let xttps=new XMLHttpRequest()
  xttps.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${mala}`)
  xttps.send()
  xttps.addEventListener('readystatechange',function(){
  if(xttps.readyState==4 &&xttps.status==200){
    recipes=JSON.parse(xttps.response).recipes
  console.log(recipes)
  display()
  }
  })
}
let linkes=document.querySelectorAll('.nav-link')
for (let i = 0; i < linkes.length; i++) {
  linkes[i].addEventListener('click',function(e){
    console.log(e.target.text)
   var valueData=e.target.text
gutData (valueData)

  })
  
}



function display(){
let momery="" 

for (let i = 0; i < recipes.length; i++) {
  momery +=`
  <div class="col-md-3">
  <div class="past">
          
          <img  class="my-2 " src="${recipes[i].image_url}" alt="">
          <h2 class="textcolor" >${recipes[i].title}</h2>
          <p class="textcolor">${recipes[i].publisher}</p>
          <a  target="_blank" href="${recipes[i].source_url}" class="btn btn-info my-2">source</a>
          <a  href="" class="btn btn-warning my-2">details</a>

  </div>

</div>

`
  
}

document.getElementById("rowData").innerHTML=momery
}