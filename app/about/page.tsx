import { ModernHeader } from "@/components/modern-header"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen relative bg-gray-900 overflow-hidden">
            <div className="relative z-10 py-6 px-4">
                <ModernHeader />

                <main className="flex flex-col items-center w-full max-w-md mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mt-8 mb-12">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">About SYDE</h1>
                        <p className="text-white/80 text-lg">Get to know who we are!</p>
                    </div>

                    {/* About the Program Section */}
                    <section className="mb-12 w-full">
                        <h2 className="text-white text-2xl font-bold mb-4">About the Program</h2>
                        <div className="space-y-4">
                            <p className="text-white/90 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, elit at ullamcorper interdum,
                                lacus metus ultricies erat, a aliquet mauris libero vel lorem. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia curae; Proin consectetur, velit sed sollicitudin interdum, justo
                                nisl elementum elit, ut malesuada orci velit ac metus. Suspendisse potenti. Integer vehicula, elit nec
                                cursus tincidunt, mi lorem gravida lorem, at tincidunt turpis urna non neque. Phasellus tincidunt felis
                                sit amet turpis viverra, in pulvinar ipsum tempor. Curabitur faucibus, justo vel ultrices tincidunt,
                                magna ligula vestibulum quam, eu convallis augue magna non nisl. Fusce nec arcu eget purus tincidunt
                                sollicitudin.
                            </p>
                            <div className="flex justify-end">
                                <div className="relative">
                                    <Image
                                        src="/syde-family.jpg"
                                        alt="1A SYDE family"
                                        width={200}
                                        height={150}
                                        className="rounded-lg shadow-lg object-cover"
                                    />
                                    <div className="text-xs text-white/70 text-center mt-1">1A SYDE family {"<3"}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About the Profile Section */}
                    <section className="mb-12 w-full">
                        <h2 className="text-white text-2xl font-bold mb-4">About the Profile</h2>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, elit at ullamcorper interdum,
                            lacus metus ultricies erat, a aliquet mauris libero vel lorem. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia curae; Proin consectetur, velit sed sollicitudin interdum, justo
                            nisl elementum elit, ut malesuada orci velit ac metus.
                        </p>
                    </section>

                    {/* Sections */}
                    <section className="w-full text-center">
                        <h2 className="text-white text-3xl font-bold mb-8">Sections</h2>

                        <div className="flex items-center justify-center gap-4 mb-4">
                            <button className="p-2 text-white/70 hover:text-white transition-colors">
                                <ChevronLeft size={24} />
                            </button>

                            <div className="flex gap-3">
                                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg text-sm hover:bg-gray-100 transition-colors">
                                    Extras!
                                </button>
                                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg text-sm hover:from-pink-600 hover:to-orange-600 transition-all">
                                    About
                                </button>
                                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg text-sm hover:bg-gray-100 transition-colors">
                                    Demographics
                                </button>
                            </div>

                            <button className="p-2 text-white/70 hover:text-white transition-colors">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}