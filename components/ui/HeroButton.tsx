import Link from "next/link";
import "@/app/kinetic.css";




export default function HeroButtton(){
    return(
        <Link href="/business">

        <button className="herobutton mt-6">
        <div><span>Bussiness</span></div>
        </button>
        </Link>


    );
}