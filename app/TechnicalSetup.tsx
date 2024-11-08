import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Music, FileCheck, Globe, List, Info } from 'lucide-react'

export function TechnicalSetup({ language = 'en' }) {
const content = {
  en: {
    title: "Technical Setup & Registrations",
    subtitle: "Platform Registrations and Technical Requirements",
    filePrep: "File Preparation Requirements",
    audioFiles: "Audio Files",
    metadata: "Metadata Requirements",
    platformReg: "Platform Registrations",
    distribution: "Distribution Setup",
    streaming: "Streaming Platforms",
    playlistSub: "Playlist Submission Platforms",
    primary: "Primary Platforms",
    free: "Free Submission Options",
    tips: "Playlist Submission Tips",
    qualityControl: "Final Quality Control",
    verification: "Pre-Release Verification",
    lyricsPrep: "Lyrics Preparation",
  },
  es: {
    title: "Configuración Técnica y Registros",
    subtitle: "Registros de Plataformas y Requisitos Técnicos",
    filePrep: "Requisitos de Preparación de Archivos",
    audioFiles: "Archivos de Audio",
    metadata: "Requisitos de Metadatos",
    platformReg: "Registros de Plataformas",
    distribution: "Configuración de Distribución",
    streaming: "Plataformas de Streaming",
    playlistSub: "Plataformas de Envío a Listas de Reproducción",
    primary: "Plataformas Principales",
    free: "Opciones de Envío Gratuitas",
    tips: "Consejos para Envío a Listas de Reproducción",
    qualityControl: "Control de Calidad Final",
    verification: "Verificación Pre-Lanzamiento",
    lyricsPrep: "Preparación de Letras",
  }
}

const t = content[language]

return (
  <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-800">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.title}</h1>
      <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
    </header>

    {/* File Preparation */}
    <Card className="border-l-4 border-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          {t.filePrep}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.audioFiles}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">{language === 'en' ? "Main Track (WAV)" : "Pista Principal (WAV)"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "16-bit, 44.1kHz minimum" : "16-bit, 44.1kHz mínimo"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">{language === 'en' ? "Radio Edit Version" : "Versión para Radio"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Clean version, under 3:30" : "Versión limpia, menos de 3:30"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">{language === 'en' ? "Preview Clips" : "Clips de Vista Previa"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "15s, 30s, 60s versions" : "Versiones de 15s, 30s, 60s"}</p>
                </div>
              </li>
            </ul>
          </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{language === 'en' ? "Lyrics Preparation" : "Preparación de Letras"}</h3>
            <ul className="space-y-2">
                <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                    <span className="font-medium">{language === 'en' ? "Normal Lyrics" : "Letras Normales"}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? "Complete song lyrics with proper formatting" : "Letras completas de la canción con formato adecuado"}
                    </p>
                </div>
                </li>
                <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                    <span className="font-medium">{language === 'en' ? "Phonetic Lyrics" : "Letras Fonéticas"}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? (
                        <>
                        Example:<br />
                        Original: "No llames por favor"<br />
                        Phonetic: "noh yah-mehs pohr fah-vohr"<br />
                        Original: "Que no quiero saber de ti"<br />
                        Phonetic: "keh noh kyeh-roh sah-behr deh tee"
                        </>
                    ) : (
                        <>
                        Ejemplo:<br />
                        Original: "No llames por favor"<br />
                        Fonético: "noh yah-mehs pohr fah-vohr"<br />
                        Original: "Que no quiero saber de ti"<br />
                        Fonético: "keh noh kyeh-roh sah-behr deh tee"
                        </>
                    )}
                    </p>
                </div>
                </li>
                <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                    <span className="font-medium">{language === 'en' ? "Synced Timestamps" : "Marcas de Tiempo Sincronizadas"}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? "Time-aligned lyrics for platform display" : "Letras alineadas en el tiempo para visualización en plataformas"}
                    </p>
                </div>
                </li>
            </ul>
        </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.metadata}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "ISRC Code Assignment" : "Asignación de Código ISRC"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Correct Song Title Format" : "Formato Correcto del Título de la Canción"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Artist Name Standardization" : "Estandarización del Nombre del Artista"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Genre Tags (Primary & Secondary)" : "Etiquetas de Género (Primario y Secundario)"}</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{language === 'en' ? "Mood Tags (Minimum 3)" : "Etiquetas de Estado de Ánimo (Mínimo 3)"}</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Platform Registrations */}
    <Card className="border-l-4 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          {t.platformReg}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.distribution}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">{language === 'en' ? "Ditto Music Account" : "Cuenta de Ditto Music"}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Complete profile setup and verification" : "Completar configuración y verificación del perfil"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">SOBODAYCOM (PRO)</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Register song and publishing rights" : "Registrar canción y derechos de publicación"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">SoundExchange</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Digital performance royalties" : "Regalías por interpretación digital"}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.streaming}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Spotify for Artists</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Claim profile and verify" : "Reclamar perfil y verificar"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Apple Music for Artists</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Complete profile verification" : "Completar verificación del perfil"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Amazon Music for Artists</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Set up artist profile" : "Configurar perfil de artista"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Deezer for Creators</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Profile setup and verification" : "Configuración y verificación del perfil"}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Playlist Submission Platforms */}
    <Card className="border-l-4 border-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <List className="h-5 w-5" />
          {t.playlistSub}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.primary}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Playlist Push</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "$200 campaign minimum" : "Campaña mínima de $200"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">SubmitHub</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Premium credits recommended" : "Se recomiendan créditos premium"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Groover</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Latin market focus" : "Enfoque en el mercado latino"}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-3">{t.free}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Spotify Editorial</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Submit via Spotify for Artists" : "Enviar a través de Spotify for Artists"}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <div>
                  <span className="font-medium">Daily Playlists</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? "Free curator outreach" : "Alcance gratuito a curadores"}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Alert className="mt-4 bg-yellow-50 dark:bg-yellow-900">
          <Info className="h-4 w-4" />
          <AlertTitle>{t.tips}</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-4 mt-2">
              <li>{language === 'en' ? "Submit at least 3 weeks before release" : "Enviar al menos 3 semanas antes del lanzamiento"}</li>
              <li>{language === 'en' ? "Customize each pitch for the platform" : "Personalizar cada propuesta para la plataforma"}</li>
              <li>{language === 'en' ? "Include artist story and song background" : "Incluir historia del artista y antecedentes de la canción"}</li>
              <li>{language === 'en' ? "Specify target playlists or curators" : "Especificar listas de reproducción o curadores objetivo"}</li>
              <li>{language === 'en' ? "Follow up after 5-7 days if no response" : "Hacer seguimiento después de 5-7 días si no hay respuesta"}</li>
            </ul>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

    {/* Quality Control Checklist */}
    <Card className="border-l-4 border-red-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          {t.qualityControl}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3">{t.verification}</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{language === 'en' ? "Audio quality check across all versions" : "Verificación de calidad de audio en todas las versiones"}</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{language === 'en' ? "Metadata verification on distribution platform" : "Verificación de metadatos en la plataforma de distribución"}</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{language === 'en' ? "All platform profiles are complete" : "Todos los perfiles de plataforma están completos"}</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{language === 'en' ? "Pre-save link functionality" : "Funcionalidad del enlace de pre-guardado"}</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>{language === 'en' ? "Backup files stored securely" : "Archivos de respaldo almacenados de forma segura"}</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
)
}