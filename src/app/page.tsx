import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="my-4 text-2xl font-extrabold">Examples</h2>
        <div className="w-full overflow-x-hidden">
          <Link
            href="/server-actions"
            className="text-red-500 transition-all duration-500 hover:text-red-400"
          >
            Server Action
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
