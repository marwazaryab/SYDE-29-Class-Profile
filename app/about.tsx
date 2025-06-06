import { ModernHeader } from "@/components/modern-header"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen relative py-6 px-2">
            <ModernHeader />
            <main className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-2 md:px-8">
                <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center mt-8 mb-2">About SYDE</h1>
                <p className="text-white/80 text-xl text-center mb-8">Get to know who we are!</p>

                <section className="mb-8 w-full">
                    <h2 className="text-white text-2xl font-extrabold mb-2">About the Program</h2>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="text-white/90 text-base flex-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, elit at ullamcorper interdum, lacus metus ultricies erat, a aliquet mauris libero vel lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin consectetur, velit sed sollicitudin interdum, justo nisl elementum elit, ut malesuada orci velit ac metus. Suspendisse potenti. Integer vehicula, elit nec cursus tincidunt, mi lorem gravida lorem, at tincidunt turpis urna non neque. Phasellus tincidunt felis sit amet turpis viverra, in pulvinar ipsum tempor. Curabitur faucibus, justo vel ultrices tincidunt, magna ligula vestibulum quam, eu convallis augue magna non nisl. Fusce nec arcu eget purus tincidunt sollicitudin.
                        </p>
                        <div className="flex-shrink-0">
                            <Image src="/syde-family.jpg" alt="1A SYDE family" width={240} height={160} className="rounded-xl shadow-lg" />
                            <div className="text-xs text-white/80 text-center mt-1">1A SYDE family &lt;3</div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 w-full">
                    <h2 className="text-white text-2xl font-extrabold mb-2">About the Profile</h2>
                    <p className="text-white/90 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, elit at ullamcorper interdum, lacus metus ultricies erat, a aliquet mauris libero vel lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin consectetur, velit sed sollicitudin interdum, justo nisl elementum elit, ut malesuada orci velit ac metus.
                    </p>
                </section>

                <section className="w-full flex flex-col items-center">
                    <h2 className="text-white text-3xl font-extrabold mb-4">Sections</h2>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <button className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-md text-lg">Extras!</button>
                        <button className="bg-gradient-to-r from-pink-400 to-orange-400 text-white font-bold px-6 py-3 rounded-full shadow-md text-lg">About</button>
                        <button className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-md text-lg">Demographics</button>
                    </div>
                    <div className="flex justify-between w-full mt-4 px-4">
                        <span className="text-white text-2xl">&lt;&lt;</span>
                        <span className="text-white text-2xl">&gt;&gt;</span>
                    </div>
                </section>
            </main>
        </div>
    )
} 