import { data } from "../../utils/constants";

function Animals({ selectedAnimal}) {
    const animal = data.find((item) => {
        return item.name === selectedAnimal;
    });

    return <img src={animal.image} alt={animal.name} />;
}
export default Animals;
