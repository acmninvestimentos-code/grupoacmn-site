export default function Home() {
  const whatsappNumber = "5551991908369";
  const whatsappText =
    "Olá! Vim pelo site do Grupo ACMN e quero atendimento para minha empresa.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-neutral-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Grupo ACMN</div>
              <div className="text-xs text-neutral-500">Porto Alegre • RS</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a className="hover:text-neutral-900" href="#servicos">
              Serviços
            </a>
            <a className="hover:text-neutral-900" href="#como-funciona">
              Como funciona
            </a>
            <a className="hover:text-neutral-900" href="#faq">
              Dúvidas
            </a>
            <a className="hover:text-neutral-900" href="#contato">
              Contato
            </a>
          </nav>

          <a
            href={waLink}
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-neutral-700">
              Atendimento humano • Processo guiado • Rápido
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ajudamos sua empresa a crescer.
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              Conta PJ com orientação completa, abertura de conta MEI em até{" "}
              <span className="font-semibold text-neutral-900">3 minutos</span>{" "}
              e soluções de capital para o seu CNPJ — com atendimento direto e
              seguro.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink}
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Quero atendimento no WhatsApp
              </a>
              <a
                href="#contato"
                className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
              >
                Prefiro preencher o formulário
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Stat title="Foco em PJ" desc="Atendimento para CNPJ e MEI" />
              <Stat title="Rápido" desc="Orientação prática, sem enrolação" />
              <Stat title="Organizado" desc="Processo e próximos passos claros" />
            </div>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-semibold">Atendimento rápido</div>
              <p className="mt-2 text-sm text-neutral-600">
                Clique no botão e já comece com uma mensagem pronta. Se preferir,
                preencha o formulário e nós chamamos você.
              </p>
              <div className="mt-4 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-700">
                <div className="font-semibold">WhatsApp:</div>
                <div className="mt-1 select-all">+55 (51) 99190-8369</div>
              </div>

              <a
                href={waLink}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Iniciar conversa
              </a>

              <p className="mt-3 text-center text-xs text-neutral-500">
                Porto Alegre • RS — atendimento também online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold">Serviços</h2>
          <p className="mt-2 text-neutral-600">
            Blocos claros para você escolher o que precisa agora.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card
              title="Conta PJ (Cora)"
              desc="Orientação completa para abertura e organização do processo."
              tag="Disponível"
            />
            <Card
              title="Conta MEI em 3 min"
              desc="Passo a passo para você abrir sua conta com agilidade."
              tag="Disponível"
            />
            <Card
              title="Capital para PJ"
              desc="Soluções para organizar caixa, planejar e crescer com segurança."
              tag="Disponível"
            />
            <Card
              title="Consórcio"
              desc="Estratégia de compra planejada para patrimônio e crescimento."
              tag="Em breve"
              muted
            />
            <Card
              title="Imóvel"
              desc="Oportunidades e suporte no processo (compra/planejamento)."
              tag="Em breve"
              muted
            />
            <div className="rounded-2xl border bg-neutral-50 p-6">
              <div className="text-sm font-semibold">Quer prioridade?</div>
              <p className="mt-2 text-sm text-neutral-600">
                Chame no WhatsApp e diga o objetivo: Conta PJ, MEI, capital,
                consórcio ou imóvel.
              </p>
              <a
                href={waLink}
                className="mt-4 inline-flex rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Falar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold">Como funciona</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              n="1"
              title="Contato rápido"
              desc="Você chama no WhatsApp ou preenche o formulário."
            />
            <Step
              n="2"
              title="Entendemos seu momento"
              desc="Coletamos as informações essenciais e definimos o caminho ideal."
            />
            <Step
              n="3"
              title="Próximo passo claro"
              desc="Você segue com orientação prática e acompanhamento."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold">Dúvidas frequentes</h2>

          <div className="mt-6 grid gap-3">
            <Faq
              q="É atendimento humano?"
              a="Sim. Você fala com um especialista e recebe orientação direta."
            />
            <Faq
              q="Atendem só Porto Alegre?"
              a="Atendemos Porto Alegre e região, e também online."
            />
            <Faq
              q="Consórcio e imóvel já estão disponíveis?"
              a="Estão em breve. Se você chamar no WhatsApp, podemos anotar seu interesse e te avisar."
            />
          </div>
        </div>
      </section>

      {/* Contato / Form */}
      <section id="contato" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Contato</h2>
              <p className="mt-2 text-neutral-600">
                Prefere que a gente te chame? Preencha abaixo. Ao enviar, abrimos
                o WhatsApp com sua mensagem pronta.
              </p>

              <div className="mt-5 rounded-2xl border bg-white p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const data = new FormData(form);

                    const nome = String(data.get("nome") || "").trim();
                    const whatsapp = String(data.get("whatsapp") || "").trim();
                    const empresa = String(data.get("empresa") || "").trim();
                    const objetivo = String(data.get("objetivo") || "").trim();

                    const msg =
                      `Olá! Meu nome é ${nome || "—"}. ` +
                      `Empresa: ${empresa || "—"}. ` +
                      `WhatsApp: ${whatsapp || "—"}. ` +
                      `Objetivo: ${objetivo || "—"}. ` +
                      `Vim pelo site do Grupo ACMN.`;

                    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      msg
                    )}`;
                  }}
                  className="grid gap-3"
                >
                  <Input name="nome" label="Seu nome" placeholder="Ex: Ana" />
                  <Input
                    name="whatsapp"
                    label="Seu WhatsApp"
                    placeholder="Ex: (51) 99999-9999"
                  />
                  <Input
                    name="empresa"
                    label="Empresa (opcional)"
                    placeholder="Ex: Minha Empresa LTDA"
                  />
                  <div className="grid gap-1">
                    <label className="text-sm font-medium">Objetivo</label>
                    <select
                      name="objetivo"
                      className="rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
                      defaultValue="Conta PJ (Cora)"
                    >
                      <option>Conta PJ (Cora)</option>
                      <option>Conta MEI em 3 min</option>
                      <option>Capital para PJ</option>
                      <option>Consórcio (em breve)</option>
                      <option>Imóvel (em breve)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Enviar e abrir WhatsApp
                  </button>

                  <p className="text-xs text-neutral-500">
                    Ao enviar, você será direcionado para o WhatsApp com a
                    mensagem preenchida.
                  </p>
                </form>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Grupo ACMN</div>
              <p className="mt-2 text-sm text-neutral-600">
                Porto Alegre - Rio Grande do Sul
              </p>

              <div className="mt-6 grid gap-3">
                <InfoRow title="WhatsApp" value="+55 (51) 99190-8369" />
                <InfoRow title="Serviços" value="Conta PJ • MEI • Capital PJ" />
                <InfoRow title="Em breve" value="Consórcio • Imóvel" />
              </div>

              <a
                href={waLink}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Falar agora no WhatsApp
              </a>

              <p className="mt-4 text-xs text-neutral-500">
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
        className="fixed bottom-5 right-5 rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-neutral-800"
      >
        WhatsApp
      </a>
    </main>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-neutral-600">{desc}</div>
    </div>
  );
}

function Card({
  title,
  desc,
  tag,
  muted,
}: {
  title: string;
  desc: string;
  tag: string;
  muted?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md " +
        (muted ? "bg-neutral-50" : "bg-white")
      }
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold">{title}</div>
        <span
          className={
            "rounded-full px-3 py-1 text-xs " +
            (muted
              ? "bg-neutral-200 text-neutral-700"
              : "bg-neutral-900 text-white")
          }
        >
          {tag}
        </span>
      </div>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
        {n}
      </div>
      <div className="mt-3 text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border bg-white p-5">
      <summary className="cursor-pointer list-none text-sm font-semibold">
        {q}
      </summary>
      <p className="mt-3 text-sm text-neutral-600">{a}</p>
    </details>
  );
}

function Input({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="grid gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
      />
    </div>
  );
}

function InfoRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-neutral-50 p-4">
      <div className="text-xs font-semibold text-neutral-700">{title}</div>
      <div className="mt-1 text-sm text-neutral-900">{value}</div>
    </div>
  );
}