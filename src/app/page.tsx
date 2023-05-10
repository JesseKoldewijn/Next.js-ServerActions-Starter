import ServerActionCall from "@/components/serverActionCall";

const page = () => {
  return (
    <div className="inset-0 flex h-full min-h-screen w-full flex-col items-center justify-center bg-black text-gray-300">
      <div className="flex w-10/12 flex-col text-center">
        <h1 className="border-b-2 border-purple-600 pb-6 text-4xl font-extrabold">
          App Router - Starter
        </h1>

        <div className="flex flex-col">
          <h2 className="my-4 text-2xl font-extrabold">
            Server action example
          </h2>
          <div className="w-full overflow-x-hidden">
            <ServerActionCall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
