import { ModernHeader } from "@/components/modern-header"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <ModernHeader />
      <main>
        <section className="relative min-h-screen flex flex-col justify-center bg-slate-900 px-8 pt-24">
          <div className="relative z-10 text-left -mt-10">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 ml-[20%] w-max">A LOOK</h1>
            <div className="flex items-center">
              <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 ml-[30%] w-max">IN</h1>
              <h1 className="text-8xl md:text-[12rem] font-extrabold text-white mb-6 ml-8 w-max">SYDE</h1>
            </div>
            <p className="text-3xl md:text-4xl text-white/90 mt-8 ml-[64%] w-max font-bold">CLASS OF '29!</p>
            <Button
              size="lg"
              className="mt-10 bg-gradient-to-r from-orange-400 to-green-300 ml-[70%] hover:from-orange-500 hover:to-green-400 text-black font-extrabold px-10 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              LET'S GO!
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}