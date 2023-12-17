import {UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="text-gray-500">
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}
