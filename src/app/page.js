import Link from "next/link";
import AllPost from '../components/AllPost/page'

export default async  function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json()
  return (
   <>
    <div className="min-h-screen">
      <h1 className="text-center text-3xl font-bold my-8 ">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3">
        {
          posts.slice(0,24).map((item,idx)=><AllPost item={item} key={idx}></AllPost>)
        }

      </div>


    </div>
   </>
  );
}
