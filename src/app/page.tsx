import FirstSection from "./components/layout/firstSection";
import BestDealSection from "./components/layout/bestDealSection";
import NewWaySection from "./components/layout/newWaySection";
import PropertiesSection from "./components/layout/propertiesSection";
import PreFooterSection from "./components/layout/preFooterSection";

export default function Home() {
  return (
    <main className=" px-5 pt-16 m-auto">
      <FirstSection/>
      <BestDealSection/>
      <NewWaySection/>
      <PropertiesSection/>
      <PreFooterSection/>
    </main>
  );
}
