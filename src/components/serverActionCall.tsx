"use client";

import { useZact } from "zact/client";
import { exampleAction } from "@/server/actions/example";
import { useEffect } from "react";

const ServerActionCall = () => {
  const { mutate, data, isLoading } = useZact(exampleAction);

  useEffect(() => {
    if (isLoading == false && data == null) {
      void mutate({ name: "Visitor!" }).catch((err) => {
        console.error(err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3 className="h-full overflow-hidden italic">
        This Server Action uses the{" "}
        <a
          href="https://github.com/pingdotgg/zact"
          className="text-purple-500 transition-all duration-500 hover:text-purple-400"
        >
          Zact library
        </a>{" "}
        which is made by{" "}
        <a
          href="https://ping.gg"
          className="text-purple-500 transition-all duration-500 hover:text-purple-400"
        >
          Ping Labs
        </a>
      </h3>

      <div className="mt-4 flex flex-col gap-2 border-t pt-4 font-semibold">
        You can find this example file in
        <pre className="mx-auto mt-2 w-full max-w-full overflow-x-auto bg-stone-800 px-1 py-2 md:max-w-xl lg:overflow-hidden">
          <code className="font-extralight">
            client -&gt; /src/app/components/serverActionCall.tsx
            <br />
            server -&gt; src/server/actions/example.ts
          </code>
        </pre>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t pt-4 font-semibold">
        Example output
        <div className="mx-auto mt-2 w-full max-w-full overflow-x-auto bg-stone-800 px-1 py-2 md:max-w-xl lg:overflow-hidden">
          <p className="font-extralight">
            {!data ? "Fetching..." : data?.message}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServerActionCall;
