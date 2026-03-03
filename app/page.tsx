import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/5551991908369"; // ex: https://wa.me/5551999999999

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative h-16 w-72">
            <Image
              src="/logo.png"
              alt="Grupo ACMN"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="mt-5 text-sm text-slate-600">
            Atendimento e soluções para empresas: Conta PJ • Consórcio • Imóveis
          </p>

          <div className="mt-6 h-px w-full bg-slate-200" />
        </div>

        {/* Links */}
        <div className="mt-8 space-y-3">
          <a
            href={WHATSAPP_LINK}
            className="block rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center font-semibold text-emerald-800 hover:bg-emerald-100 transition"
          >
            Falar no WhatsApp (Atendimento)
          </a>

          <a
            href="/conta-pj"
            className="block rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-semibold hover:bg-slate-50 transition"
          >
            Abrir / Orientação de Conta PJ
          </a>

          <a
            href="/consorcio"
            className="block rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-semibold hover:bg-slate-50 transition"
          >
            Consórcio: Estratégia de Capital
          </a>

          <a
            href="/imoveis"
            className="block rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-semibold hover:bg-slate-50 transition"
          >
            Oportunidades Imobiliárias
          </a>

          <a
            href="/institucional"
            className="block rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-semibold hover:bg-slate-50 transition"
          >
            Quem somos (Institucional)
          </a>
        </div>

        {/* Trust footer */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Grupo ACMN</p>
          <p className="mt-1">
            Atendimento humanizado, comunicação clara e direcionamento para a melhor solução.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Dica: sempre confirme canais oficiais pelo domínio grupoacmn.com.br.
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Grupo ACMN • grupoacmn.com.br
        </p>
      </div>
    </main>
  );
}