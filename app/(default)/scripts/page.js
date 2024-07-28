import Image from "next/image";
import Scripts from '@/components/pages/scripts'
export const metadata = {
    title: "Easy Scripts | Docker",
    description: "Easy to use docker compose files",
};

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between ">
            <Scripts />
        </main>
    );
}