"use client"

import { useActionState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "../action/contact"
import { Mail, Phone, MapPin } from "lucide-react"


 
export function Formulario() {

  const[state,action, isPending] = useActionState(submitContactForm, null)



  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contáctanos</h2>
          <p className="text-lg text-slate-600">
            ¿Listo para transformar tu negocio? Hablemos sobre tu próximo proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-700">contacto@minow.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-700">+54 11 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-slate-600" />
                  <span className="text-slate-700">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Experiencia comprobada con más de 50 proyectos exitosos</li>
                <li>• Equipo especializado en tecnologías de vanguardia</li>
                <li>• Soporte continuo y mantenimiento post-lanzamiento</li>
                <li>• Metodologías ágiles para entregas rápidas y eficientes</li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={action} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu mail"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button type="submit" disabled={isPending} className="w-full bg-slate-800 hover:bg-slate-700">
                  {isPending ? "Enviando..." : "Enviar mensaje"}
                </Button>

                {state && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      state.success
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {state.message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
