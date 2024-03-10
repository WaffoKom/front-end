import React from "react";
import { articles, themes } from "../articles.json";

export const Articles = () => {
  return (
    <div className="post-feed  w-full md:grid grid-cols-3 grid-rows-3  gap-y-[8rem]  overflow-visible bg-[#EFF3F6]">
      {articles.map((article) => {
        articles.tags === themes.name ? themes.name : "Theme non connu";
        return (
          <article
            className="flex flex-col border-[1.5] border-[#EFF3F6] mt-[-5rem] mx-8 min-w-80 rounded-lg shadow-xl"
            key={article.id}
          >
            <a
              className="card-image  h-40 rounded-lg text-gray-300 img"
              href="#"
            >
              <img
                src={article.img}
                alt="oups not image"
                className="h-40 object-cover w-full rounded-t-lg"
              />
            </a>
            <div className="article-content h-52 flex p-4">
              <a href="#">
                <header className="post-card-header">
                  <span className="post-card-tags font-bold text-lg "></span>
                  {article.tags}
                  <h2 className="post-card-title font-bold">{article.title}</h2>
                </header>
                <div className="post-card-description font-thin text-sm flex flex-col flex-wrap text-center">
                  <p className="post-card-content">{article.content}</p>
                </div>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};
