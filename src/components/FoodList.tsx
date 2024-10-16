import List from "./List"

function FoodList({ foodArray }: any) {
    return (
        <ul>
            {foodArray.map((item: any) => {
                return <List item={item} />;
            })}
        </ul>
    );
}

export default FoodList