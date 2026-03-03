export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Grupo ACMN
        </h1>

        <p className="text-lg text-gray-600">
          Soluções estratégicas para empresas.
          Conta PJ • Consórcio • Oportunidades Imobiliárias
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <a
            href="https://wa.me/5551991908369"
            className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Falar no WhatsApp
          </a>

          <a
            href="/conta-pj"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Abrir Conta PJ
          </a>

          <a
            href="/consorcio"
            className="bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Conhecer Consórcio
          </a>
        </div>
      </div>
    </main>
  );
}