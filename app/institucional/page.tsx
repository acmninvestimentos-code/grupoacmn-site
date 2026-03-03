export default function Institucional() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold">Institucional</h1>
        <p className="text-slate-600">
          O Grupo ACMN atua com orientação e atendimento para empresas, conectando necessidades
          a soluções adequadas com clareza, segurança e suporte.
        </p>

        <div className="rounded-xl border border-slate-200 p-6 space-y-2 text-slate-700">
          <p className="font-semibold">Canais oficiais</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Site: grupoacmn.com.br</li>
            <li>Atendimento: via WhatsApp (botão no site)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}