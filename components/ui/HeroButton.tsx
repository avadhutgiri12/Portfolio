import Link from "next/link";
import "@/app/kinetic.css";




export default function HeroButtton(){
    return(
        <Link href="/business">

        <button className="herobutton">
        <div><span>Bussiness</span></div>
        </button>
        </Link>


    );
}