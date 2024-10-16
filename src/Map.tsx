import ErrorMessage from "./components/ErrorMessage"
import FoodList from "./components/FoodList"

function Map(){
    const foodArray = ['food', 'Mandhi','Biriyani','porotta','Burger']
    // const foodArray:string[] = []

    // if(foodArray.length == 0){
    //     return <h5>No food available</h5>  // return empty message if no food is available  // else return list of food items  // map over foodArray to generate list items  // use key prop to uniquely identify each list item  // return list  // return JSX  // return a div with a list of food items  // return a div with a heading and a list of food items  // return a div with a heading, a list of food items, and a button to add new food  // return a div with a heading, a list of food items, and a butt
    // }

    return (
        <>
        <div>
            <h5>hey its coming...</h5>

            {/* ternory operator */}

            {/* {foodArray.length == 0 ? <h3> hey aint no foood for now </h3> : <h4>hey eat this shit bro</h4>} */}
            <ErrorMessage foodArray={foodArray} ></ErrorMessage>

            {/* condition operator */}
            {foodArray.length == 0 && <h3>hey condition operator works here..</h3>}

            {/* map over array */}

            {/* <ul>

                {foodArray.map((food,i) =>{
                    return <li key={i}>{food}</li>
                })}
            </ul> */}

            <FoodList foodArray={foodArray} ></FoodList>


        </div>

        </>
    )
}

export default Map