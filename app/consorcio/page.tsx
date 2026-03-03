export default function Consorcio() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Consórcio</h1>
        <p className="text-slate-600">
          Estratégias para alavancar capital com planejamento, de forma estruturada.
        </p>

        <div className="rounded-xl border border-slate-200 p-6 space-y-2 text-slate-700">
          <p className="font-semibold">Vamos te ajudar com:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Escolha de carta e objetivo</li>
            <li>Simulações e cenários</li>
            <li>Estratégia de uso (imóvel, veículo, capital de giro etc.)</li>
          </ul>
        </div>

        <a
          href="https://wa.me/5551991908369"
          className="inline-block rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-black transition"
        >
          Falar no WhatsApp
        </a>
      </div>
    </main>
  );
}