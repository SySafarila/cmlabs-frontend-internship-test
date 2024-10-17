/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const CategoryPage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getMeals(router.query.category);
    }
  }, [router]);

  const getMeals = async (category) => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php`,
        {
          params: {
            c: category,
          },
        }
      );
      setMeals(res.data.meals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error, check console");
      console.error(error);
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

  const Meals = () => {
    return (
      <div className="max-w-screen-md mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 p-5 md:px-0">
        {meals?.length > 0 ? (
          meals.map((meal, index) => (
            <Link
              href={`/categories/${router.query.category}/${meal.idMeal}`}
              key={index}
              className="relative rounded-2xl overflow-hidden group w-full"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMealThumb}
                className="w-full group-hover:scale-110 transition-all h-full object-contain"
              />
              <span className="absolute left-0 top-0 bg-black/30 w-full h-full flex justify-center items-center group-hover:bg-black/40">
                <span className="font-bold text-white text-xl capitalize block text-center px-2">
                  {meal.strMeal}
                </span>
              </span>
            </Link>
          ))
        ) : (
          <p>Tidak Ada Data</p>
        )}
      </div>
    );
  };

  const Loading = () => {
    return (
      <div className="max-w-screen-md mx-auto py-10 md:py-20">
        <p className="text-center">Loading Categories...</p>
      </div>
    );
  };

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
        <span className="flex items-center gap-2 text-gray-500">
          {router.query.category ?? "..."}
        </span>
      </div>
      <div className="max-w-screen-md mx-auto px-5 md:px-0">
        <h1 className="text-3xl text-gray-700">{`${
          router.query.category ?? "..."
        } Meals`}</h1>
      </div>
      {loading ? <Loading /> : <Meals />}
    </>
  );
};

export default CategoryPage;
