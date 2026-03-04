"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SplashIntro from "../components/SplashIntro";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const BRAND = {
  navy: "#101828",
  blue: "#2563eb",
};

const areaData = [
  { name: "Seg", v: 18 },
  { name: "Ter", v: 22 },
  { name: "Qua", v: 28 },
  { name: "Qui", v: 26 },
  { name: "Sex", v: 34 },
  { name: "Sáb", v: 32 },
  { name: "Dom", v: 38 },
];

const barData = [
  { name: "Conta PJ", v: 42 },
  { name: "MEI", v: 58 },
  { name: "Capital", v: 31 },
  { name: "Consórcio", v: 16 },
  { name: "Imóvel", v: 12 },
];

export default function Home() {
  const whatsappNumber = "5551991908369";
  const waLink = useMemo(() => {
    const text =
      "Olá! Vim pelo site do Grupo ACMN e quero atendimento para minha empresa.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, []);

  const [showSplash, setShowSplash] = useState(true);

  // splash 1x por dia
  useEffect(() => {
    const key = "acmn_splash_last";
    const last = localStorage.getItem(key);
    const today = new Date().toISOString().slice(0, 10);
    if (last === today) setShowSplash(false);
  }, []);

  const onDone = () => {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem("acmn_splash_last", today);
    setShowSplash(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showSplash && <SplashIntro onDone={onDone} />}

      <main className="min-h-screen bg-white text-neutral-900">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Grupo ACMN"
                width={200}
                height={60}
                className="h-8 w-auto"
                priority
              />
              <span className="hidden text-xs text-neutral-500 sm:block">
                Porto Alegre • RS
              </span>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
              <a className="hover:text-neutral-900" href="#solucoes">
                Soluções
              </a>
              <a className="hover:text-neutral-900" href="#como-funciona">
                Como funciona
              </a>
              <a className="hover:text-neutral-900" href="#beneficios">
                Benefícios
              </a>
              <a className="hover:text-neutral-900" href="#contato">
                Contato
              </a>
            </nav>

            <a
              href={waLink}
              className="rounded-2xl bg-[#101828] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b1220]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </header>

        {/* Hero SaaS */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.14),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(16,24,40,0.10),transparent_35%),radial-gradient(circle_at_40%_90%,rgba(37,99,235,0.10),transparent_40%)]" />
          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  Atendimento humano • Processo guiado • Rápido
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  Um jeito mais simples de fazer sua empresa crescer.
                </h1>

                <p className="mt-4 text-lg text-neutral-600">
                  Conta PJ com orientação completa,{" "}
                  <span className="font-semibold text-neutral-900">
                    Conta MEI em 3 min
                  </span>{" "}
                  e soluções de capital para o seu CNPJ — com atendimento direto
                  e objetivo.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={waLink}
                    className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Quero atendimento
                  </a>
                  <a
                    href="#solucoes"
                    className="rounded-2xl border bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"
                  >
                    Ver soluções
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2 text-xs text-neutral-600">
                  <Chip>Conta PJ (Cora)</Chip>
                  <Chip>MEI em 3 min</Chip>
                  <Chip>Capital para PJ</Chip>
                  <Chip muted>Consórcio (em breve)</Chip>
                  <Chip muted>Imóvel (em breve)</Chip>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <MiniStat title="Rápido" value="3 min" desc="para MEI" />
                  <MiniStat title="Foco" value="PJ" desc="CNPJ e MEI" />
                  <MiniStat title="Suporte" value="Humano" desc="sem robô" />
                </div>
              </div>

              {/* Dashboard mock */}
              <div className="relative">
                <div className="rounded-3xl border bg-white/70 p-6 shadow-sm backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">
                        Performance da semana
                      </div>
                      <div className="mt-1 text-xs text-neutral-500">
                        Exemplo visual (dashboard)
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      +18%
                    </span>
                  </div>

                  <div className="mt-5 h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={areaData}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip
                          contentStyle={{
                            borderRadius: 12,
                            border: "1px solid #e5e7eb",
                            fontSize: 12,
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="v"
                          stroke={BRAND.blue}
                          fill={BRAND.blue}
                          fillOpacity={0.15}
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    <Kpi title="Leads" value="124" note="na semana" />
                    <Kpi title="Conversão" value="18%" note="crescendo" />
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold">
                    Interesses por solução
                  </div>
                  <div className="mt-4 h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip
                          contentStyle={{
                            borderRadius: 12,
                            border: "1px solid #e5e7eb",
                            fontSize: 12,
                          }}
                        />
                        <Bar dataKey="v" fill={BRAND.navy} radius={[10, 10, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">
                    Visual estilo SaaS (dados ilustrativos)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <span className="font-semibold text-neutral-700">
                Usado por empresas em crescimento
              </span>
              <span>•</span>
              <span>Processo guiado</span>
              <span>•</span>
              <span>Atendimento rápido</span>
              <span>•</span>
              <span>Online e Porto Alegre</span>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section id="solucoes" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Soluções</h2>
            <p className="mt-2 text-neutral-600">
              Escolha o que sua empresa precisa agora.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <SolutionCard
                title="Conta PJ (Cora)"
                desc="Orientação completa para abertura e organização do processo."
                badge="Disponível"
              />
              <SolutionCard
                title="Conta MEI em 3 min"
                desc="Passo a passo simples para você abrir sua conta com agilidade."
                badge="Disponível"
              />
              <SolutionCard
                title="Capital para PJ"
                desc="Opções para organizar caixa, planejar e crescer com segurança."
                badge="Disponível"
              />
              <SolutionCard
                title="Consórcio"
                desc="Estratégia planejada para compra e crescimento."
                badge="Em breve"
                muted
              />
              <SolutionCard
                title="Imóvel"
                desc="Oportunidades e suporte no processo."
                badge="Em breve"
                muted
              />
              <div className="rounded-3xl border bg-neutral-50 p-7">
                <div className="text-sm font-semibold">Quer prioridade?</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Chame no WhatsApp e diga o objetivo.
                </p>
                <a
                  href={waLink}
                  className="mt-4 inline-flex rounded-2xl bg-[#101828] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0b1220]"
                >
                  Falar agora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="border-t bg-neutral-50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Como funciona
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <StepCard
                n="1"
                title="Contato"
                desc="Você chama no WhatsApp ou preenche o formulário."
              />
              <StepCard
                n="2"
                title="Diagnóstico"
                desc="Entendemos seu momento e definimos o caminho ideal."
              />
              <StepCard
                n="3"
                title="Ação"
                desc="Você segue com orientação prática e acompanhamento."
              />
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Por que o Grupo ACMN
            </h2>
            <p className="mt-2 text-neutral-600">
              Visual clean, processo claro e atendimento rápido.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Benefit title="Clareza" desc="Você entende o próximo passo." />
              <Benefit title="Velocidade" desc="MEI em até 3 minutos." />
              <Benefit title="Confiança" desc="Atendimento humano e direto." />
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="border-t bg-neutral-50">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold">Contato</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Ao enviar, abrimos o WhatsApp com a mensagem pronta.
                </p>

                <form
                  className="mt-5 grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const data = new FormData(form);

                    const nome = String(data.get("nome") || "").trim();
                    const whatsapp = String(data.get("whatsapp") || "").trim();
                    const objetivo = String(data.get("objetivo") || "").trim();

                    const msg =
                      `Olá! Meu nome é ${nome || "—"}. ` +
                      `WhatsApp: ${whatsapp || "—"}. ` +
                      `Objetivo: ${objetivo || "—"}. ` +
                      `Vim pelo site do Grupo ACMN.`;

                    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      msg
                    )}`;
                  }}
                >
                  <Field label="Seu nome">
                    <input
                      name="nome"
                      placeholder="Ex: Ana"
                      className="w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </Field>
                  <Field label="Seu WhatsApp">
                    <input
                      name="whatsapp"
                      placeholder="Ex: (51) 99999-9999"
                      className="w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </Field>
                  <Field label="Objetivo">
                    <select
                      name="objetivo"
                      defaultValue="Conta PJ (Cora)"
                      className="w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option>Conta PJ (Cora)</option>
                      <option>Conta MEI em 3 min</option>
                      <option>Capital para PJ</option>
                      <option>Consórcio (em breve)</option>
                      <option>Imóvel (em breve)</option>
                    </select>
                  </Field>

                  <button
                    className="mt-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                    type="submit"
                  >
                    Enviar e abrir WhatsApp
                  </button>

                  <p className="text-xs text-neutral-500">
                    Você será redirecionado para o WhatsApp.
                  </p>
                </form>
              </div>

              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold">Grupo ACMN</div>
                <div className="mt-2 text-sm text-neutral-600">
                  Porto Alegre - Rio Grande do Sul
                </div>

                <div className="mt-6 grid gap-3">
                  <InfoRow title="WhatsApp" value="+55 (51) 99190-8369" />
                  <InfoRow title="Disponível" value="Conta PJ • MEI • Capital PJ" />
                  <InfoRow title="Em breve" value="Consórcio • Imóvel" />
                </div>

                <a
                  href={waLink}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#101828] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0b1220]"
                >
                  Falar agora
                </a>

                <p className="mt-5 text-xs text-neutral-500">
                  © {new Date().getFullYear()} Grupo ACMN — Todos os direitos
                  reservados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp */}
        <a
          href={waLink}
          className="fixed bottom-5 right-5 rounded-full bg-[#101828] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#0b1220]"
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}

function Chip({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={
        "rounded-full border px-3 py-1 " +
        (muted ? "bg-neutral-50 text-neutral-500" : "bg-white text-neutral-700")
      }
    >
      {children}
    </span>
  );
}

function MiniStat({
  title,
  value,
  desc,
}: {
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border bg-white/70 p-4 backdrop-blur">
      <div className="text-xs font-semibold text-neutral-700">{title}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-neutral-600">{desc}</div>
    </div>
  );
}

function Kpi({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="text-xs text-neutral-500">{title}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      <div className="mt-1 text-xs text-neutral-500">{note}</div>
    </div>
  );
}

function SolutionCard({
  title,
  desc,
  badge,
  muted,
}: {
  title: string;
  desc: string;
  badge: string;
  muted?: boolean;
}) {
  return (
    <div
      className={
        "rounded-3xl border p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md " +
        (muted ? "bg-neutral-50" : "bg-white")
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold">{title}</div>
        <span
          className={
            "rounded-full px-3 py-1 text-xs font-semibold " +
            (badge === "Disponível"
              ? "bg-blue-600 text-white"
              : "bg-neutral-200 text-neutral-700")
          }
        >
          {badge}
        </span>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{desc}</p>
      <div className="mt-6 h-[1px] w-full bg-neutral-200/70" />
      <p className="mt-4 text-xs text-neutral-500">
        {badge === "Disponível" ? "Pronto para iniciar." : "Em breve disponível."}
      </p>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-7 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#101828] text-sm font-semibold text-white">
        {n}
      </div>
      <div className="mt-4 text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-7 shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1">
      <label className="text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

function InfoRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border bg-neutral-50 p-5">
      <div className="text-xs font-semibold text-neutral-700">{title}</div>
      <div className="mt-1 text-sm text-neutral-900">{value}</div>
    </div>
  );
}