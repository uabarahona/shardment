'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Info, Calendar, Video, BarChart, Settings, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IndustryInsights } from './IndustryInsights'
import { ReleaseTimeline } from './ReleaseTimeline'
import { ContentPlanner } from './ContentPlanner'
import { PerformanceMetrics } from './PerformanceMetrics'
import { TechnicalSetup } from './TechnicalSetup'

type Language = 'en' | 'es';
export default function MusicReleaseStrategyApp() {
  const [active, setActive] = useState('timeline')
  const [language, setLanguage] = useState<Language>('en')

  const tabs = [
    { 
      id: 'timeline', 
      label: language === 'en' ? 'Timeline' : 'Cronograma', 
      icon: Calendar, 
      component: ReleaseTimeline,
      description: language === 'en' ? 'Release timeline and essential tasks' : 'Cronograma de lanzamiento y tareas esenciales'
    },
    { 
      id: 'content', 
      label: language === 'en' ? 'Content' : 'Contenido', 
      icon: Video, 
      component: ContentPlanner,
      description: language === 'en' ? 'Content strategy and marketing plan' : 'Estrategia de contenido y plan de marketing'
    },
    { 
      id: 'metrics', 
      label: language === 'en' ? 'Metrics' : 'Métricas', 
      icon: BarChart, 
      component: PerformanceMetrics,
      description: language === 'en' ? 'Performance tracking and analytics' : 'Seguimiento de rendimiento y análisis'
    },
    { 
      id: 'technical', 
      label: language === 'en' ? 'Technical' : 'Técnico', 
      icon: Settings, 
      component: TechnicalSetup,
      description: language === 'en' ? 'Technical setup and platform registrations' : 'Configuración técnica y registros de plataformas'
    },
    { 
      id: 'insights', 
      label: language === 'en' ? 'Insights' : 'Perspectivas', 
      icon: Info, 
      component: IndustryInsights,
      description: language === 'en' ? 'Industry insights and crucial knowledge' : 'Perspectivas de la industria y conocimientos cruciales'
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'Music Release Strategy App' : 'App de Estrategia de Lanzamiento Musical'}
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'Español' : 'English'}
          </Button>
        </div>
      </header>

      <Tabs value={active} onValueChange={setActive} className="flex-1 flex flex-col">
        <TabsList className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex overflow-x-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-3 py-2 text-sm font-medium"
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        <div className="flex-1 overflow-hidden bg-white dark:bg-gray-800">
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="h-full">
              <ScrollArea className="h-full">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{tab.label}</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tab.description}</p>
                  </div>
                  <tab.component language={language} />
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}