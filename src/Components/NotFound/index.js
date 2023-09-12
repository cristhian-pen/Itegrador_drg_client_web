import Navbar from "../Navbar";
import NFound from "../../animations/anim";


export default function NotFound() {
    return (
        <>
            <Navbar />
            <section>
                <div className="mt-20 z-10 flex items-center justify-center ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <a href="/" >
                            <NFound />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}