import Image from "next/image";
import Bash from '@/components/pages/bash'
export const metadata = {
    title: "Easy Scripts | Bash",
    description: "Easy to use bash scripts",
};

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between ">
            <Bash />
        </main>
    );
}