import Link from "next/link"
export default function Header (){
    return(
        <div className="Header">
            <div className="Header-buttons">
                <Link href={"/"}>
                <li>
                    Home</li>
                    </Link>
                    <Link href ={"/portfolio"}>
                   <li>
                    Portfolio</li> </Link>

                    <Link href ={"/about-us"}>
                    <li>
                        About us
                        </li></Link>

                        <Link href ={"/contact-us"}>
                        <li>
                            Contact us
                            </li></Link>
            </div>
        </div>
    )
}