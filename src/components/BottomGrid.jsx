import AirPodsPro from "./AirPodsPro";
import AppleGift from "./AppleGift";
import AppleTV from "./AppleTV";
import Imac from "./Imac";
import Ipad from "./Ipad";
import Iphone15 from "./Iphone15";

export default function BottomGrid() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 p-3">
        <AppleGift />
        <Iphone15 />
        <AirPodsPro />
        <AppleTV />
        <Ipad />
        <Imac />
      </div>
    </>
  );
}
