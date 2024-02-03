let input;
let btn = document.getElementById("btn");
let head = document.getElementById("head");
let img = document.getElementById("img");
let category = document.getElementById("category");
let origin = document.getElementById("origin");
let maininfo = document.getElementById("maininfo");
let ytvdo = document.getElementById("ytvdo");
btn.addEventListener("click", ()=>{
    input = document.getElementById("input").value;
    console.log(input)

    async function search(){
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        let data = await res.json();

        if(data.meals == null){
            alert("try searching other items....")
        }
        console.log(data);
        img.src = data.meals[0].strMealThumb;
        img.style.display = 'block';
        ytvdo.style.display = 'block';
        category.innerHTML = data.meals[0].strCategory;
        origin.innerHTML = data.meals[0].strArea;
        maininfo.innerHTML = data.meals[0].strInstructions;
        head.innerHTML = input.toUpperCase();

    }
    search();
})