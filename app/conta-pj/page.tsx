export default function ContaPJ() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Conta PJ</h1>
        <p className="text-slate-600">
          Orientação completa para abertura/organização do processo e suporte no atendimento.
        </p>

        <div className="rounded-xl border border-slate-200 p-6 space-y-3">
          <p className="font-semibold">Como funciona</p>
          <ol className="list-decimal pl-5 text-slate-700 space-y-1">
            <li>Você informa os dados da empresa</li>
            <li>Validamos o cenário e direcionamos o melhor caminho</li>
            <li>Seguimos com o suporte e acompanhamento</li>
          </ol>
        </div>

        <a
          href="https://wa.me/5551991908369I"
          className="inline-block rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-black transition"
        >
          Falar no WhatsApp
        </a>
      </div>
    </main>
  );
}