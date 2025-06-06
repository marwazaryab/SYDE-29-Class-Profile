import { ModernHeader } from "@/components/modern-header"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <ModernHeader />
      <main>
        <section className="relative min-h-screen flex flex-col justify-center bg-slate-900 px-8 pt-24">
          <div className="relative z-10 text-left">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-2">A LOOK</h1>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-2">IN</h1>
            <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-4">SYDE</h1>
            <p className="text-2xl md:text-3xl text-white/90 mt-4 ml-50 font-medium">CLASS OF '29!</p>
            <Button
              size="lg"
              className="mt-10 bg-gradient-to-r from-orange-400 via-pink-500 to-green-300 hover:from-orange-500 hover:to-green-400 text-white font-bold px-10 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              LET'S GO!
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
