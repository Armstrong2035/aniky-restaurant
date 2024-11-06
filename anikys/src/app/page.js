import { heroContent } from "../../utils/heroContent";
import Home from "../../component/home/Home";

export default function page() {
  return (
    <div>
      <Home heroContent={heroContent} />
    </div>
  );
}
