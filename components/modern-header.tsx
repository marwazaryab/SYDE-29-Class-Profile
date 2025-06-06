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
          <div className="fixed top-0 right-0 z-50 h-full w-1/4 min-w-[280px] bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <h2 className="text-white text-xl font-bold">Sections</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-3">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-white/70 text-xs">{item.number}</span>
                      <div className="text-white text-sm font-medium">{item.name}</div>
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
