import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="text-white relative" style={{backgroundColor: '#8B0000'}}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-16">
          <div className="text-base lg:text-lg tracking-widest mb-3 opacity-90">॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥</div>
          <div className="text-sm lg:text-base opacity-70">May all beings be happy, may all beings be healthy</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="text-center">
              <div className="text-base mb-3 opacity-90">॥ श्री ॥</div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-wide">Culture Hatti</h3>
              <div className="text-base mt-2 opacity-90">संस्कृति हट्टी</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-4"></div>
            </div>
            <p className="text-white/90 leading-relaxed text-center text-base lg:text-lg">
              भारत की समृद्ध वस्त्र विरासत का संरक्षण प्रामाणिक हस्तनिर्मित पारंपरिक पोशाक के माध्यम से। संस्कृति का उत्सव, एक धागे में।
            </p>
            <p className="text-white/70 text-sm lg:text-base text-center">
              Preserving India's rich textile heritage through authentic handcrafted traditional wear.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 border border-white/20 h-12 w-12"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 border border-white/20 h-12 w-12"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 border border-white/20 h-12 w-12"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 border border-white/20 h-12 w-12"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl lg:text-2xl font-semibold border-b border-white/20 pb-3">
              त्वरित लिंक | Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> साड़ी (Sarees)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> सूट व लहंगा (Suits & Lehengas)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> आभूषण (Jewelry)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> थैले व सामान (Bags & Accessories)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> पुरुष कुर्ता (Men's Kurta)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> नई आगमन (New Arrivals)
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl lg:text-2xl font-semibold border-b border-white/20 pb-3">
              ग्राहक सेवा | Customer Care
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> साइज़ गाइड (Size Guide)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> शिपिंग व वापसी (Shipping & Returns)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> देखभाल निर्देश (Care Instructions)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> ऑर्डर ट्रैक करें (Track Your Order)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> सामान्य प्रश्न (FAQs)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-base lg:text-lg"
                >
                  <span className="text-yellow-400">•</span> संपर्क करें (Contact Us)
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl lg:text-2xl font-semibold border-b border-white/20 pb-3">
              संपर्क में रहें | Stay Connected
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-white/90">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-base">राजदरबार | Royal Court</div>
                  <div className="text-lg font-medium">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <Mail className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-base">संदेश | Message</div>
                  <div className="text-lg font-medium">hello@culturehatti.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-white/90">
                <MapPin className="h-5 w-5 mt-1 text-yellow-400" />
                <div>
                  <div className="text-base">पता | Address</div>
                  <div className="text-lg font-medium">123 Heritage Street, Cultural District, New Delhi, Bharat</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-white/20 pt-6">
              <p className="text-base text-white/90">समाचार पत्र | Newsletter</p>
              <div className="flex gap-2">
                <Input
                  placeholder="अपना ईमेल दर्ज करें..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
                />
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6"
                >
                  सदस्यता
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center space-y-3">
          <div className="text-base tracking-widest opacity-90">॥ धन्यवाद ॥</div>
          <p className="text-white/90 text-base lg:text-lg">© २०२४ Culture Hatti. सभी अधिकार सुरक्षित | All rights reserved</p>
          <p className="text-white/70 text-sm lg:text-base">
            भारतीय विरासत का संरक्षण १९९९ से | Preserving Indian Heritage Since 1999
          </p>
        </div>
      </div>
    </footer>
  )
}