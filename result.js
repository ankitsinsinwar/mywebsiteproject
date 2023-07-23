
async function getData(){
    try{
    let res=await fetch('db.json')
    //console.log(res.json());
    return res.json()
    }
    catch(err){console.log(err);}
}
//getData()

async function filterItem(cat){
    let data=await getData() 
    var fdata=data.filter((item)=>{
    return (cat===item.category)
    })
    var totaldata=fdata.map((item)=>{
        return(
            `
            <div class="col">
            <div class="card">
              <img src=${item.imagedata} class="card-img-top" alt="...">
              <div class="card-body">
                <h6 class="card-title">product name-${item.pname}</h6>
                <p class="card-text">price-rs.${item.price}   category-${item.category}</p>
                <button class="btn btn-info mt-4">Add to catd</button>
              </div>
            </div>
          </div>

            
            ` 
        )
       })
       document.getElementById("root").innerHTML=totaldata
}









async function getUser(){
    let data=await getData()
   // console.log(data);
   var totaldata=data.map((item)=>{
    return(
        `
        <div class="row">
        <div class="card">
          <img src=${item.imagedata} class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">product name-${item.pname}</h6>
            <p class="card-text">price-rs.${item.price}  <br/> category-${item.category}</p>
            <button class="btn btn-info mt-2">Add to catd</button>
          </div>
        </div>
      </div>
        
        ` 
    )
   })
   document.getElementById("root").innerHTML=totaldata
}
getUser() 