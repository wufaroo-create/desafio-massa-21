import { createFileRoute } from "@tanstack/react-router";
import {
  Dumbbell,
  Salad,
  Droplets,
  Moon,
  LineChart,
  Brain,
  BookOpen,
  ListChecks,
  UtensilsCrossed,
  NotebookPen,
  CalendarDays,
  Repeat,
  Check,
  X,
  ShieldCheck,
  Lock,
  Zap,
  Smartphone,
  Star,
  ChevronDown,
  TrendingUp,
  HeartPulse,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import productImg from "@/assets/product.jpg";
import mealImg from "@/assets/meal.jpg";
import progressImg from "@/assets/progress.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desafio 21 Dias para Ganhar Massa Muscular | Ebook Premium" },
      {
        name: "description",
        content:
          "Programa digital de 21 dias com treinos, alimentação, planner e checklist para criar disciplina e uma base sólida de hipertrofia. Acesso imediato.",
      },
      { property: "og:title", content: "Desafio 21 Dias para Ganhar Massa Muscular" },
      {
        property: "og:description",
        content:
          "Ebook premium, plano alimentar, planner de progresso e bônus gratuitos. Construa hábitos consistentes em 21 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && (
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {kicker}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

const benefits = [
  {
    icon: Dumbbell,
    title: "Treinos completos",
    text: "Estrutura de treino para 21 dias, com execução, séries e progressão explicadas de forma simples.",
  },
  {
    icon: Salad,
    title: "Alimentação para hipertrofia",
    text: "Como organizar refeições, proteínas e carboidratos para sustentar o seu treino no dia a dia.",
  },
  {
    icon: Droplets,
    title: "Hidratação",
    text: "Rotina prática de hidratação e por que ela influencia diretamente no seu desempenho.",
  },
  {
    icon: Moon,
    title: "Recuperação",
    text: "Sono, descanso ativo e sinais de fadiga: o que fazer para treinar bem no dia seguinte.",
  },
  {
    icon: LineChart,
    title: "Acompanhar o progresso",
    text: "Métricas simples para registrar evolução sem depender apenas do espelho ou da balança.",
  },
  {
    icon: Brain,
    title: "Mentalidade e consistência",
    text: "Métodos para manter a rotina mesmo nos dias em que a motivação não aparece.",
  },
];

const inside = [
  { icon: BookOpen, title: "Ebook Premium (21 Dias)", text: "Material completo, direto ao ponto e fácil de seguir." },
  { icon: ListChecks, title: "Checklist Diário", text: "Marque cada tarefa e feche o dia com clareza." },
  { icon: UtensilsCrossed, title: "Plano Alimentar Básico", text: "Modelo de refeições adaptável à sua rotina." },
  { icon: NotebookPen, title: "Planner de Progresso", text: "Registre cargas, treinos e sensações do dia." },
  { icon: CalendarDays, title: "Calendário do Desafio", text: "Visualize os 21 dias e mantenha o ritmo." },
  { icon: Repeat, title: "Hábitos Diários", text: "Pequenas ações que sustentam o resultado a longo prazo." },
];

const works = [
  { icon: Repeat, title: "Consistência", text: "21 dias com tarefas claras reduzem a chance de abandonar no meio do caminho." },
  { icon: TrendingUp, title: "Progressão", text: "Aumento gradual de estímulo para o corpo ter motivo de se adaptar." },
  { icon: Salad, title: "Alimentação", text: "Sem dietas extremas: organização realista e sustentável." },
  { icon: HeartPulse, title: "Recuperação", text: "Descanso planejado para treinar com qualidade, não apenas com vontade." },
];

const forWho = [
  "Iniciantes que não sabem por onde começar",
  "Pessoas magras que querem estruturar treino e alimentação",
  "Quem voltou a treinar depois de uma pausa",
  "Quem quer criar disciplina e manter uma rotina",
];

const bonuses = [
  { n: "Bônus 01", title: "Planner Fitness", text: "Organize treinos e semanas em um só lugar." },
  { n: "Bônus 02", title: "Calendário de Hábitos", text: "Acompanhe a constância dia após dia." },
  { n: "Bônus 03", title: "Checklist Diário", text: "Clareza total sobre o que fazer hoje." },
  { n: "Bônus 04", title: "Guia de Alimentação", text: "Referências práticas para montar suas refeições." },
];

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "São Paulo, SP",
    text: "O que mais me ajudou foi a organização. Antes eu ia treinar sem saber o que fazer, agora sigo o planner e consigo manter a rotina.",
  },
  {
    name: "Rafael Monteiro",
    role: "Curitiba, PR",
    text: "Material muito bem feito e direto. Em três semanas eu criei o hábito de treinar e de comer melhor, que era o meu problema principal.",
  },
  {
    name: "Bruno Almeida",
    role: "Belo Horizonte, MG",
    text: "Gostei da parte de recuperação e sono. Passei a dormir melhor e o treino ficou mais produtivo. Conteúdo honesto, sem promessa milagrosa.",
  },
  {
    name: "Camila Duarte",
    role: "Recife, PE",
    text: "O checklist diário me deu disciplina. É simples, mas funciona porque você vê o que já cumpriu no dia.",
  },
  {
    name: "Diego Santos",
    role: "Porto Alegre, RS",
    text: "Voltei a treinar depois de dois anos parado. O desafio me deu estrutura e motivação para não desistir na primeira semana.",
  },
];

const faqs = [
  { q: "Por quanto tempo tenho acesso ao material?", a: "O acesso é digital e vitalício. Você pode baixar os arquivos e consultar quando quiser, além de receber as atualizações futuras sem custo." },
  { q: "Funciona para iniciantes?", a: "Sim. O conteúdo foi escrito para quem está começando, com explicações simples de execução, progressão e organização da rotina." },
  { q: "Preciso de academia?", a: "A academia facilita, mas o material traz alternativas com peso corporal e equipamentos básicos para quem treina em casa." },
  { q: "Como recebo o ebook?", a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail, com o link para baixar todos os arquivos e bônus." },
  { q: "Posso acessar pelo celular?", a: "Sim. Todos os materiais são em PDF, compatíveis com celular, tablet, notebook e computador." },
  { q: "Existe suporte?", a: "Sim. Você pode entrar em contato pelo e-mail informado no rodapé para dúvidas sobre acesso e uso do material." },
  { q: "É um material físico?", a: "Não. O desafio é 100% digital, o que garante acesso imediato e sem custo de frete." },
  { q: "Preciso de suplementos?", a: "Não. O foco é treino, alimentação real, hidratação e recuperação. Suplementos são opcionais e não fazem parte da proposta." },
  { q: "E se eu perder um dia do desafio?", a: "O material explica como retomar sem recomeçar do zero. A proposta é construir consistência, não perfeição." },
  { q: "O pagamento é seguro?", a: "Sim. A compra é processada por plataforma de pagamentos com ambiente criptografado e as opções disponíveis no checkout." },
  { q: "Posso pedir reembolso?", a: "Sim, conforme a política de garantia da plataforma de vendas utilizada no checkout, dentro do prazo informado no momento da compra." },
];

function Landing() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              Desafio 21 Dias
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Transforme Seu Corpo em Apenas 21 Dias
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Um desafio completo para desenvolver hábitos, melhorar seus treinos e construir uma
              base sólida para ganhar massa muscular.
            </p>
            <div className="mt-9">
              <a href="#oferta" className={CTA_CLASS}>
                Começar agora
              </a>
            </div>
            <ul className="mt-7 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {["Acesso imediato", "Ebook Premium", "Compatível com celular", "Atualizações gratuitas"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-primary-soft" aria-hidden />
              <img
                src={heroImg}
                alt="Homem treinando com halteres em academia moderna e iluminada"
                width={1408}
                height={1600}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <SectionTitle
            kicker="Conteúdo"
            title="O Que Você Vai Aprender"
            sub="Seis pilares práticos que sustentam qualquer evolução consistente no treino."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <SectionTitle
              kicker="Dentro do desafio"
              title="O Que Está Incluído"
              sub="Todo o material entregue em formato digital, pronto para usar já no primeiro dia."
            />
          </Reveal>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src={productImg}
                alt="Mockup do ebook premium exibido em tablet ao lado de planner impresso"
                loading="lazy"
                width={1200}
                height={912}
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {inside.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <SectionTitle kicker="Método" title="Por Que Este Desafio Funciona" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <article className="h-full rounded-3xl bg-foreground p-8 text-background">
                <w.icon className="h-6 w-6 text-primary-soft" />
                <h3 className="mt-6 text-lg font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{w.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <SectionTitle
              kicker="Antes e depois"
              title="A Mudança Está na Rotina"
              sub="O foco do desafio são hábitos e consistência — não promessas de transformação física garantida."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Antes
                </h3>
                <ul className="mt-6 space-y-4">
                  {["Sem rotina", "Alimentação desorganizada", "Pouca disciplina", "Falta de evolução"].map(
                    (t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                          <X className="h-4 w-4" />
                        </span>
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-primary/25 bg-primary-soft p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  Depois
                </h3>
                <ul className="mt-6 space-y-4">
                  {["Rotina estruturada", "Melhor alimentação", "Mais disciplina", "Evolução consistente"].map(
                    (t) => (
                      <li key={t} className="flex items-center gap-3 text-sm font-medium">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-4 w-4" />
                        </span>
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Para quem é
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Este Desafio É Para Você?</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {forWho.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed shadow-[var(--shadow-soft)]"
                >
                  <Check className="mb-3 h-4 w-4 text-primary" />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={mealImg}
                alt="Marmitas saudáveis com frango, arroz, brócolis e garrafa de água"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
              <img
                src={progressImg}
                alt="Caderno de acompanhamento, caneta, fita métrica e halter sobre mesa branca"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-soft)] sm:mt-10"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BONUSES */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <SectionTitle
              kicker="Incluso sem custo extra"
              title="Bônus Gratuitos"
              sub="Quatro materiais complementares entregues junto com o desafio."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bonuses.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {b.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  <span className="mt-6 inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Grátis
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <SectionTitle kicker="Depoimentos" title="O Que Dizem Sobre o Material" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="h-full rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
          <Reveal>
            <SectionTitle kicker="Dúvidas" title="Perguntas Frequentes" />
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 30}>
                <details className="group rounded-2xl border border-border bg-card px-6 py-5 shadow-[var(--shadow-soft)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                    {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-10 text-center shadow-[var(--shadow-lift)] sm:p-14">
            <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/25 bg-primary-soft text-primary">
              <ShieldCheck className="h-9 w-9" />
            </span>
            <h2 className="mt-8 text-2xl font-bold sm:text-3xl">Garantia da Plataforma</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Sua compra é protegida pela política de garantia da plataforma de pagamentos utilizada
              no checkout. Caso o material não seja o que você esperava, você pode solicitar o
              reembolso dentro do prazo informado pela plataforma no momento da compra, seguindo os
              procedimentos oficiais dela. Não oferecemos condições além das previstas por essa
              política.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PRICING */}
      <section id="oferta" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
          <Reveal>
            <SectionTitle kicker="Oferta" title="Comece o Desafio Hoje" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-lift)]">
              <div className="bg-foreground px-8 py-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-background">
                Desafio 21 Dias — Pacote Completo
              </div>
              <div className="px-8 py-12 text-center sm:px-12">
                <p className="text-sm text-muted-foreground">
                  De: <span className="line-through">R$197,00</span>
                </p>
                <p className="mt-3 text-sm font-medium text-muted-foreground">Por apenas</p>
                <p className="mt-1 text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                  R$147,90
                </p>
                <ul className="mx-auto mt-9 grid max-w-sm gap-3 text-left text-sm">
                  {[
                    "Ebook Premium com os 21 dias",
                    "Checklist, planner e calendário",
                    "Plano alimentar básico",
                    "4 bônus gratuitos",
                    "Atualizações futuras sem custo",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="#oferta" className={`${CTA_CLASS} mt-10 w-full sm:w-auto`}>
                  Quero começar agora
                </a>
                <div className="mt-8 grid gap-3 text-xs text-muted-foreground sm:grid-cols-3">
                  <span className="inline-flex items-center justify-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-primary" /> Pagamento seguro
                  </span>
                  <span className="inline-flex items-center justify-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-primary" /> Acesso imediato
                  </span>
                  <span className="inline-flex items-center justify-center gap-2">
                    <Smartphone className="h-3.5 w-3.5 text-primary" /> Ebook digital
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center text-background sm:py-32">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Seu Resultado Começa Com a Decisão Que Você Toma Hoje.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed opacity-70">
              Comece hoje mesmo a construir hábitos que podem transformar sua rotina de treinos.
            </p>
            <div className="mt-10">
              <a href="#oferta" className={CTA_CLASS}>
                Quero começar agora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 text-sm text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <p className="font-semibold text-foreground">Desafio 21 Dias</p>
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Termos de Uso
            </a>
            <a href="mailto:contato@desafio21dias.com" className="transition-colors hover:text-primary">
              Contato
            </a>
          </nav>
          <p className="text-xs">© {new Date().getFullYear()} Desafio 21 Dias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
