import ServerActionCall from "@/components/serverActionCall";

export const metadata = {
  title: "Server Actions",
};

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="my-4 text-2xl font-extrabold">Server action example</h2>
        <div className="w-full overflow-x-hidden">
          <ServerActionCall />
        </div>
      </div>
    </>
  );
};

export default page;
