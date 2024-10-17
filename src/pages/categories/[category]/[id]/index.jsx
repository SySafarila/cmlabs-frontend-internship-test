/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const MealDetail = () => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getMealDetail(router.query.id);
    }
  }, [router]);

  const getMealDetail = async (id) => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php`,
        {
          params: {
            i: id,
          },
        }
      );
      console.log(res.data.meals[0]);

      setMeal(res.data.meals[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const ChevronRight = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
        className="fill-gray-700"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
      </svg>
    );
  };

  const Meal = () => {
    return <div className=""></div>;
  };

  const Loading = () => {
    return (
      <div className="max-w-screen-md mx-auto py-10 md:py-20">
        <p className="text-center">Loading Categories...</p>
      </div>
    );
  };

  const Recipe = ({ measure, ingredient }) => {
    if (ingredient) {
      return <li>{`${measure ? measure + " " : ""}${ingredient ?? ""}`}</li>;
    } else {
      return null;
    }
  };

  const YoutubeEmbed = ({ url }) => {
    try {
      const urlParse = new URL(url);

      return (
        <iframe
          className="w-full my-3"
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${
            urlParse.search.split("?v=")[1]
          }`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      );
    } catch (error) {
      return null;
    }
  };

  const Body = () => {
    if (error) {
      return <p className="text-center py-5">Error, Meal not found</p>;
    }
    return (
      <>
        <div
          id="breadcrumbs"
          className="flex items-center gap-2 max-w-screen-md mx-auto p-5 md:px-0 flex-wrap"
        >
          <Link href={`/`} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg>
            <span className="text-gray-700 font-semibold">Home</span>
          </Link>
          <ChevronRight />
          <Link
            href={`/`}
            className="flex items-center gap-2 text-gray-700 font-semibold"
          >
            Foods
          </Link>
          <ChevronRight />
          <Link
            href={`/categories/${router.query.category}`}
            className="flex items-center gap-2 text-gray-700 font-semibold"
          >
            {router.query.category ?? "..."}
          </Link>
          <ChevronRight />
          <span className="flex items-center gap-2 text-gray-500">
            {meal?.strMeal ?? "..."}
          </span>
        </div>
        <div className="max-w-screen-md mx-auto px-5 md:px-0">
          <h1 className="text-3xl text-gray-700 md:mt-5">{meal?.strMeal}</h1>
          <hr className="md:my-10 my-5" />
          <p className="text-[#fd5c5c] font-semibold mb-4">
            {meal?.strArea ?? "..."} Culinary
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="rounded-2xl w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl text-gray-700">Instructions</h2>
              <p className="whitespace-pre-line text-gray-700">
                {meal?.strInstructions}
              </p>
              <h2 className="text-3xl text-gray-700">Recipes</h2>
              <ul className="list-disc list-inside">
                <Recipe
                  measure={meal?.strMeasure1}
                  ingredient={meal?.strIngredient1}
                />
                <Recipe
                  measure={meal?.strMeasure2}
                  ingredient={meal?.strIngredient2}
                />
                <Recipe
                  measure={meal?.strMeasure3}
                  ingredient={meal?.strIngredient3}
                />
                <Recipe
                  measure={meal?.strMeasure4}
                  ingredient={meal?.strIngredient4}
                />
                <Recipe
                  measure={meal?.strMeasure5}
                  ingredient={meal?.strIngredient5}
                />
                <Recipe
                  measure={meal?.strMeasure6}
                  ingredient={meal?.strIngredient6}
                />
                <Recipe
                  measure={meal?.strMeasure7}
                  ingredient={meal?.strIngredient7}
                />
                <Recipe
                  measure={meal?.strMeasure8}
                  ingredient={meal?.strIngredient8}
                />
                <Recipe
                  measure={meal?.strMeasure9}
                  ingredient={meal?.strIngredient9}
                />
                <Recipe
                  measure={meal?.strMeasure10}
                  ingredient={meal?.strIngredient10}
                />
                <Recipe
                  measure={meal?.strMeasure11}
                  ingredient={meal?.strIngredient11}
                />
                <Recipe
                  measure={meal?.strMeasure12}
                  ingredient={meal?.strIngredient12}
                />
                <Recipe
                  measure={meal?.strMeasure13}
                  ingredient={meal?.strIngredient13}
                />
                <Recipe
                  measure={meal?.strMeasure14}
                  ingredient={meal?.strIngredient14}
                />
                <Recipe
                  measure={meal?.strMeasure15}
                  ingredient={meal?.strIngredient15}
                />
                <Recipe
                  measure={meal?.strMeasure16}
                  ingredient={meal?.strIngredient16}
                />
                <Recipe
                  measure={meal?.strMeasure17}
                  ingredient={meal?.strIngredient17}
                />
                <Recipe
                  measure={meal?.strMeasure18}
                  ingredient={meal?.strIngredient18}
                />
                <Recipe
                  measure={meal?.strMeasure19}
                  ingredient={meal?.strIngredient19}
                />
                <Recipe
                  measure={meal?.strMeasure20}
                  ingredient={meal?.strIngredient20}
                />
              </ul>
            </div>
          </div>
          {meal?.strYoutube && (
            <div>
              <h2 className="text-3xl text-gray-700 md:text-center">
                Tutorials
              </h2>
              <YoutubeEmbed url={meal?.strYoutube} />
            </div>
          )}
        </div>
      </>
    );
  };

  return <>{loading ? <Loading /> : <Body />}</>;
};

export default MealDetail;
