import { heroContent } from "../../utils/heroContent";
import { menuItems } from "../../utils/menu";
import Home from "../../component/home/Home";
import MenuList from "../../component/home/menu/MenuList";

export default function page() {
  return (
    <div>
      <Home heroContent={heroContent} />
      <MenuList menuItems={menuItems} />
    </div>
  );
}
