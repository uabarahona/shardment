import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, AlertTriangle, BarChart, Target } from 'lucide-react'

export function PerformanceMetrics({ language = 'en' }) {
  const content = {
    en: {
      title: "Performance Tracking & Metrics",
      subtitle: "Comprehensive Metrics Guide and Response Strategies",
      coreMetrics: "Core Metrics Explained",
      engagementMetrics: "Engagement Metrics",
      growthMetrics: "Growth Metrics",
      performanceTimelines: "Performance Timelines",
      responseTriggers: "Response Triggers",
      underperformanceTriggers: "Underperformance Triggers",
      opportunityTriggers: "Opportunity Triggers",
      monitoringSchedule: "Monitoring Schedule",
      dailyMonitoring: "Daily Monitoring",
      weeklyAnalysis: "Weekly Analysis",
      firstHours: "First 24 Hours",
      firstWeek: "First Week",
      firstMonth: "First Month",
      streams: "Streams",
      saves: "Saves",
      playlistAdds: "Playlist Adds",
      shareRate: "Share Rate",
      totalStreams: "Total Streams",
      playlistReach: "Playlist Reach",
      saveRate: "Save Rate",
      completionRate: "Completion Rate",
      monthlyListeners: "Monthly Listeners",
      playlistCount: "Playlist Count",
      artistFollowers: "Artist Followers",
    },
    es: {
      title: "Seguimiento y Métricas de Rendimiento",
      subtitle: "Guía Integral de Métricas y Estrategias de Respuesta",
      coreMetrics: "Métricas Principales Explicadas",
      engagementMetrics: "Métricas de Participación",
      growthMetrics: "Métricas de Crecimiento",
      performanceTimelines: "Cronogramas de Rendimiento",
      responseTriggers: "Disparadores de Respuesta",
      underperformanceTriggers: "Disparadores de Bajo Rendimiento",
      opportunityTriggers: "Disparadores de Oportunidad",
      monitoringSchedule: "Calendario de Monitoreo",
      dailyMonitoring: "Monitoreo Diario",
      weeklyAnalysis: "Análisis Semanal",
      firstHours: "Primeras 24 Horas",
      firstWeek: "Primera Semana",
      firstMonth: "Primer Mes",
      streams: "Reproducciones",
      saves: "Guardados",
      playlistAdds: "Añadidos a Playlists",
      shareRate: "Tasa de Compartidos",
      totalStreams: "Total de Reproducciones",
      playlistReach: "Alcance de Playlists",
      saveRate: "Tasa de Guardado",
      completionRate: "Tasa de Finalización",
      monthlyListeners: "Oyentes Mensuales",
      playlistCount: "Número de Playlists",
      artistFollowers: "Seguidores del Artista",
    }
  }

  const t = content[language]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
      </header>

      {/* Key Performance Indicators */}
      <Card className="border-l-4 border-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            {t.coreMetrics}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.engagementMetrics}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Save-to-Listener Ratio</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{language === 'en' ? 'Target: >20%' : 'Objetivo: >20%'}</p>
                  <ul className="list-disc pl-4 text-sm">
                    <li>{language === 'en' ? 'Shows intent to re-listen' : 'Muestra intención de volver a escuchar'}</li>
                    <li>{language === 'en' ? 'Strong indicator for algorithmic promotion' : 'Fuerte indicador para promoción algorítmica'}</li>
                    <li>{language === 'en' ? 'Key metric for playlist curators' : 'Métrica clave para curadores de playlists'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Skip Rate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{language === 'en' ? 'Target: <35%' : 'Objetivo: <35%'}</p>
                  <ul className="list-disc pl-4 text-sm">
                    <li>{language === 'en' ? 'Measures song retention power' : 'Mide el poder de retención de la canción'}</li>
                    <li>{language === 'en' ? 'Critical for playlist positioning' : 'Crítico para el posicionamiento en playlists'}</li>
                    <li>{language === 'en' ? 'Affects algorithmic recommendations' : 'Afecta las recomendaciones algorítmicas'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Completion Rate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{language === 'en' ? 'Target: >75%' : 'Objetivo: >75%'}</p>
                  <ul className="list-disc pl-4 text-sm">
                    <li>{language === 'en' ? 'Full song listen-through percentage' : 'Porcentaje de escucha completa de la canción'}</li>
                    <li>{language === 'en' ? 'Impacts royalty calculations' : 'Impacta en los cálculos de regalías'}</li>
                    <li>{language === 'en' ? 'Quality indicator for algorithms' : 'Indicador de calidad para algoritmos'}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.growthMetrics}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Playlist Inclusion Rate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{language === 'en' ? 'Target: 3+ new playlists per week' : 'Objetivo: 3+ nuevas playlists por semana'}</p>
                  <ul className="list-disc pl-4 text-sm">
                    <li>{language === 'en' ? 'Organic vs. pitched additions' : 'Adiciones orgánicas vs. promocionadas'}</li>
                    <li>{language === 'en' ? 'Playlist size and relevance' : 'Tamaño y relevancia de la playlist'}</li>
                    <li>{language === 'en' ? 'Listener overlap analysis' : 'Análisis de superposición de oyentes'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Share Rate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{language === 'en' ? 'Target: >1% of total streams' : 'Objetivo: >1% del total de reproducciones'}</p>
                  <ul className="list-disc pl-4 text-sm">
                    <li>{language === 'en' ? 'Social sharing frequency' : 'Frecuencia de compartidos en redes sociales'}</li>
                    <li>{language === 'en' ? 'Platform-specific sharing' : 'Compartidos específicos por plataforma'}</li>
                    <li>{language === 'en' ? 'Viral potential indicator' : 'Indicador de potencial viral'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Benchmarks */}
      <Card className="border-l-4 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {t.performanceTimelines}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.firstHours}</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>{t.streams}</span>
                  <span className="font-medium">500+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.saves}</span>
                  <span className="font-medium">100+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.playlistAdds}</span>
                  <span className="font-medium">5+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.shareRate}</span>
                  <span className="font-medium">&gt;2%</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.firstWeek}</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>{t.totalStreams}</span>
                  <span className="font-medium">5,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.playlistReach}</span>
                  <span className="font-medium">10+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.saveRate}</span>
                  <span className="font-medium">&gt;20%</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.completionRate}</span>
                  <span className="font-medium">&gt;75%</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.firstMonth}</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>{t.totalStreams}</span>
                  <span className="font-medium">20,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.monthlyListeners}</span>
                  <span className="font-medium">5,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.playlistCount}</span>
                  <span className="font-medium">25+</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.artistFollowers}</span>
                  <span className="font-medium">500+</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response Triggers */}
      <Card className="border-l-4 border-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            {t.responseTriggers}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.underperformanceTriggers}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Skip Rate >40%' : 'Tasa de Salto >40%'}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? 'Review song structure and hook placement' : 'Revisar estructura de la canción y ubicación del gancho'}</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Save Rate <15%' : 'Tasa de Guardado <15%'}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? 'Analyze audience targeting and playlists' : 'Analizar segmentación de audiencia y playlists'}</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Daily Streams Drop >30%' : 'Caída de Reproducciones Diarias >30%'}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? 'Check playlist removals and algorithmic changes' : 'Verificar eliminaciones de playlists y cambios algorítmicos'}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.opportunityTriggers}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Viral Coefficient >1.5' : 'Coeficiente Viral >1.5'}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? 'Scale marketing budget immediately' : 'Escalar presupuesto de marketing inmediatamente'}</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Save Rate >30%' : 'Tasa de Guardado >30%'}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? 'Increase playlist pitching efforts' : 'Aumentar esfuerzos de pitching a playlists'}</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <div>
                    <span className="font-medium">{language === 'en' ? 'Regional Spike >200%' : 'Pico Regional >200%'}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? 'Focus marketing on emerging region' : 'Enfocar marketing en la región emergente'}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monitoring Schedule */}
      <Card className="border-l-4 border-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5" />
            {t.monitoringSchedule}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.dailyMonitoring}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Check stream counts (morning & evening)' : 'Verificar conteos de reproducciones (mañana y tarde)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Monitor save rate trends' : 'Monitorear tendencias de tasa de guardado'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Review playlist additions/removals' : 'Revisar adiciones/eliminaciones de playlists'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Track social media mentions' : 'Rastrear menciones en redes sociales'}</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold mb-3">{t.weeklyAnalysis}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Complete performance report' : 'Completar informe de rendimiento'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Adjust marketing strategy if needed' : 'Ajustar estrategia de marketing si es necesario'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Review ad performance' : 'Revisar rendimiento de anuncios'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{language === 'en' ? 'Update projections' : 'Actualizar proyecciones'}</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}