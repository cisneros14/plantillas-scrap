"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Sparkles, CheckCircle2, ShieldCheck, Mail, Phone, Fingerprint, Award, Loader2, ArrowRight, Copy, Share2, Trophy } from "lucide-react";
import { isValidEcuadorianID } from "@/lib/validation";

function EarlyAccessContent() {
  const searchParams = useSearchParams();
  const refFromUrl = searchParams.get("ref") || "";

  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [givenNames, setGivenNames] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [cedulaValida, setCedulaValida] = useState(false);

  // Estados de usuario registrado
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [referralsCount, setReferralsCount] = useState(0);
  const [position, setPosition] = useState(1);
  const [referralCode, setReferralCode] = useState("");

  // Estado para éxito de registro nuevo
  const [registeredSuccessfully, setRegisteredSuccessfully] = useState(false);

  // Leaderboard público (Top 10)
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);

  // Cargar leaderboard al montar la página
  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("/api/early-access/leaderboard");
      const data = await res.json();
      if (res.ok && data.leaderboard) {
        setLeaderboard(data.leaderboard);
      }
    } catch (error) {
      console.error("Error cargando leaderboard:", error);
    } finally {
      setLeaderboardLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  // Validar formato de cédula y consultar identidad
  useEffect(() => {
    const fetchIdentidad = async () => {
      if (cedula.length === 10 && isValidEcuadorianID(cedula)) {
        setIsVerifying(true);
        try {
          const res = await fetch(`/api/early-access/validate-cedula?cedula=${cedula}`);
          const data = await res.json();

          if (!res.ok) {
            toast.error(data.error || "No se pudo validar la cédula");
            setCedulaValida(false);
            setNombre("");
            setGivenNames("");
            setBirthDate("");
            setAlreadyRegistered(false);
          } else {
            setNombre(data.name);
            setGivenNames(data.givenNames || "");
            setBirthDate(data.birthDate || "");
            setCedulaValida(true);

            if (data.alreadyRegistered) {
              setAlreadyRegistered(true);
              setReferralsCount(data.referralsCount || 0);
              setPosition(data.position || 1);
              setReferralCode(data.referralCode || "");
              toast.info("Identidad recuperada. Ya formas parte del Programa de Recompensas.");
            } else {
              setAlreadyRegistered(false);
              toast.success("Identidad verificada correctamente");
            }
          }
        } catch (error) {
          console.error("Error validando cédula:", error);
          toast.error("Error al conectar con el servicio de verificación");
          setCedulaValida(false);
          setAlreadyRegistered(false);
        } finally {
          setIsVerifying(false);
        }
      } else {
        // Reiniciar si se cambia la longitud o valor
        setCedulaValida(false);
        setAlreadyRegistered(false);
        setNombre("");
        setGivenNames("");
        setBirthDate("");
      }
    };

    fetchIdentidad();
  }, [cedula]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cedulaValida || !nombre || !email || !phone) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }

    setIsSubmiting(true);
    try {
      const res = await fetch("/api/early-access/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nombre,
          birthDate,
          cedula,
          email,
          phone,
          referredBy: refFromUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Error al registrarse");
      } else {
        toast.success(data.message || "Registro completado con éxito");
        setReferralCode(data.referralCode || "");
        setPosition(data.position || 1);
        setReferralsCount(0);
        setRegisteredSuccessfully(true);
        // Refrescar leaderboard por si entró en el Top 10
        fetchLeaderboard();
      }
    } catch (error) {
      console.error("Error al enviar registro:", error);
      toast.error("Ocurrió un error al procesar el registro.");
    } finally {
      setIsSubmiting(false);
    }
  };

  const handleCopyLink = (code: string) => {
    const link = `${window.location.origin}/early-access?ref=${code}`;
    navigator.clipboard.writeText(link);
    toast.success("Enlace de referido copiado al portapapeles");
  };

  return (
    <div className="w-full py-16 px-4 md:py-24 flex flex-col items-center justify-start relative overflow-hidden bg-background">

      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 mb-20">

        {/* Left Side: Product Intro */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Programa de Recompensas
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent leading-none">
              BIOPEPHT
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground italic font-serif">
              Colágeno Hidrolizado
            </h2>
          </div>

          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
            Desarrollamos una fórmula de regeneración celular profunda de alta pureza y solubilidad instantánea. Únete a nuestro Programa de Recompensas para asegurar beneficios vitalicios y ser de los primeros en probar la revolución en salud y belleza celular.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            <div className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm">Pureza Certificada</h4>
                <p className="text-xs text-muted-foreground mt-1">Sin aditivos, sin azúcar ni conservantes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm">Absorción Inmediata</h4>
                <p className="text-xs text-muted-foreground mt-1">Hidrólisis avanzada para bioactividad celular.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground/70">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Registro seguro (Sri/Registro Civil)</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Stock inicial prioritario</span>
          </div>
        </div>

        {/* Right Side: Form / Stats Card */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto">
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-6 shadow relative z-10">

            {/* CASO 1: Ya registrado (Se muestra directo al poner cédula existente) */}
            {cedulaValida && alreadyRegistered ? (
              <div className="text-center py-4 space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto shadow shadow-primary/25">
                  <Trophy className="w-8 h-8 text-white animate-bounce" />
                </div>

                <div className="space-y-2">
                  {givenNames && (
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                      ¡Bienvenido {givenNames}!, es un gusto tenerte aquí
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">Programa de Recompensas</h3>
                  <p className="text-sm text-muted-foreground">
                    Tu cédula ya está registrada. Consulta tus estadísticas en el Programa de Recompensas a continuación.
                  </p>
                </div>

                {/* Grid de Estadísticas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-muted/20">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Puesto Actual</p>
                    <p className="text-3xl font-extrabold text-primary mt-1 font-serif">#{position}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/20">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Leads Referidos</p>
                    <p className="text-3xl font-extrabold text-primary mt-1 font-serif">{referralsCount}</p>
                  </div>
                </div>

                {/* Enlace de Referido */}
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-medium">Comparte tu enlace de referido para ganar puestos en el Programa de Recompensas:</p>
                  <div className="flex gap-2 bg-muted/40 border border-border rounded-xl p-1.5 items-center">
                    <input
                      readOnly
                      value={`${window.location.origin}/early-access?ref=${referralCode}`}
                      className="bg-transparent border-none text-xs text-muted-foreground font-mono focus:outline-none flex-1 pl-2 truncate"
                    />
                    <button
                      onClick={() => handleCopyLink(referralCode)}
                      className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer"
                      title="Copiar Enlace"
                    >
                      <Copy className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCedula("");
                    setNombre("");
                    setGivenNames("");
                    setBirthDate("");
                    setCedulaValida(false);
                    setAlreadyRegistered(false);
                  }}
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors underline cursor-pointer"
                >
                  Consultar otra cédula
                </button>
              </div>
            ) : !registeredSuccessfully ? (
              // CASO 2: Formulario de Registro (Nuevo lead)
              <>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Programa de Recompensas</h3>
                  <p className="text-sm text-muted-foreground">
                    Regístrate utilizando tu número de cédula para validar tu lugar prioritario.
                  </p>
                </div>

                {refFromUrl && (
                  <div className="bg-primary/5 border border-primary/20 text-primary p-3 rounded-xl text-xs flex items-center gap-2.5 animate-in slide-in-from-top-3">
                    <Share2 className="w-4 h-4 text-primary shrink-0" />
                    <p>Has sido invitado a formar parte del Programa de Recompensas.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Cédula Input */}
                  <div className="space-y-1.5">
                    {/* Mensaje de bienvenida personalizado arriba de la cédula al validarse */}
                    {cedulaValida && givenNames && !alreadyRegistered && (
                      <p className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary/5 border border-primary/25 p-2 rounded-lg text-center animate-in zoom-in duration-300 mb-2">
                        ¡Bienvenido {givenNames}!, es un gusto tenerte aquí
                      </p>
                    )}

                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                      Cédula de Identidad (Ecuador)
                    </label>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60">
                        <Fingerprint className="w-4 h-4" />
                      </span>
                      <input
                        required
                        type="text"
                        maxLength={10}
                        placeholder="Ej. 1753436516"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value.replace(/[^\d]/g, ""))}
                        className="w-full bg-muted/30 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-mono"
                      />
                      {isVerifying && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </span>
                      )}
                    </div>
                    {cedula.length > 0 && cedula.length < 10 && (
                      <p className="text-[11px] text-destructive font-medium">Debe tener 10 dígitos numéricos</p>
                    )}
                    {cedula.length === 10 && !isValidEcuadorianID(cedula) && (
                      <p className="text-[11px] text-destructive font-medium">Formato de cédula incorrecto o inválido</p>
                    )}
                  </div>

                  {/* inputs de Correo y WhatsApp/Teléfono (Se muestran al validar cédula exitosamente) */}
                  {cedulaValida && nombre && !alreadyRegistered && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-3 duration-300">
                      {/* Correo Electrónico */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                          Correo Electrónico
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            required
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-muted/30 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                          />
                        </div>
                      </div>

                      {/* WhatsApp / Teléfono */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                          Número de WhatsApp
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            required
                            type="tel"
                            placeholder="Ej. 0987654321"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-muted/30 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmiting}
                        className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3 text-sm shadow shadow-primary/20 active:scale-[0.98] transition-all cursor-pointer"
                      >
                        {isSubmiting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Registrando...
                          </>
                        ) : (
                          <>
                            Confirmar Registro
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </form>
              </>
            ) : (
              // CASO 3: Éxito de Nuevo Registro
              <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow shadow-primary/25">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">¡Recompensa Asegurada!</h3>
                  <p className="text-sm text-muted-foreground">
                    Hola <span className="font-semibold text-primary">{nombre}</span>, has asegurado tu lugar en el Programa de Recompensas de Biopepht.
                  </p>
                </div>

                {/* Grid de Estadísticas Iniciales */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-muted/20">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Puesto Inicial</p>
                    <p className="text-3xl font-extrabold text-primary mt-1 font-serif">#{position}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/20">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Leads Referidos</p>
                    <p className="text-3xl font-extrabold text-primary mt-1 font-serif">0</p>
                  </div>
                </div>

                {/* Enlace de Referido */}
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-medium font-serif italic">Por cada referido que completes, ganarás más recompensas y subirás puestos en la lista.</p>
                  <div className="flex gap-2 bg-muted/40 border border-border rounded-xl p-1.5 items-center">
                    <input
                      readOnly
                      value={`${window.location.origin}/early-access?ref=${referralCode}`}
                      className="bg-transparent border-none text-xs text-muted-foreground font-mono focus:outline-none flex-1 pl-2 truncate"
                    />
                    <button
                      onClick={() => handleCopyLink(referralCode)}
                      className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors cursor-pointer"
                      title="Copiar Enlace"
                    >
                      <Copy className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setRegisteredSuccessfully(false);
                    setCedula("");
                    setNombre("");
                    setGivenNames("");
                    setBirthDate("");
                    setEmail("");
                    setPhone("");
                    setCedulaValida(false);
                    setAlreadyRegistered(false);
                  }}
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors underline cursor-pointer"
                >
                  Registrar otra cédula
                </button>
              </div>
            )}

          </div>
        </div>
      </div>


      {/* PUBLIC LEADERBOARD SECTION (Top 10) */}
      <div className="max-w-4xl w-full relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center justify-center bg-primary/10 border border-primary/30 px-3 py-1 rounded-full text-primary text-xs font-bold gap-2">
            <Trophy className="w-4 h-4 text-primary" />
            PROGRAMA DE RECOMPENSAS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground font-normal">
            Top 10 Líderes <span className="text-primary italic">Biopepht</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Quienes lideran el programa con mayor número de referidos.
          </p>
        </div>

        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow">
          {leaderboardLoading ? (
            <div className="py-12 flex flex-col items-center justify-center text-muted-foreground gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm">Cargando líderes...</p>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <p className="text-sm">No hay registros de referidos todavía. ¡Sé el primero en ganar recompensas!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/40 bg-muted/10">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground/80 w-24">Puesto</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Nombre</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground/80 text-right w-32">Referidos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {leaderboard.map((user) => {
                    // Estilos de podio para los 3 primeros puestos
                    const isTop3 = user.position <= 3;
                    const medal = user.position === 1 ? "🥇" : user.position === 2 ? "🥈" : user.position === 3 ? "🥉" : null;

                    return (
                      <tr
                        key={user.position}
                        className={`hover:bg-muted/10 transition-colors ${isTop3 ? "bg-primary/5" : ""}`}
                      >
                        <td className="py-3.5 px-6 text-sm font-semibold">
                          <span className="flex items-center gap-1.5">
                            {medal && <span className="text-base">{medal}</span>}
                            <span className={isTop3 ? "text-primary font-extrabold" : "text-muted-foreground"}>
                              #{user.position}
                            </span>
                          </span>
                        </td>
                        <td className={`py-3.5 px-6 text-sm font-medium ${isTop3 ? "text-foreground font-semibold" : "text-muted-foreground/90"}`}>
                          {user.name}
                        </td>
                        <td className="py-3.5 px-6 text-sm text-right font-mono font-bold text-primary">
                          {user.referrals}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EarlyAccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    }>
      <EarlyAccessContent />
    </Suspense>
  );
}
