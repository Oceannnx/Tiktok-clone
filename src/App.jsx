import { VideoContainer } from "./components/VideoContainer";
import data from "./contents/example";

export default function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll overflow-x-hidden no-scrollbar">
        {data.map((item, index) => {
          return (
            <div
              className="w-screen h-screen flex justify-center snap-center snap-normal rounded-2xl"
              key={index}
            >
              <div className="w-3/4 h-screen flex justify-center items-center relative">
                <VideoContainer data={item} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
