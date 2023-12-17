import {UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/mode-toggle";

export default function Home() {
    return (
        <div className="text-gray-500">
            <UserButton afterSignOutUrl="/"/>
            <ModeToggle/>
        </div>
    )
}
