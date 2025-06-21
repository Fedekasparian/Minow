import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HomePage() {
  // Datos de ejemplo para clientes
  const clientes = [
    {
      nombre: "TechCorp Solutions",
      antiguedad: "3 años",
      ingresos: "$450,000",
      crecimiento: "+35%",
    },
    {
      nombre: "Innovate Digital",
      antiguedad: "2 años",
      ingresos: "$320,000",
      crecimiento: "+28%",
    },
    {
      nombre: "Global Enterprises",
      antiguedad: "4 años",
      ingresos: "$680,000",
      crecimiento: "+42%",
    },
    {
      nombre: "StartUp Dynamics",
      antiguedad: "1 año",
      ingresos: "$180,000",
      crecimiento: "+15%",
    },
    {
      nombre: "Future Systems",
      antiguedad: "2.5 años",
      ingresos: "$520,000",
      crecimiento: "+38%",
    },
  ]

  // Datos de empleados
  const empleados = [
    {
      nombre: "Manuel Marciano",
      rol: "CEO & Fundador",
      descripcion:
        "Lidera la visión estratégica de Minow y supervisa todas las operaciones. Con más de 10 años de experiencia en tecnología y negocios.",
      imagen: "/placeholder.svg?height=150&width=150",
    },
    {
      nombre: "Manuel Pisano",
      rol: "CTO & Co-fundador",
      descripcion:
        "Responsable de la arquitectura tecnológica y el desarrollo de productos. Experto en sistemas escalables y innovación técnica.",
      imagen: "/placeholder.svg?height=150&width=150",
    },
    {
      nombre: "Felipe",
      rol: "Director de Desarrollo",
      descripcion:
        "Lidera el equipo de desarrollo y asegura la calidad del código. Especialista en metodologías ágiles y mejores prácticas.",
      imagen: "/placeholder.svg?height=150&width=150",
    },
    {
      nombre: "Federico Kaspairan",
      rol: "Director de Operaciones",
      descripcion:
        "Gestiona las operaciones diarias y optimiza los procesos internos. Enfocado en la eficiencia y el crecimiento sostenible.",
      imagen: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800">Minow</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#clientes" className="text-slate-600 hover:text-slate-800 transition-colors">
                Clientes
              </a>
              <a href="#equipo" className="text-slate-600 hover:text-slate-800 transition-colors">
                Nuestro Equipo
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
                  {clientes.map((cliente, index) => (
                    <TableRow key={index} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{cliente.nombre}</TableCell>
                      <TableCell>{cliente.antiguedad}</TableCell>
                      <TableCell className="font-semibold text-green-600">{cliente.ingresos}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {cliente.crecimiento}
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
            {empleados.map((empleado, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Image
                      src={empleado.imagen || "/placeholder.svg"}
                      alt={empleado.nombre}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto border-4 border-slate-200"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{empleado.nombre}</h3>
                  <Badge variant="outline" className="mb-4">
                    {empleado.rol}
                  </Badge>
                  <p className="text-slate-600 text-sm leading-relaxed">{empleado.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
