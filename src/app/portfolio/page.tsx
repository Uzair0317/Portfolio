import Image from "next/image"
export default function Portfolio(){
    return(
        <div className="Portfolio">
            <div className="Portfolio-items">
                My name is <span className="name"> <b>Muhammad Uzair</b></span>
                <br/>
                I am Node.JS Developer
                <div className="photo">
                <Image src="/images/photo.png" alt="Profile" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}