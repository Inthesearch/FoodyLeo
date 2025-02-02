import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const intialConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", intialConfig, []);

  if (isLoading) {
    return <p>Fetching data.....</p>;
  }

  if (error) {
    return <Error title="Error found" errorMessage={error}></Error>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
