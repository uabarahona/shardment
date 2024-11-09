import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Calendar, Clock, AlertTriangle, CheckSquare, Info, Music } from 'lucide-react'

type Language = 'en' | 'es';
export function ReleaseTimeline({ language = 'en' } : { language?: Language }) {
const content = {
  en: {
    title: "Release Timeline & Essentials",
    subtitle: "Core Timeline and Critical Requirements",
    releaseTiming: "Release Timing Guidelines",
    optimalRelease: "Optimal Release: Thursdays",
    avoidRelease: "Avoid December-January Releases",
    songTargets: "Song-Specific Release Targets",
    preReleaseRationale: "Why 3-Week Pre-Release?",
    timeline: "3-Week Release Timeline",
    criticalReminders: "Critical Reminders",
    firstRelease: "First Release",
    secondRelease: "Second Release",
    thirdRelease: "Third Release",
    streamTargets: "Stream Targets",
    keyFocusAreas: "Key Focus Areas",
    successIndicators: "Success Indicators Across All Releases",
    coreMetrics: "Core Metrics",
    growthMetrics: "Growth Metrics",
    socialMetrics: "Social Metrics",
    technicalRequirements: "Technical Requirements",
    marketingBenefits: "Marketing Benefits",
    industryAlignment: "Industry Alignment",
    week3: "Week 3 (Pre-Release)",
    week2: "Week 2 (Pre-Release)",
    releaseWeek: "Release Week",
    essentialTasks: "Essential Tasks",
    budgetAllocation: "Budget Allocation",
  },
  es: {
    title: "Cronograma de Lanzamiento y Elementos Esenciales",
    subtitle: "Cronograma Principal y Requisitos Críticos",
    releaseTiming: "Pautas de Tiempo de Lanzamiento",
    optimalRelease: "Lanzamiento Óptimo: Jueves",
    avoidRelease: "Evitar Lanzamientos en Diciembre-Enero",
    songTargets: "Objetivos de Lanzamiento Específicos por Canción",
    preReleaseRationale: "¿Por qué 3 Semanas de Pre-Lanzamiento?",
    timeline: "Cronograma de Lanzamiento de 3 Semanas",
    criticalReminders: "Recordatorios Críticos",
    firstRelease: "Primer Lanzamiento",
    secondRelease: "Segundo Lanzamiento",
    thirdRelease: "Tercer Lanzamiento",
    streamTargets: "Objetivos de Reproducciones",
    keyFocusAreas: "Áreas de Enfoque Clave",
    successIndicators: "Indicadores de Éxito en Todos los Lanzamientos",
    coreMetrics: "Métricas Principales",
    growthMetrics: "Métricas de Crecimiento",
    socialMetrics: "Métricas Sociales",
    technicalRequirements: "Requisitos Técnicos",
    marketingBenefits: "Beneficios de Marketing",
    industryAlignment: "Alineación con la Industria",
    week3: "Semana 3 (Pre-Lanzamiento)",
    week2: "Semana 2 (Pre-Lanzamiento)",
    releaseWeek: "Semana de Lanzamiento",
    essentialTasks: "Tareas Esenciales",
    budgetAllocation: "Asignación de Presupuesto",
  }
}

const t = content[language]

return (
  <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-800">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.title}</h1>
      <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
    </header>

    {/* Release Timing Guidelines */}
    <Card className="border-l-4 border-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {t.releaseTiming}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Alert className="bg-green-50 dark:bg-green-900">
            <AlertTitle className="text-lg font-semibold">{t.optimalRelease}</AlertTitle>
            <AlertDescription className="mt-2">
              <ul className="list-disc pl-4 space-y-1">
                <li>{language === 'en' ? "Spotify's major playlists refresh on Fridays" : "Las principales listas de reproducción de Spotify se actualizan los viernes"}</li>
                <li>{language === 'en' ? "24 hours to build initial momentum" : "24 horas para generar impulso inicial"}</li>
                <li>{language === 'en' ? "Higher chance of weekend playlist inclusion" : "Mayor probabilidad de inclusión en listas de reproducción de fin de semana"}</li>
                <li>{language === 'en' ? "Better positioning for Monday algorithmic updates" : "Mejor posicionamiento para actualizaciones algorítmicas del lunes"}</li>
                <li>{language === 'en' ? "Optimal for both US and LatAm time zones" : "Óptimo para zonas horarias de EE. UU. y América Latina"}</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="text-lg font-semibold">{t.avoidRelease}</AlertTitle>
            <AlertDescription className="mt-2">
              <ul className="list-disc pl-4 space-y-1">
                <li>{language === 'en' ? "Major artists drop their biggest releases" : "Los artistas principales lanzan sus mayores éxitos"}</li>
                <li>{language === 'en' ? "Holiday music dominates playlists" : "La música navideña domina las listas de reproducción"}</li>
                <li>{language === 'en' ? "Media attention is split" : "La atención de los medios está dividida"}</li>
                <li>{language === 'en' ? "Marketing costs increase (holiday ad rates)" : "Los costos de marketing aumentan (tarifas de anuncios navideños)"}</li>
                <li>{language === 'en' ? "Industry professionals often on break" : "Los profesionales de la industria a menudo están de vacaciones"}</li>
                <li>{language === 'en' ? "Reduced playlist consideration" : "Consideración reducida para listas de reproducción"}</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>

    {/* Pre-Release Rationale */}
    <Card className="border-l-4 border-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          {t.preReleaseRationale}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.technicalRequirements}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "DSP Processing Time" : "Tiempo de Procesamiento DSP"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Platforms need 5-7 days to properly index your song and create algorithmic predictions" : "Las plataformas necesitan de 5 a 7 días para indexar correctamente tu canción y crear predicciones algorítmicas"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "Editorial Consideration" : "Consideración Editorial"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Playlist editors require minimum 7-10 days for review" : "Los editores de listas de reproducción requieren un mínimo de 7 a 10 días para revisión"}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.marketingBenefits}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "Content Testing" : "Prueba de Contenido"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Time to A/B test promotional content and optimize based on results" : "Tiempo para realizar pruebas A/B de contenido promocional y optimizar basado en resultados"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "Pre-Save Campaign" : "Campaña de Pre-guardado"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Build anticipation and collect valuable day-one momentum" : "Generar anticipación y recopilar valioso impulso para el primer día"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "Ad Optimization" : "Optimización de Anuncios"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Test and refine ad targeting before main release push" : "Probar y refinar la segmentación de anuncios antes del impulso principal del lanzamiento"}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.industryAlignment}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "Playlist Pitching Cycle" : "Ciclo de Pitching para Listas de Reproducción"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Matches internal editorial calendar cycles of major platforms" : "Coincide con los ciclos de calendario editorial interno de las principales plataformas"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div>
                  <span className="font-medium">{language === 'en' ? "Media Coverage" : "Cobertura de Medios"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Allows time for press and media outlets to prepare coverage" : "Permite tiempo para que la prensa y los medios preparen la cobertura"}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Song-Specific Targets */}
    <Card className="border-l-4 border-indigo-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          {t.songTargets}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {[
            { title: '"No Llames"', release: t.firstRelease, firstMonth: "5,000-10,000", threeMonths: "20,000-30,000" },
            { title: '"Marte"', release: t.secondRelease, firstMonth: "15,000-25,000", threeMonths: "40,000-60,000" },
            { title: '"EDM"', release: t.thirdRelease, firstMonth: "30,000-50,000", threeMonths: "80,000-100,000" }
          ].map((song, index) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">{song.title} ({song.release})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.streamTargets}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>{language === 'en' ? "First Month:" : "Primer Mes:"}</span>
                      <span className="font-medium">{song.firstMonth}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>{language === 'en' ? "Three Months:" : "Tres Meses:"}</span>
                      <span className="font-medium">{song.threeMonths}</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' 
                      ? "First releases focus on establishing presence and testing market response" 
                      : "Los primeros lanzamientos se centran en establecer presencia y probar la respuesta del mercado"}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.keyFocusAreas}</h4>
                  <ul className="space-y-1 text-sm">
                    {index === 0 && [
                      language === 'en' ? "Build initial fan base" : "Construir base de fans inicial",
                      language === 'en' ? "Test marketing approaches" : "Probar enfoques de marketing",
                      language === 'en' ? "Establish artist identity" : "Establecer identidad del artista",
                      language === 'en' ? "Gather audience data" : "Recopilar datos de audiencia"
                    ].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                    {index === 1 && [
                      language === 'en' ? "Expand reach" : "Expandir alcance",
                      language === 'en' ? "Deepen fan engagement" : "Profundizar el compromiso de los fans",
                      language === 'en' ? "Increase playlist presence" : "Aumentar presencia en listas de reproducción",
                      language === 'en' ? "Scale successful strategies" : "Escalar estrategias exitosas"
                    ].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                    {index === 2 && [
                      language === 'en' ? "Maximize growth" : "Maximizar crecimiento",
                      language === 'en' ? "Cross-genre promotion" : "Promoción entre géneros",
                      language === 'en' ? "Influencer collaborations" : "Colaboraciones con influencers",
                      language === 'en' ? "Brand partnerships" : "Asociaciones con marcas"
                    ].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <h3 className="font-semibold mb-3">{t.successIndicators}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.coreMetrics}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'en' ? "Save Rate: >20%" : "Tasa de Guardado: >20%"}</li>
                  <li>• {language === 'en' ? "Skip Rate: <35%" : "Tasa de Salto: <35%"}</li>
                  <li>• {language === 'en' ? "Completion Rate: >75%" : "Tasa de Finalización: >75%"}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.growthMetrics}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'en' ? "Monthly Listener Growth" : "Crecimiento de Oyentes Mensuales"}</li>
                  <li>• {language === 'en' ? "Playlist Additions" : "Adiciones a Listas de Reproducción"}</li>
                  <li>• {language === 'en' ? "Profile Visits" : "Visitas al Perfil"}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.socialMetrics}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'en' ? "Profile Following" : "Seguidores del Perfil"}</li>
                  <li>• {language === 'en' ? "Content Engagement" : "Interacción con el Contenido"}</li>
                  <li>• {language === 'en' ? "Share Rate" : "Tasa de Compartidos"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 3-Week Timeline */}
    <Card className="border-l-4 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          {t.timeline}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {[
            { week: t.week3, tasks: [
              language === 'en' ? "Submit to Ditto (with complete metadata)" : "Enviar a Ditto (con metadatos completos)",
              language === 'en' ? "Complete all platform registrations" : "Completar todos los registros de plataforma",
              language === 'en' ? "Prepare pre-save campaign" : "Preparar campaña de pre-guardado"
            ], budget: [
              { label: language === 'en' ? "Content Creation" : "Creación de Contenido", amount: "$150" },
              { label: language === 'en' ? "Initial Photography" : "Fotografía Inicial", amount: "$200" },
              { label: language === 'en' ? "Platform Setup" : "Configuración de Plataforma", amount: "$50" }
            ]},
            { week: t.week2, tasks: [
              language === 'en' ? "Begin teaser content rollout" : "Comenzar el lanzamiento de contenido teaser",
              language === 'en' ? "Launch pre-save campaign" : "Lanzar campaña de pre-guardado",
              language === 'en' ? "Start test ads ($20-30 budget)" : "Iniciar anuncios de prueba (presupuesto de $20-30)"
            ], budget: [
              { label: language === 'en' ? "Test Ads" : "Anuncios de Prueba", amount: "$30" },
              { label: language === 'en' ? "Content Boost" : "Impulso de Contenido", amount: "$70" },
              { label: language === 'en' ? "Playlist Submission Prep" : "Preparación de Envío a Listas de Reproducción", amount: "$50" }
            ]},
            { week: t.releaseWeek, tasks: [
              language === 'en' ? "Scale successful ad campaigns" : "Escalar campañas de anuncios exitosas",
              language === 'en' ? "Submit for playlist consideration" : "Enviar para consideración de listas de reproducción",
              language === 'en' ? "Prepare launch day content" : "Preparar contenido del día de lanzamiento"
            ], budget: [
              { label: language === 'en' ? "Main Ad Campaign" : "Campaña Principal de Anuncios", amount: "$150" },
              { label: language === 'en' ? "Playlist Push" : "Impulso de Listas de Reproducción", amount: "$150" },
              { label: language === 'en' ? "Emergency Fund" : "Fondo de Emergencia", amount: "$50" }
            ]}
          ].map((week, index) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">{week.week}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.essentialTasks}</h4>
                  <ul className="space-y-2">
                    {week.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t.budgetAllocation}</h4>
                  <ul className="space-y-1 text-sm">
                    {week.budget.map((item, budgetIndex) => (
                      <li key={budgetIndex}>{item.label}: {item.amount}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Critical Reminders */}
    <Card className="border-l-4 border-yellow-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5" />
          {t.criticalReminders}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span>{language === 'en' 
              ? "Always maintain 20% of budget as emergency fund" 
              : "Mantener siempre el 20% del presupuesto como fondo de emergencia"}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span>{language === 'en'
              ? "Document all expenses and results for future optimization"
              : "Documentar todos los gastos y resultados para optimización futura"}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span>{language === 'en'
              ? "Keep all receipts and agreements for accounting"
              : "Guardar todos los recibos y acuerdos para contabilidad"}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span>{language === 'en'
              ? "Schedule content in advance to avoid last-minute rush"
              : "Programar contenido con anticipación para evitar prisas de último momento"}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
)
}