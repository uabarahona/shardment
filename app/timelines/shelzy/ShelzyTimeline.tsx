'use client'

import { useLanguage } from "@/app/guides/music-release/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Music, Briefcase, Star } from "lucide-react"
import { useEffect, useState } from "react"


const translations = {
  en: {
    title: "Music Production Timeline",
    commercialization: "Commercialization",
    specialization: "Specialization",
    vacation: "Vacation",
  },
  es: {
    title: "Cronograma de Producción Musical",
    commercialization: "Comercialización",
    specialization: "Especialización",
    vacation: "Vacaciones",
  },
}

const monthTranslations = {
  en: ["November", "December", "January", "February"],
  es: ["Noviembre", "Diciembre", "Enero", "Febrero"],
}

const timelineData = [
  {
    month: "November",
    periods: [
      {
        date: "November 1 - 15",
        tasks: [
          { type: "Commercialization", description: 'Song "No llames", polish the harmonies and vocal production' },
          { type: "Commercialization", description: 'Song "No llames", polish the song production of production' },
          { type: "Specialization", description: "Basic mastering of the demo song" },
          { type: "Specialization", description: "Basic mixing of the demo song" },
        ],
      },
      {
        date: "November 18 - 22",
        tasks: [
          { type: "Commercialization", description: 'Song "No llames", organize the project and export stems with clear names' },
          { type: "Commercialization", description: 'Song "No llames", generate lyrics and phonetic lyrics' },
          { type: "Commercialization", description: 'Song "No llames", upload all content to the cloud' },
          { type: "Specialization", description: "Basic mixing of the demo song" },
          { type: "Specialization", description: "Live review of mixing and mastering" },
        ],
      },
      {
        date: "November 25 - 29",
        tasks: [
          { type: "Commercialization", description: "Begin the creation of the narrative for the 3 Songs" },
          { type: "Commercialization", description: 'Song "Marte", Beat creation of the song, complete the rest' },
          { type: "Specialization", description: "Advanced mastering of the demo song" },
        ],
      },
    ],
  },
  {
    month: "December",
    periods: [
      {
        date: "December 2 - 6",
        tasks: [
          { type: "Commercialization", description: "Review of the narrative for the 3 songs" },
          { type: "Commercialization", description: 'Song "Marte", Complete the lyrics with harmonies and vocal effect and start the recording' },
          { type: "Specialization", description: "Advanced mastering of the demo song" },
        ],
      },
      {
        date: "December 9 - 13",
        tasks: [
          { type: "Commercialization", description: 'Song "Marte", polish beat and voices to match better' },
          { type: "Specialization", description: "Advanced mixing of the demo song" },
        ],
      },
      {
        date: "December 16 - 20",
        tasks: [
          { type: "Commercialization", description: 'Song "Marte", organize the project and export stems with clear names' },
          { type: "Commercialization", description: 'Song "Marte", generate lyrics and phonetic lyrics' },
          { type: "Commercialization", description: 'Song "Marte", upload all content to the cloud' },
          { type: "Specialization", description: "Advanced mixing of the demo song" },
        ],
      },
      {
        date: "December 23 - 24",
        tasks: [
          { type: "Specialization", description: "Live review of the mixed and mastered songs, start courses on song writing" },
        ],
      },
      {
        date: "December 25 - January 01",
        tasks: [
          { type: "Vacation", description: "Company Vacation" },
        ],
      },
    ],
  },
  {
    month: "January",
    periods: [
      {
        date: "January 02 - 03",
        tasks: [
          { type: "Commercialization", description: 'Song "EDM", Beat creation of the song, complete the rest' },
        ],
      },
      {
        date: "January 06 - 10",
        tasks: [
          { type: "Commercialization", description: 'Song "EDM", Complete the lyrics with harmonies and vocal effect and start the recording' },
          { type: "Commercialization", description: 'Song "No LLames", Send to mixing and mastering' },
          { type: "Commercialization", description: 'Song "Martes", Send to mixing and mastering' },
          { type: "Specialization", description: "To be Defined" },
        ],
      },
      {
        date: "January 13 - 17",
        tasks: [
          { type: "Commercialization", description: "Create a list of marketing material to be done based on the narrative" },
          { type: "Commercialization", description: "Start the creation of the marketing material" },
          { type: "Specialization", description: "To be Defined" },
        ],
      },
      {
        date: "January 20 - 24",
        tasks: [
          { type: "Commercialization", description: "Configure platforms to upload the songs" },
          { type: "Commercialization", description: "Configure artist profiles" },
          { type: "Commercialization", description: 'Song "No Llames", upload the song to Ditto on January 24' },
          { type: "Specialization", description: "To be Defined" },
        ],
      },
      {
        date: "January 24 - 31",
        tasks: [
          { type: "Commercialization", description: "Continue the creation of the marketing material" },
          { type: "Commercialization", description: "Create the pre-release campaign and possible release" },
          { type: "Specialization", description: "To be Defined" },
        ],
      },
    ],
  },
  {
    month: "February",
    periods: [
      {
        date: "February 3 - 7",
        tasks: [
          { type: "Commercialization", description: "Launch the pre-release campaign" },
          { type: "Commercialization", description: "Launch the marketing content and paid ads" },
          { type: "Specialization", description: "To be Defined" },
        ],
      },
      {
        date: "February 10 - 14",
        tasks: [
          { type: "Commercialization", description: "Launch the song", highlight: true },
          { type: "Commercialization", description: "Pitch the song on playlist platforms" },
          { type: "Commercialization", description: "Monitor the song" },
          { type: "Specialization", description: "To be Defined" },
        ],
      },
    ],
  },
]

const spanishTimelineData = [
  {
    month: "Noviembre",
    periods: [
      {
        date: "1 - 15 de Noviembre",
        tasks: [
          { type: "Commercialization", description: 'Canción "No llames", pulir las armonías y la producción vocal' },
          { type: "Commercialization", description: 'Canción "No llames", pulir la producción de la canción' },
          { type: "Specialization", description: "Masterización básica de la canción demo" },
          { type: "Specialization", description: "Mezcla básica de la canción demo" },
        ],
      },
      {
        date: "18 - 22 de Noviembre",
        tasks: [
          { type: "Commercialization", description: 'Canción "No llames", organizar el proyecto y exportar stems con nombres claros' },
          { type: "Commercialization", description: 'Canción "No llames", generar letras y letras fonéticas' },
          { type: "Commercialization", description: 'Canción "No llames", subir todo el contenido a la nube' },
          { type: "Specialization", description: "Mezcla básica de la canción demo" },
          { type: "Specialization", description: "Revisión en vivo de la mezcla y masterización" },
        ],
      },
      {
        date: "25 - 29 de Noviembre",
        tasks: [
          { type: "Commercialization", description: "Comenzar la creación de la narrativa para las 3 canciones" },
          { type: "Commercialization", description: 'Canción "Marte", creación del beat de la canción, completar el resto' },
          { type: "Specialization", description: "Masterización avanzada de la canción demo" },
        ],
      },
    ],
  },
  {
    month: "Diciembre",
    periods: [
      {
        date: "2 - 6 de Diciembre",
        tasks: [
          { type: "Commercialization", description: "Revisión de la narrativa para las 3 canciones" },
          { type: "Commercialization", description: 'Canción "Marte", completar las letras con armonías y efecto vocal y comenzar la grabación' },
          { type: "Specialization", description: "Masterización avanzada de la canción demo" },
        ],
      },
      {
        date: "9 - 13 de Diciembre",
        tasks: [
          { type: "Commercialization", description: 'Canción "Marte", pulir el beat y las voces para que coincidan mejor' },
          { type: "Specialization", description: "Mezcla avanzada de la canción demo" },
        ],
      },
      {
        date: "16 - 20 de Diciembre",
        tasks: [
          { type: "Commercialization", description: 'Canción "Marte", organizar el proyecto y exportar stems con nombres claros' },
          { type: "Commercialization", description: 'Canción "Marte", generar letras y letras fonéticas' },
          { type: "Commercialization", description: 'Canción "Marte", subir todo el contenido a la nube' },
          { type: "Specialization", description: "Mezcla avanzada de la canción demo" },
        ],
      },
      {
        date: "23 - 24 de Diciembre",
        tasks: [
          { type: "Specialization", description: "Revisión en vivo de las canciones mezcladas y masterizadas, comenzar cursos de composición" },
        ],
      },
      {
        date: "25 de Diciembre - 1 de Enero",
        tasks: [
          { type: "Vacation", description: "Vacaciones de la empresa" },
        ],
      },
    ],
  },
  {
    month: "Enero",
    periods: [
      {
        date: "2 - 3 de Enero",
        tasks: [
          { type: "Commercialization", description: 'Canción "EDM", creación del beat de la canción, completar el resto' },
        ],
      },
      {
        date: "6 - 10 de Enero",
        tasks: [
          { type: "Commercialization", description: 'Canción "EDM", completar las letras con armonías y efecto vocal y comenzar la grabación' },
          { type: "Commercialization", description: 'Canción "No LLames", enviar a mezcla y masterización' },
          { type: "Commercialization", description: 'Canción "Martes", enviar a mezcla y masterización' },
          { type: "Specialization", description: "Por definir" },
        ],
      },
      {
        date: "13 - 17 de Enero",
        tasks: [
          { type: "Commercialization", description: "Crear una lista de material de marketing basado en la narrativa" },
          { type: "Commercialization", description: "Comenzar la creación del material de marketing" },
          { type: "Specialization", description: "Por definir" },
        ],
      },
      {
        date: "20 - 24 de Enero",
        tasks: [
          { type: "Commercialization", description: "Configurar plataformas para subir las canciones" },
          { type: "Commercialization", description: "Configurar perfiles de artista" },
          { type: "Commercialization", description: 'Canción "No Llames", subir la canción a Ditto el 24 de enero' },
          { type: "Specialization", description: "Por definir" },
        ],
      },
      {
        date: "24 - 31 de Enero",
        tasks: [
          { type: "Commercialization", description: "Continuar la creación del material de marketing" },
          { type: "Commercialization", description: "Crear la campaña de pre-lanzamiento y posible lanzamiento" },
          { type: "Specialization", description: "Por definir" },
        ],
      },
    ],
  },
  {
    month: "Febrero",
    periods: [
      {
        date: "3 - 7 de Febrero",
        tasks: [
          { type: "Commercialization", description: "Lanzar la campaña de pre-lanzamiento" },
          { type: "Commercialization", description: "Lanzar el contenido de marketing y anuncios pagados" },
          { type: "Specialization", description: "Por definir" },
        ],
      },
      {
        date: "10 - 14 de Febrero",
        tasks: [
          { type: "Commercialization", description: "Lanzar la canción", highlight: true },
          { type: "Commercialization", description: "Presentar la canción en plataformas de playlist" },
          { type: "Commercialization", description: "Monitorear la canción" },
          { type: "Specialization", description: "Por definir" },
        ],
      },
    ],
  },
]

export default function ShelzyTimeline() {
  const { language } = useLanguage()
  const [currentTimelineData, setCurrentTimelineData] = useState(timelineData)

  useEffect(() => {
    setCurrentTimelineData(language === 'es' ? spanishTimelineData : timelineData)
  }, [language])

  const t = translations[language]

  return (
    <ScrollArea className="h-[90vh] w-full p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">{t.title}</h1>
        {currentTimelineData.map((monthData, monthIndex) => (
          <div key={monthData.month} className="relative">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-2 mb-4">
              <h2 className="text-2xl font-semibold text-primary">{monthTranslations[language][monthIndex]}</h2>
            </div>
            <div className="ml-4 border-l-2 border-primary/30 pl-8 space-y-8">
              {monthData.periods.map((period, periodIndex) => (
                <Card key={`${monthIndex}-${periodIndex}`} className="relative shadow-md hover:shadow-lg transition-shadow">
                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-primary mb-3">{period.date}</h3>
                    <ul className="space-y-2">
                      {period.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className={`flex items-start space-x-3 p-2 rounded-md transition-colors ${
                            task.highlight
                              ? "bg-yellow-100 dark:bg-yellow-900/50"
                              : "hover:bg-secondary/50"
                          }`}
                        >
                          {task.type === "Commercialization" ? (
                            <Briefcase className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          ) : task.type === "Specialization" ? (
                            <Music className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div>
                            <span
                              className={`font-medium ${
                                task.type === "Commercialization"
                                  ? "text-blue-600 dark:text-blue-400"
                                  : task.type === "Specialization"
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-yellow-600 dark:text-yellow-400"
                              }`}
                            >
                              [{t[task.type.toLowerCase() as keyof typeof t]}]
                            </span>{" "}
                            <span className="text-sm">{task.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}