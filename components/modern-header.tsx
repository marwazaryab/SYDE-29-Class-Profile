"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "About", number: "1." },
    { name: "Demographics", number: "2." },
    { name: "High School", number: "3." },
    { name: "Academics", number: "4." },
    { name: "Co-op", number: "5." },
    { name: "Lifestyle", number: "6." },
    { name: "Relationships", number: "7." },
    { name: "Extras!", number: "8." },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              {/* Removed the SYDE text from inside the circle */}
            </div>
            <span className="text-white font-medium">SYDE 2029</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 z-50 h-full w-1/4 min-w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-hidden">
            {/* Colored blur spots */}
            <div className="absolute top-24 left-16 w-32 h-32 bg-green-200 opacity-40 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-24 right-10 w-32 h-32 bg-blue-200 opacity-40 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-200 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-black/10">
                <h2 className="text-black text-2xl font-extrabold">Sections</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black hover:bg-black/5"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-3">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded-lg bg-white/80 hover:bg-black/5 transition-colors border border-black/5 shadow-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-black text-lg font-bold mr-2 align-top">{item.number}</span>
                      <span className="text-black text-lg font-extrabold">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
