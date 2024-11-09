'use client'

import * as React from 'react'
import "./globals.css"
import { Inter } from 'next/font/google'
import { Globe, LayoutDashboard, Music, Package } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { LanguageProvider, useLanguage } from './guides/music-release/LanguageContext'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <SidebarProvider>
          <div className="grid min-h-screen w-full lg:grid-cols-[1fr_8fr]">
            <Sidebar>
              <SidebarHeader className="border-b border-border px-6 py-4">
                <h1 className="text-xl font-bold">Shardment</h1>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>{t('timelines')}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          {t('studio')}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          {t('shelzy')}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>{t('guides')}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/guides/music-release">
                            <Music className="mr-2 h-4 w-4" />
                            {t('releaseMusic')}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Package className="mr-2 h-4 w-4" />
                          {t('release3DAssets')}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <div className="flex flex-col">
              <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 dark:bg-gray-800/40">            
                <div className="flex-1" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Globe className="h-4 w-4" />
                      <span className="sr-only">{t('languageSwitch')}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('en')}>
                      {t('english')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('es')}>
                      {t('spanish')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </header>
              <main className="flex-grow">
                <div className="container mx-auto py-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  )
}