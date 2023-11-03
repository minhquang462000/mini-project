import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"

const Header = () => {
    return <div className="flex justify-between items-center px-10 py-4 shadow-xl" >
        <div className="w-16 ">
            <img className="rounded-full" src="https://img.freepik.com/free-vector/dragon-mascot-esport-gaming-logo-vector-design_343694-1343.jpg" alt="" /></div>
        <div className="flex items-center gap-4 text-lg border px-4 py-1 rounded-lg w-[500px]">
            <BiSearch />
            <input className="outline-none" type="text" placeholder="Searching ..."/>
        </div>
        <div className="flex gap-4 items-center">
            <div className="text-2xl"><AiOutlineShoppingCart /></div>
            <div className="w-20 ">
                <img  className="rounded-full w-[50px] h-[50px] shadow-black object-cover" src="https://www.mangamag.fr/wp-content/uploads/2023/05/vegeta-meditation-dragon-ball-super.png" alt="" />
            </div>
        </div>




    </div>
}

export default Header