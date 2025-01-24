import Link from "next/link";
import React from "react";

const page = ({ item }) => {
  // console.log(item);
  return (
    <div className="p-4  mx-auto">
      <Link href={`/ViewPost/${item.id}`}>
        <div className="p-4 border sm:w-full md:w-[400px] h-[100px] rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default page;
