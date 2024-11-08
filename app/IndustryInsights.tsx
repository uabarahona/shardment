import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Lightbulb, Shield, Clock, Briefcase, Target, Music, DollarSign, Users, Star } from 'lucide-react'

export function IndustryInsights({ language = 'en' }) {
  const content = {
    en: {
      title: "Phase 1: Industry Insights & Crucial Knowledge",
      subtitle: "Essential First Steps and Foundation Building",
      foundationBuilding: "Foundation Building Insights",
      firstRelease: "First Release Secrets",
      contentStrategy: "Phase 1 Content Strategy",
      protection: "Phase 1 Protection Essentials",
      marketing: "Marketing Foundations",
      financial: "Phase 1 Financial Insights",
      crucialInsight: "CRUCIAL INSIGHT",
      industrySecret: "INDUSTRY SECRET",
    },
    es: {
      title: "Fase 1: Perspectivas de la Industria y Conocimiento Crucial",
      subtitle: "Primeros Pasos Esenciales y Construcción de Bases",
      foundationBuilding: "Perspectivas para la Construcción de Bases",
      firstRelease: "Secretos del Primer Lanzamiento",
      contentStrategy: "Estrategia de Contenido de la Fase 1",
      protection: "Protección Esencial de la Fase 1",
      marketing: "Fundamentos de Marketing",
      financial: "Perspectivas Financieras de la Fase 1",
      crucialInsight: "PERSPECTIVA CRUCIAL",
      industrySecret: "SECRETO DE LA INDUSTRIA",
    }
  }

  const t = content[language]

  const insights = [
    {
      title: t.foundationBuilding,
      icon: Briefcase,
      color: "blue",
      alerts: [
        { type: "crucial", text: language === 'en' ? "Start with legal structure first - even simple releases can generate complex rights issues" : "Comienza con la estructura legal primero - incluso los lanzamientos simples pueden generar problemas complejos de derechos" },
        { type: "secret", text: language === 'en' ? "Register your artist name as a trademark before first release - music industry is full of name disputes" : "Registra tu nombre de artista como marca antes del primer lanzamiento - la industria musical está llena de disputas por nombres" },
        { type: "secret", text: language === 'en' ? "Use audio fingerprinting services before release - many songs get blocked by false copyright claims from similar-sounding tracks" : "Utiliza servicios de huella digital de audio antes del lanzamiento - muchas canciones son bloqueadas por reclamos falsos de derechos de autor de pistas similares" },
        { type: "secret", text: language === 'en' ? "Pitch to playlists matching your current size - targeting playlists with 1000-5000 followers has 40% higher acceptance rate for new artists" : "Haz pitch a listas de reproducción que coincidan con tu tamaño actual - apuntar a listas con 1000-5000 seguidores tiene una tasa de aceptación 40% mayor para nuevos artistas" },
        { type: "crucial", text: language === 'en' ? "Get written agreements for EVERYTHING - even (especially) with friends and family involved in the project" : "Obtén acuerdos por escrito para TODO - incluso (especialmente) con amigos y familiares involucrados en el proyecto" },
        { type: "crucial", text: language === 'en' ? "Document your creative process from day one - creation documentation is your best protection against future disputes" : "Documenta tu proceso creativo desde el primer día - la documentación de la creación es tu mejor protección contra futuras disputas" },
      ]
    },
    {
      title: t.firstRelease,
      icon: Music,
      color: "green",
      alerts: [
        { type: "secret", text: language === 'en' ? "Your first release matters less than you think - it's about establishing infrastructure and learning the process" : "Tu primer lanzamiento importa menos de lo que crees - se trata de establecer infraestructura y aprender el proceso" },
        { type: "crucial", text: language === 'en' ? "Submit to Spotify Editorial playlists 4 weeks before release - they actually look at first-time submissions more carefully" : "Envía a las listas editoriales de Spotify 4 semanas antes del lanzamiento - realmente miran las primeras presentaciones con más cuidado" },
        { type: "secret", text: language === 'en' ? "Create different song descriptions for different platforms - Spotify's algorithm responds better to mood-based descriptions while Apple Music prefers genre-based" : "Crea diferentes descripciones de canciones para diferentes plataformas - el algoritmo de Spotify responde mejor a descripciones basadas en el estado de ánimo, mientras que Apple Music prefiere las basadas en géneros" },
        { type: "secret", text: language === 'en' ? "Submit lyrics with timestamps to streaming platforms - songs with synced lyrics get 32% more saves on average" : "Envía letras con marcas de tiempo a las plataformas de streaming - las canciones con letras sincronizadas obtienen un 32% más de guardados en promedio" },
        { type: "crucial", text: language === 'en' ? "Focus on pre-saves over first-day streams - algorithms value sustained growth over release day spikes" : "Enfócate en los pre-guardados más que en las reproducciones del primer día - los algoritmos valoran más el crecimiento sostenido que los picos del día de lanzamiento" },
        { type: "secret", text: language === 'en' ? "Release on Thursday morning local time - this gives you 24 hours to build momentum before playlist refreshes" : "Lanza el jueves por la mañana hora local - esto te da 24 horas para generar impulso antes de que se actualicen las listas de reproducción" },
        { type: "crucial", text: language === 'en' ? "Prepare three versions of your song: full, radio edit, and clean - you'll need them sooner than you think" : "Prepara tres versiones de tu canción: completa, edición de radio y limpia - las necesitarás antes de lo que crees" },
      ]
    },
    {
      title: t.contentStrategy,
      icon: Star,
      color: "purple",
      alerts: [
        { type: "crucial", text: language === 'en' ? "Start content creation 6 weeks before release - you need more content than you think" : "Comienza la creación de contenido 6 semanas antes del lanzamiento - necesitas más contenido del que crees" },
        { type: "secret", text: language === 'en' ? "Release vertical video versions of your music video - TikTok and Reels give 3x more algorithmic boost to native vertical content versus cropped horizontal" : "Lanza versiones de video vertical de tu video musical - TikTok y Reels dan 3 veces más impulso algorítmico al contenido vertical nativo versus el horizontal recortado" },
        { type: "secret", text: language === 'en' ? "Record EVERYTHING during creation - behind-the-scenes content is more valuable than polished content for new artists" : "Graba TODO durante la creación - el contenido detrás de escenas es más valioso que el contenido pulido para nuevos artistas" },
        { type: "secret", text: language === 'en' ? "Use multiple hashtag strategies - create three sets of hashtags and rotate them to avoid algorithm penalties" : "Usa múltiples estrategias de hashtags - crea tres conjuntos de hashtags y rótalos para evitar penalizaciones del algoritmo" },
        { type: "crucial", text: language === 'en' ? "Create in batches of 5-7 pieces - consistent content beats perfect content" : "Crea en lotes de 5-7 piezas - el contenido consistente supera al contenido perfecto" },
        { type: "secret", text: language === 'en' ? "Cross-platform posting HURTS more than helps - each platform needs native content" : "Publicar en múltiples plataformas PERJUDICA más de lo que ayuda - cada plataforma necesita contenido nativo" },
      ]
    },
    {
      title: t.protection,
      icon: Shield,
      color: "red",
      alerts: [
        { type: "crucial", text: language === 'en' ? "Register copyright before ANY release - even private sharing needs protection" : "Registra los derechos de autor antes de CUALQUIER lanzamiento - incluso compartir en privado necesita protección" },
        { type: "secret", text: language === 'en' ? "Register your most catchy hooks separately - melodic hooks can be protected independently and provide additional revenue streams" : "Registra tus ganchos más pegadizos por separado - los ganchos melódicos pueden protegerse independientemente y proporcionar flujos de ingresos adicionales" },
        { type: "secret", text: language === 'en' ? "Set up Google Alerts for your lyrics - many sync opportunities come from people using your music without permission" : "Configura Alertas de Google para tus letras - muchas oportunidades de sincronización provienen de personas que usan tu música sin permiso" },
        { type: "crucial", text: language === 'en' ? "Use split sheets for EVERY session - even if you're the only writer/producer" : "Usa hojas de división para CADA sesión - incluso si eres el único escritor/productor" },
        { type: "secret", text: language === 'en' ? "Never share demos without a basic agreement - unsigned artists lose songs this way constantly" : "Nunca compartas demos sin un acuerdo básico - los artistas sin firmar pierden canciones de esta manera constantemente" },
        { type: "crucial", text: language === 'en' ? "Register with PRO before first release - back-collecting performance royalties is nearly impossible" : "Regístrate con una PRO antes del primer lanzamiento - recuperar regalías de interpretación retroactivamente es casi imposible" },
        { type: "secret", text: language === 'en' ? "Keep a creation diary with dates and participants - memory isn't evidence, documentation is" : "Mantén un diario de creación con fechas y participantes - la memoria no es evidencia, la documentación sí lo es" },
      ]
    },
    {
      title: t.marketing,
      icon: Target,
      color: "yellow",
      alerts: [
        { type: "crucial", text: language === 'en' ? "Start with Instagram/TikTok, perfect ONE platform before expanding" : "Comienza con Instagram/TikTok, perfecciona UNA plataforma antes de expandirte" },
        { type: "secret", text: language === 'en' ? "Create platform-specific link trees - each platform's algorithm favors its own link services over third-party ones" : "Crea árboles de enlaces específicos para cada plataforma - el algoritmo de cada plataforma favorece sus propios servicios de enlaces sobre los de terceros" },
        { type: "secret", text: language === 'en' ? "Use music-specific QR codes that change destination based on time - pre-release for pre-save, release day for streaming, post-release for content" : "Usa códigos QR específicos para música que cambien de destino según el tiempo - pre-lanzamiento para pre-guardado, día de lanzamiento para streaming, post-lanzamiento para contenido" },
        { type: "crucial", text: language === 'en' ? "Test ads with $5/day before scaling - small tests save big mistakes" : "Prueba anuncios con $5/día antes de escalar - pequeñas pruebas evitan grandes errores" },
        { type: "secret", text: language === 'en' ? "Engage with similar artists' fans BEFORE your release - build community before you need it" : "Interactúa con los fans de artistas similares ANTES de tu lanzamiento - construye comunidad antes de necesitarla" },
        { type: "crucial", text: language === 'en' ? "Focus on conversion over reach - 100 engaged fans beat 10,000 passive followers" : "Enfócate en la conversión más que en el alcance - 100 fans comprometidos superan a 10,000 seguidores pasivos" },
      ]
    },
    {
      title: t.financial,
      icon: DollarSign,
      color: "indigo",
      alerts: [
        { type: "crucial", text: language === 'en' ? "Invest in protection before promotion - legal fees are cheaper than lawsuits" : "Invierte en protección antes que en promoción - los honorarios legales son más baratos que las demandas" },
        { type: "secret", text: language === 'en' ? "Register with multiple PROs in different territories - many artists miss international performance royalties by only registering domestically" : "Regístrate con múltiples PROs en diferentes territorios - muchos artistas pierden regalías de interpretación internacionales al registrarse solo domésticamente" },
        { type: "secret", text: language === 'en' ? "Set up separate publishing entity early - publishers often offer better deals to artists who control their own publishing" : "Establece una entidad de publicación separada temprano - las editoriales a menudo ofrecen mejores tratos a los artistas que controlan su propia publicación" },
        { type: "crucial", text: language === 'en' ? "Invest in quality masters over marketing initially - you can always promote later, but you can't easily fix poor quality" : "Invierte en masters de calidad antes que en marketing inicialmente - siempre puedes promocionar después, pero no puedes arreglar fácilmente una mala calidad" },
      ]
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
      </header>

      {insights.map((section, index) => (
        <Card key={index} className={`border-l-4 border-${section.color}-500`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <section.icon className="h-5 w-5" />
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {section.alerts.map((alert, alertIndex) => (
                <Alert key={alertIndex} className={`bg-${section.color}-50 dark:bg-${section.color}-900`}>
                  <AlertTitle>{alert.type === "crucial" ? t.crucialInsight : t.industrySecret}</AlertTitle>
                  <AlertDescription>{alert.text}</AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}