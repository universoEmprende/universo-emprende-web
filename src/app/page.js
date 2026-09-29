'use client';

import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Minería / Construcción / Áridos',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#071E3D] font-sans antialiased selection:bg-[#FF6600] selection:text-white">
      
      {/* 1. NAVBAR INSTITUCIONAL */}
      <header className="sticky top-0 z-50 bg-[#071E3D] border-b border-[#0070C0]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-[#FF6600] bg-[#071E3D] flex items-center justify-center font-bold text-[#FFD200] text-sm">
              UE
            </div>
            <div className="text-xl tracking-wider text-white">
              <span className="font-semibold lowercase text-gray-300">universo</span>{' '}
              <span className="font-bold uppercase tracking-[0.2em] text-white">EMPRENDE</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-[0.15em] text-gray-200 uppercase">
            <a href="#hero" className="hover:text-[#FF6600] transition-colors">Inicio</a>
            <a href="#sprint" className="hover:text-[#FF6600] transition-colors">Sprint 30 Días</a>
            <a href="#pilares" className="hover:text-[#FF6600] transition-colors">Infraestructura B2B</a>
            <a href="#audit" className="hover:text-[#FF6600] transition-colors">Auditoría Gratis</a>
          </nav>

          <a
            href="#audit"
            className="px-6 py-2.5 bg-[#FF6600] hover:bg-[#e05a00] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors shadow-none"
            style={{ borderRadius: '0px' }}
          >
            Solicitar Auditoría Loom
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION - GRAND SLAM OFFER & NARRATIVA B2B */}
      <section id="hero" className="relative bg-[#071E3D] text-white border-b border-[#0070C0]/20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block border-l-2 border-[#FF6600] bg-[#0070C0]/20 px-3 py-1 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD200]">
              Consultora e Integradora de Transformación B2B de Extremo a Extremo
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight uppercase mb-6">
              Sprint de Transformación Comercial B2B en 30 Días
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 font-normal">
              Estructuramos la narrativa de tu marca (StoryBrand), diseñamos tu identidad bajo geometría suiza, desplegamos tu sitio en Google Cloud / Cloudflare y dejamos lista tu preprensa industrial para terreno (EPP, maquinaria y señalética de obra).
            </p>

            {/* BADGE DE ELIMINACIÓN DE RIESGO (HORMOZI) */}
            <div className="bg-[#0b274c] border border-[#0070C0]/40 border-l-4 border-l-[#FFD200] p-4 mb-10 max-w-2xl">
              <p className="text-xs text-gray-200 uppercase tracking-wider font-bold mb-1 text-[#FFD200]">
                Programa Beta para Empresas en Chile:
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Asumimos el 100% de nuestros honorarios de consultoría y diseño para los primeros 3 casos de estudio B2B. Solo cubres los costos directos de servidor cloud ($0 costo de agencia).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="px-8 py-4 bg-[#FF6600] hover:bg-[#e05a00] text-white text-xs font-bold uppercase tracking-[0.15em] text-center transition-colors"
                style={{ borderRadius: '0px' }}
              >
                Solicitar Video-Auditoría Express (4 Min Gratis)
              </a>
              <a
                href="#pilares"
                className="px-8 py-4 border border-[#0070C0] hover:bg-[#0070C0]/20 text-white text-xs font-bold uppercase tracking-[0.15em] text-center transition-colors"
                style={{ borderRadius: '0px' }}
              >
                Ver Entregables del Sprint
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOS 5 PILARES DE TRANSFORMACIÓN B2B (CORE OFFER) */}
      <section id="pilares" className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#FF6600] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Solución Integral de Extremo a Extremo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071E3D] uppercase tracking-tight">
              Cadena de Valor Comercial B2B
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pilar 1 */}
            <div className="border border-[#E5E5E5] border-l-4 border-l-[#FF6600] p-8 flex flex-col justify-between bg-white" style={{ borderRadius: '0px' }}>
              <div>
                <div className="inline-block bg-[#071E3D] text-[#FFD200] font-mono text-xs font-bold px-3 py-1 mb-4">
                  FASE 01
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 text-[#071E3D]">Estrategia & StoryBrand</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Entrevista ejecutiva inicial para extracción de Misión, Visión, Arquetipo y construcción de la narrativa donde tu cliente es el héroe y tu empresa el guía.
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
                Claridad Radical
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="border border-[#E5E5E5] border-l-4 border-l-[#FF6600] p-8 flex flex-col justify-between bg-white" style={{ borderRadius: '0px' }}>
              <div>
                <div className="inline-block bg-[#071E3D] text-[#FFD200] font-mono text-xs font-bold px-3 py-1 mb-4">
                  FASE 02
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 text-[#071E3D]">Identidad & Brand Core</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Diseño geométrico de Isotipo/Logo bajo retícula suiza, normalización cromática (CMYK, RGB, Pantone) y Manual de Marca profesional (Brandbook).
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
                Estandarización Suiza
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="border border-[#E5E5E5] border-l-4 border-l-[#FF6600] p-8 flex flex-col justify-between bg-white" style={{ borderRadius: '0px' }}>
              <div>
                <div className="inline-block bg-[#071E3D] text-[#FFD200] font-mono text-xs font-bold px-3 py-1 mb-4">
                  FASE 03
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 text-[#071E3D]">Infraestructura Web Cloud</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Desarrollo de sitio web corporativo/Landing Page de alta velocidad sobre infraestructura Google Cloud Platform y perímetro de seguridad Cloudflare.
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
                Rendimiento & Seguridad
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="border border-[#E5E5E5] border-l-4 border-l-[#FF6600] p-8 flex flex-col justify-between bg-white" style={{ borderRadius: '0px' }}>
              <div>
                <div className="inline-block bg-[#071E3D] text-[#FFD200] font-mono text-xs font-bold px-3 py-1 mb-4">
                  FASE 04
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 text-[#071E3D]">Puntos de Contacto & Terreno</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Firmas HTML, Dossier PDF 16:9, Fichas Técnicas, Plantillas de Cotización y preprensa industrial (Ropa EPP, rotulación de maquinaria y señalética).
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
                Presencia Operativa
              </div>
            </div>

            {/* Pilar 5 */}
            <div className="border border-[#E5E5E5] border-l-4 border-l-[#FF6600] p-8 flex flex-col justify-between bg-white md:col-span-2" style={{ borderRadius: '0px' }}>
              <div>
                <div className="inline-block bg-[#071E3D] text-[#FFD200] font-mono text-xs font-bold px-3 py-1 mb-4">
                  FASE 05
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 text-[#071E3D]">Captación Directa & Prospección B2B</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Implementación del embudo de prospección comercial fría/cálida, guiones de contacto directo para tu fuerza de ventas y 3 Reels/videos animados corporativos para destacar en LinkedIn.
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0]">
                Generación de Pipeline
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BONUS STACK & CHECKLIST CERO DEFECTOS */}
      <section id="sprint" className="py-24 bg-[#F8FAFC] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#FF6600] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Inclusiones de Alto Valor Agregado
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071E3D] uppercase tracking-tight">
              Stack de Bonos Ejecutivos Incluidos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E5E5E5] border-t-4 border-t-[#0070C0] p-6" style={{ borderRadius: '0px' }}>
              <div className="text-[#FF6600] font-mono font-bold text-xs uppercase mb-2">BONO 01</div>
              <h4 className="font-bold uppercase text-sm text-[#071E3D] mb-2">Kit Preprensa Industrial</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Archivos vectoriales (.SVG / .EPS) ajustados para producción gráfica en cascos, chalecos EPP, maquinaria pesada y letreros de obra.
              </p>
            </div>

            <div className="bg-white border border-[#E5E5E5] border-t-4 border-t-[#0070C0] p-6" style={{ borderRadius: '0px' }}>
              <div className="text-[#FF6600] font-mono font-bold text-xs uppercase mb-2">BONO 02</div>
              <h4 className="font-bold uppercase text-sm text-[#071E3D] mb-2">Configuración Cloud Enterprise</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Despliegue de DNS, SSL, correos Google Workspace y reglas de aceleración Cloudflare configuradas por ingenieros.
              </p>
            </div>

            <div className="bg-white border border-[#E5E5E5] border-t-4 border-t-[#0070C0] p-6" style={{ borderRadius: '0px' }}>
              <div className="text-[#FF6600] font-mono font-bold text-xs uppercase mb-2">BONO 03</div>
              <h4 className="font-bold uppercase text-sm text-[#071E3D] mb-2">Checklist "Cero Defectos"</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Auditoría e inspección técnica de cumplimiento estándar minero y corporativo antes de lanzar cualquier activo a mercado.
              </p>
            </div>

            <div className="bg-white border border-[#E5E5E5] border-t-4 border-t-[#0070C0] p-6" style={{ borderRadius: '0px' }}>
              <div className="text-[#FF6600] font-mono font-bold text-xs uppercase mb-2">BONO 04</div>
              <h4 className="font-bold uppercase text-sm text-[#071E3D] mb-2">Guiones de Prospección Directa</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Plantillas y metodología de acercamiento frío/cálido (A-C-A) para que tu equipo comercial califique prospectos de alto valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE CAPTURA - LEAD MAGNET (VIDEO AUDITORÍA LOOM) */}
      <section id="audit" className="py-24 bg-[#071E3D] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#FF6600] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Lead Magnet de Diagnóstico (Cero Riesgo)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-6">
              Solicita tu Auditoría de Fricción Comercial (Video Loom de 4 Minutos)
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Grabaremos un video exclusivo de 4 minutos analizando tu sitio web, dossier y puntos de contacto actuales. Te mostraremos con absoluta honestidad los 2 puntos donde tu mensaje o infraestructura te están haciendo perder licitaciones.
            </p>

            <div className="space-y-3 border-t border-[#0070C0]/30 pt-6 text-xs text-gray-300">
              <p><strong className="text-[#FFD200] uppercase">100% Gratuito:</strong> Sin compromisos ni llamadas de venta agresivas.</p>
              <p><strong className="text-[#FFD200] uppercase">Enfoque B2B Chile:</strong> Minería, construcción, áridos, tecnología y servicios B2B.</p>
              <p><strong className="text-[#FFD200] uppercase">Garantía "Cero Defectos":</strong> Recibes el análisis técnico directo en tu correo.</p>
            </div>
          </div>

          {/* FORMULARIO DE CAPTURA DEL LEAD MAGNET */}
          <div className="bg-[#0b274c] p-8 border border-[#0070C0]/30 border-l-4 border-l-[#FF6600]" style={{ borderRadius: '0px' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-[#FFD200] font-bold text-xl uppercase mb-2 tracking-wider">Solicitud de Auditoría Recibida</div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  En menos de 24 horas hábiles recibirás en tu correo el video Loom de 4 minutos con el análisis de fricción comercial de tu empresa.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1">Nombre Completo del Ejecutivo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#071E3D] border border-[#0070C0]/50 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF6600]"
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1">Empresa</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#071E3D] border border-[#0070C0]/50 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF6600]"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1">Correo Corporativo</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#071E3D] border border-[#0070C0]/50 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF6600]"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1">Sector Industrial / Rubro</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full bg-[#071E3D] border border-[#0070C0]/50 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF6600]"
                    style={{ borderRadius: '0px' }}
                  >
                    <option value="Minería / Construcción / Áridos">Minería / Construcción / Áridos</option>
                    <option value="Servicios Profesionales B2B">Servicios Profesionales B2B</option>
                    <option value="Tecnología & Software B2B">Tecnología & Software B2B</option>
                    <option value="Ventas Mayoristas / Logística">Ventas Mayoristas / Logística</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1">Sitio Web Actual o Canal Principal</label>
                  <input
                    type="text"
                    placeholder="www.tuempresa.cl"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#071E3D] border border-[#0070C0]/50 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF6600]"
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors"
                  style={{ borderRadius: '0px' }}
                >
                  Solicitar Video-Auditoría Loom de 4 Minutos
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. FOOTER INSTITUCIONAL */}
      <footer className="bg-[#05152a] text-gray-400 py-12 border-t border-[#0070C0]/20 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-bold text-white tracking-widest uppercase">universo EMPRENDE</span>
            <span className="ml-3">© {new Date().getFullYear()} Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <span className="border border-gray-700 px-2 py-1">GCP Cloud Infrastructure</span>
            <span className="border border-gray-700 px-2 py-1">Cloudflare Secured</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
