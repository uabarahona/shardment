import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, DollarSign, Camera, Share2 } from 'lucide-react'


type Language = 'en' | 'es';

export function ContentPlanner({ language = 'en' } : { language?: Language }) {
const content = {
  en: {
    title: "Content & Marketing Planner",
    subtitle: "Comprehensive Content Strategy and Budget Allocation",
    visualContent: "Visual Content Requirements",
    photography: "Photography Requirements",
    video: "Video Content Requirements",
    contentCalendar: "Content Calendar",
    platformGuidelines: "Platform-Specific Content Guidelines",
    adStrategy: "Ad Spend Strategy",
    // Add more English translations here
  },
  es: {
    title: "Planificador de Contenido y Marketing",
    subtitle: "Estrategia de Contenido Integral y Asignación de Presupuesto",
    visualContent: "Requisitos de Contenido Visual",
    photography: "Requisitos de Fotografía",
    video: "Requisitos de Contenido de Video",
    contentCalendar: "Calendario de Contenido",
    platformGuidelines: "Pautas de Contenido Específicas por Plataforma",
    adStrategy: "Estrategia de Gasto en Publicidad",
    // Add more Spanish translations here
  }
}

const t = content[language]

return (
  <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-800">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.title}</h1>
      <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
    </header>

    {/* Visual Content Requirements */}
    <Card className="border-l-4 border-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          {t.visualContent}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.photography}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Professional Headshots (3-5 variations)" : "Fotos de Retrato Profesionales (3-5 variaciones)"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Lifestyle Shots (5-7 variations)" : "Fotos de Estilo de Vida (5-7 variaciones)"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Behind-the-scenes Photos (10+)" : "Fotos Detrás de Escenas (10+)"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Cover Art Variations (2-3 options)" : "Variaciones de Portada (2-3 opciones)"}</span>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>{language === 'en' ? "Estimated Budget: $200-300" : "Presupuesto Estimado: $200-300"}</p>
              <p>{language === 'en' ? "Timeline: Complete by Week 3 pre-release" : "Cronograma: Completar para la Semana 3 pre-lanzamiento"}</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.video}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Music Video Snippets (30-60s)" : "Fragmentos de Video Musical (30-60s)"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Studio Session Footage" : "Metraje de Sesión de Estudio"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Making-of Content" : "Contenido de Detrás de Cámaras"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Vertical Format Teasers" : "Teasers en Formato Vertical"}</span>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>{language === 'en' ? "Estimated Budget: $150-200" : "Presupuesto Estimado: $150-200"}</p>
              <p>{language === 'en' ? "Timeline: Start Week 3, complete by Week 2" : "Cronograma: Comenzar Semana 3, completar para Semana 2"}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Week-by-Week Content Calendar */}
    <Card className="border-l-4 border-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          {t.contentCalendar}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{language === 'en' ? "Week 3: Foundation" : "Semana 3: Fundación"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{language === 'en' ? "Content Creation" : "Creación de Contenido"}</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "Complete photo shoot" : "Completar sesión de fotos"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "Record behind-the-scenes" : "Grabar detrás de escenas"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "Create content bank (15+ pieces)" : "Crear banco de contenido (15+ piezas)"}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{language === 'en' ? "Budget Allocation" : "Asignación de Presupuesto"}</h4>
                <ul className="space-y-1 text-sm">
                  <li>{language === 'en' ? "Photography: $200" : "Fotografía: $200"}</li>
                  <li>{language === 'en' ? "Video Content: $150" : "Contenido de Video: $150"}</li>
                  <li>{language === 'en' ? "Content Editing: $100" : "Edición de Contenido: $100"}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{language === 'en' ? "Week 2: Building Momentum" : "Semana 2: Generando Impulso"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{language === 'en' ? "Content Release" : "Lanzamiento de Contenido"}</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "2 TikToks" : "2 TikToks"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "3 Instagram Stories" : "3 Historias de Instagram"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "1 Instagram Post" : "1 Publicación de Instagram"}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{language === 'en' ? "Ad Testing" : "Prueba de Anuncios"}</h4>
                <ul className="space-y-1 text-sm">
                  <li>{language === 'en' ? "Test Budget: $30" : "Presupuesto de Prueba: $30"}</li>
                  <li>{language === 'en' ? "Content Types: 3-4 variations" : "Tipos de Contenido: 3-4 variaciones"}</li>
                  <li>{language === 'en' ? "Platforms: TikTok, Instagram" : "Plataformas: TikTok, Instagram"}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{language === 'en' ? "Release Week" : "Semana de Lanzamiento"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{language === 'en' ? "Content Intensity" : "Intensidad de Contenido"}</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "Daily TikTok content" : "Contenido diario en TikTok"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "3x daily Stories" : "3x Historias diarias"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{language === 'en' ? "Release day special content" : "Contenido especial del día de lanzamiento"}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{language === 'en' ? "Ad Scaling" : "Escalado de Anuncios"}</h4>
                <ul className="space-y-1 text-sm">
                  <li>{language === 'en' ? "Scale successful ads: $150" : "Escalar anuncios exitosos: $150"}</li>
                  <li>{language === 'en' ? "Platform split based on testing" : "División de plataformas basada en pruebas"}</li>
                  <li>{language === 'en' ? "Engagement monitoring" : "Monitoreo de participación"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Platform-Specific Guidelines */}
    <Card className="border-l-4 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5" />
          {t.platformGuidelines}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{language === 'en' ? "TikTok Strategy" : "Estrategia de TikTok"}</h3>
            <ul className="space-y-2">
              <li>• {language === 'en' ? "15-30 second clips maximum" : "Clips de 15-30 segundos máximo"}</li>
              <li>• {language === 'en' ? "Focus on hook (first 3 seconds)" : "Enfoque en el gancho (primeros 3 segundos)"}</li>
              <li>• {language === 'en' ? "Use trending sounds alongside" : "Usar sonidos de tendencia junto al contenido"}</li>
              <li>• {language === 'en' ? "Behind-the-scenes focus" : "Enfoque en contenido detrás de escenas"}</li>
              <li>• {language === 'en' ? "3:4 aspect ratio" : "Relación de aspecto 3:4"}</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{language === 'en' ? "Instagram Strategy" : "Estrategia de Instagram"}</h3>
            <ul className="space-y-2">
              <li>• {language === 'en' ? "Stories: Behind-the-scenes" : "Historias: Detrás de escenas"}</li>
              <li>• {language === 'en' ? "Reels: 15-30 second highlights" : "Reels: Destacados de 15-30 segundos"}</li>
              <li>• {language === 'en' ? "Posts: Professional shots" : "Publicaciones: Fotos profesionales"}</li>
              <li>• {language === 'en' ? "Mix of photo and video" : "Mezcla de fotos y videos"}</li>
              <li>• {language === 'en' ? "Consistent visual theme" : "Tema visual consistente"}</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Ad Spend Strategy */}
    <Card className="border-l-4 border-yellow-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          {t.adStrategy}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{language === 'en' ? "Budget Breakdown" : "Desglose del Presupuesto"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">{language === 'en' ? "Testing Phase (Week 2)" : "Fase de Prueba (Semana 2)"}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'en' ? "$10 per ad concept" : "$10 por concepto de anuncio"}</li>
                  <li>• {language === 'en' ? "Test 3-4 concepts" : "Probar 3-4 conceptos"}</li>
                  <li>• {language === 'en' ? "48-hour test period each" : "Período de prueba de 48 horas cada uno"}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">{language === 'en' ? "Scaling Phase (Release Week)" : "Fase de Escalado (Semana de Lanzamiento)"}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'en' ? "Scale top 2 performers" : "Escalar los 2 mejores rendimientos"}</li>
                  <li>• {language === 'en' ? "$50-75 per winning concept" : "$50-75 por concepto ganador"}</li>
                  <li>• {language === 'en' ? "Monitor ROI hourly" : "Monitorear ROI por hora"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)
}