'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"
import {Formulario} from "./components/formulario"


export default function page() {

  // Datos de ejemplo para clientes
  const [clientes, setClientes] = useState<any[]>([])

  // Datos de empleados
  const [empleados, setEmpleados] = useState<any[]>([])

  // Efecto para cargar los datos de clientes y empleados al montar el componente
  useEffect(() => {
    fetchClientes()
    fetchEmpleados()
  }, [])

  // Funcion que obtiene los datos de clientes y los establece en el estado
  const fetchClientes = async () => {
    const res = await fetch("/api/cliente") // Reemplaza con tu API real
    const data = await res.json()
    setClientes(data)
  }

  // Funcion que obtiene los datos de empleados y los establece en el estado
    const fetchEmpleados = async () => {
    const res = await fetch("/api/empleado") // Reemplaza con tu API real
    const data = await res.json()
    setEmpleados(data)
  }


  // Renderiza la página principal con las secciones de clientes, equipos y formulario de contacto
  // Incluye un header, una sección de bienvenida, una sección de clientes, una sección del equipo y un formulario de contacto
  // También incluye un footer con enlaces de contacto y servicios
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800">Minow</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#"
                onClick={e => {
                  e.preventDefault();
                  const clientes = document.getElementById("clientes");
                if (clientes) {
                  clientes.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-slate-600 hover:text-slate-800 transition-colors transform hover:-translate-y-1 duration-300" 
              style={{ scrollBehavior: "smooth", transition: "transform 0.3s" }}>
                Maru y marcuss
              </a>
              <a href="#"
                onClick={e => {
                  e.preventDefault();
                  const equipo = document.getElementById("equipo");
                if (equipo) {
                  equipo.scrollIntoView({ behavior: "smooth" });
                }
                }}
                  className="text-slate-600 hover:text-slate-800 transition-colors transform hover:-translate-y-1 duration-300"
                  style={{ scrollBehavior: "smooth", transition: "transform 0.3s" }}
                >
                Nuestro Equipo
              </a>
              
                <a
                  href="#"
                  onClick={e => {
                  e.preventDefault();
                  const contacto = document.getElementById("contacto");
                  if (contacto) {
                    contacto.scrollIntoView({ behavior: "smooth" });
                  }
                  }}
                  className="text-slate-600 hover:text-slate-800 transition-colors transform hover:-translate-y-1 duration-300"
                  style={{ scrollBehavior: "smooth", transition: "transform 0.3s" }}
                >
                  Contáctanos
                </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Bienvenido a Minow</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transformamos ideas en soluciones digitales exitosas. Nuestro equipo experto ayuda a empresas a crecer y
            alcanzar sus objetivos tecnológicos.
          </p>
        </div>
      </section>

      {/* Sección de Clientes */}
      <section id="clientes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestros Clientes</h2>
            <p className="text-lg text-slate-600">
              Empresas que confían en nosotros y han experimentado un crecimiento excepcional
            </p>
          </div>

          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Resultados de Nuestros Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Cliente</TableHead>
                    <TableHead className="font-semibold">Antigüedad</TableHead>
                    <TableHead className="font-semibold">Ingresos Generados</TableHead>
                    <TableHead className="font-semibold">Crecimiento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientes.map((clientes, index) => (
                    <TableRow key={index} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{clientes.nombre}</TableCell>
                      <TableCell>{clientes.antiguedad}</TableCell>
                      <TableCell className="font-semibold text-green-600">{clientes.ingresos}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {clientes.crecimiento}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section id="equipo" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-slate-600">Conoce a los profesionales que hacen posible el éxito de Minow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {empleados.map((empleados, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <img
                      
                      key={empleados.id}
                      src={empleados.foto || "/placeholder.svg"}
                      alt={empleados.nombre}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto border-4 border-slate-200"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{empleados.nombre}</h3>
                  <Badge variant="outline" className="mb-4">
                    {empleados.rol}
                  </Badge>
                  <p className="text-slate-600 text-sm leading-relaxed">{empleados.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>




      {/* Formulario de Contacto */}
      <Formulario />

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Minow</h3>
          <p className="text-slate-300 mb-6">Transformando el futuro digital, un proyecto a la vez.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Sobre Nosotros
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
