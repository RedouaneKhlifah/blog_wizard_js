import { useEffect, useState } from "react";

import { Category, Session } from "../interfaces/Categories";
import Data from "../util/Data";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setCategories(Data);
  }, []);

  const handelClick = (id: string) => {
    const Category = categories.find((category: Category) => {
      return category.id == id;
    });
    setCategory(Category || null);
    setSession(null);
  };

  const handelSessionClick = (id: string) => {
    const Session = category?.sessions.find((session: Session) => {
      return session.id == id;
    });

    setSession(Session || null);
  };

  return (
    <>
      <div>
        <p className=" font-bold text-xl ">Session Categories</p>
      </div>
      <div className="grid grid-cols-3 pt-4 ">
        {categories.map(({ id, name }: Category) => (
          <div
            key={id}
            className={`mt-6 cursor-pointer  ${
              category?.id == id && " bg-gray-500 w-fit px-2 text-white "
            }`}
            onClick={() => handelClick(id)}
          >
            <p className="text-sm">{name}</p>
          </div>
        ))}
      </div>
      {category && (
        <div className=" pt-6">
          <p className=" font-bold text-xl text-gray-500  ">
            {category.name} Sessions
          </p>

          <div className="flex gap-4 pt-4">
            {category.sessions &&
              category.sessions.map((ses: Session) => (
                <div
                  key={ses.id}
                  className={`border-2 p-4 border-gray-600 cursor-pointer text-gray-900 ${
                    session && session.id === ses.id
                      ? "border-green-400 text text-green-400"
                      : ""
                  }`}
                  onClick={() => {
                    handelSessionClick(ses.id);
                  }}
                >
                  <p className=" font-bold text-md">{ses.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="">{ses.speaker.name}</p>
                    <div
                      className={
                        "  border-l-[2px] h-4 border-gray-500 " +
                        (session && session.id === ses.id
                          ? "border-green-400 text text-green-400"
                          : "")
                      }
                    ></div>
                    <p className="">{ses.speaker.org}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {session && (
        <div>
          <div className="pt-6">
            <p className=" font-bold text-md pb-3">{session.name}</p>
            <p className="text-sm">{session.desc}</p>
          </div>
          <div>
            <p className=" font-semibold pt-4 pb-1 ">{session.speaker.name}</p>
            <p className="text-sm">
              {session.speaker.title} at {session.speaker.org}
            </p>
            <p className="p-4 text-sm">{session.speaker.bio}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
