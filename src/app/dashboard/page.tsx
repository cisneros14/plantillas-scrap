import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/dashboard/user-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Tv, Users, CreditCard } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 bg-background">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          </div>
          <UserNav />
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6 bg-muted/20">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Ventas Totales
                </CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% respecto al mes pasado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pedidos Nuevos
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180 en la última hora
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Inventario TV
                </CardTitle>
                <Tv className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,234</div>
                <p className="text-xs text-muted-foreground">
                  14 productos bajos en stock
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Clientes Activos
                </CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 desde la semana pasada
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Ventas Recientes</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] flex items-end justify-between gap-2 px-4 pt-4">
                  {[35, 78, 45, 90, 60, 85, 40].map((height, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-end items-center gap-2 w-full h-full"
                    >
                      <div
                        className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-md relative group"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          ${height * 100}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Últimas Transacciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center space-y-0 border rounded-full w-9 h-9 text-primary bg-primary/10">
                      <Tv className="h-4 w-4" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Samsung 65&quot; 4K
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Juan Pérez
                      </p>
                    </div>
                    <div className="ml-auto font-medium">+$899.00</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center space-y-0 border rounded-full w-9 h-9 text-secondary bg-secondary/10">
                      <Tv className="h-4 w-4" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        TCL 50&quot; Google TV
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Maria Lopez
                      </p>
                    </div>
                    <div className="ml-auto font-medium">+$450.00</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center space-y-0 border rounded-full w-9 h-9">
                      <CreditCard className="h-4 w-4 text-zinc-500" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        LG OLED 55&quot;
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Carlos Ruiz
                      </p>
                    </div>
                    <div className="ml-auto font-medium">+$1,200.00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
