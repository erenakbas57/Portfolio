import SocialCard from "@/components/my/socialLink";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-4 sm:mb-6">
          HAKKIMDA
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 sm:p-6 shadow-xl overflow-x-auto">
              <pre className="text-orange-400 dark:text-orange-300 font-mono text-sm sm:text-base">
                <code>
                  {`const developer = {
    name: "Muhammed Eren AKBAŞ",  
    role: "Yazılım Geliştirici",
    birthdate: "2 Kasım 2001",
    location: "Gaziosmanpaşa, İstanbul",
    military: "Muaf",
    driving_license: "B1",
    hobbies: [
        "Yazılım Geliştirme",
        "Kitap Okuma",
        "Kültürel Gezi - Etkinlik"
    ],
    entrepreneurship: {
        company: "Diyojen Yazılım",
        position: "Kurucu & CTO",
        founded: 2025,
        description: "DiogeniusAI",
        investment: "250.000 TL"
    },
}`}
                </code>
              </pre>
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="max-w-sm w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-orange-200 dark:border-orange-900 overflow-hidden p-6">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border-4 border-orange-500 dark:border-orange-700 overflow-hidden shadow-lg">
                  <img
                    src="https://avatars.githubusercontent.com/u/73079154?v=4"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
                  Muhammed Eren AKBAŞ
                </h2>
                <p className="text-orange-600 dark:text-orange-400 text-lg">
                  Yazılım Geliştirici
                </p>
                <Link
                  href="/projects"
                  className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 dark:hover:bg-orange-700 transition-all duration-300"
                >
                  Projelerime Göz At
                </Link>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
                    İletişim
                  </h3>
                  <SocialCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
