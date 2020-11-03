const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');



getMealBtn.addEventListener('click', () =>{
    
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
       // console.log(res.meals[0]);
        createMeal(res.meals[0]);
    })
})

function createMeal(meal){

    //console.log(meal.strMealThumb);

    const ingredients = [];

    for(var i = 1; i<=20; i++){

        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - 
            ${meal[`strMeasure${i}`]}`
            )
        }
        else{
            break;
        }

    }

    console.log(ingredients);

    console.log(meal.strYoutube.slice(-11));

    mealContainer.innerHTML = `
    
        <div class="row">
            <div class="columns five">
                <img src ="${meal.strMealThumb}" alt="Meal Img" />

                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Tag:</strong> ${meal.strTags}</p>


                <h5>Ingredients</h5>
                <ul>
                    ${ingredients.map( ingredient => `
                    
                        <li>${ingredient}</li>
                    `).join('')}

                </ul>


            </div>
            <div class="columns seven">
                <h4>${meal.strMeal}</h4>
                <p> ${meal.strInstructions} </p>
            </div>
        </div>

        <div class="row">
            <h5> Video Recioe </h5>
            <div class = "videoWrapper">
                <iframe src ="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)} " />
            </div>
        </div>
    `;
}