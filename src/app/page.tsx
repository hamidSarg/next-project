import {Header} from "@components/header/app";
import {AnimatedFlash} from "@components/animate/app";
import {Body} from "@components/body";


export default function Home() {
    return (
        <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-r flex-col  ">
            <Header/>
            <AnimatedFlash/>
            <Body/>
        </div>
    );
}


