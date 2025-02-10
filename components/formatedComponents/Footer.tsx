import Link from "next/link";
import { HomeIcon, ClockIcon, ListBulletIcon, InfoCircledIcon, LockClosedIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white shadow-inner rounded-t-2xl">
            <div className="flex justify-around items-center h-16">

                {/* Início */}
                <Link href="/" className="group text-center flex flex-col items-center transition-transform duration-300 hover:scale-110">
                    <HomeIcon className="w-6 h-6 mb-1 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-xs group-hover:text-blue-400">Início</p>
                </Link>

                {/* Pré FSY */}
                <Link href="/preFSY" className="group text-center flex flex-col items-center transition-transform duration-300 hover:scale-110">
                    <ClockIcon className="w-6 h-6 mb-1 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-xs group-hover:text-blue-400">Pré FSY</p>
                </Link>

                {/* Regras */}
                <Link href="/regras" className="group text-center flex flex-col items-center transition-transform duration-300 hover:scale-110">
                    <LockClosedIcon className="w-6 h-6 mb-1 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-xs group-hover:text-blue-400">Regras</p>
                </Link>

                {/* Dias */}
                <Link href="/dias" className="group text-center flex flex-col items-center transition-transform duration-300 hover:scale-110 relative">
                    <ListBulletIcon className="w-6 h-6 mb-1 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-xs group-hover:text-blue-400">Dias</p>
                </Link>
            </div>
        </footer>

    )
}