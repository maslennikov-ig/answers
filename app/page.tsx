import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'ГК "Академия Бизнеса и Финансов" | Ответы на частые вопросы',
  description:
    "Ответы на самые частые вопросы клиентов ГК 'Академия Бизнеса и Финансов'. Узнайте о стоимости услуг, процессе работы, гарантиях и многом другом.",
}

const faqData = [
  {
    id: "item-1",
    question: "1. Сколько стоят ваши услуги и когда нужно платить?",
    answer: [
      {
        type: "paragraph",
        content:
          'Мы работаем по принципу <strong>"нет результата – нет оплаты"</strong>. Вы платите нам вознаграждение <strong>только после того, как получите одобрение и деньги поступят на ваш счет.</strong> Мы не берем никаких предоплат.',
      },
      {
        type: "paragraph",
        content:
          "Размер нашей комиссии составляет <strong>от 8% до 20%</strong> от суммы финансирования.",
      },
      {
        type: "subheading",
        content: "Почему такой диапазон?",
      },
      {
        type: "paragraph",
        content:
          "Точный процент зависит от <strong>комплексности вашей задачи</strong>. Чем сложнее ситуация (отказы, нюансы КИ, нестандартные решения), тем больше времени, знаний, ресурсов и <strong>дополнительных расходов (на аналитику, проверки)</strong> мы вкладываем для достижения результата.",
      },
      {
        type: "subheading",
        content: "Как узнать точную стоимость?",
      },
      {
        type: "paragraph",
        content:
          "Для этого нам нужен <strong>бесплатный первичный анализ</strong> вашей ситуации (КИ и фин. положение).",
      },
      {
        type: "button",
        href: "https://wa.me/79682248261?text=Здравствуйте!%20Хочу%20узнать%20стоимость%20услуг",
        text: "Написать в WhatsApp",
      },
      {
        type: "small",
        content:
          "(или +79682248261). <strong>Это вас ни к чему не обязывает.</strong>",
      },
    ],
  },
  {
    id: "item-2",
    question:
      "2. Зачем нам нужна Ваша кредитная история и почему именно 3 кредитных истории?",
    answer: [
      {
        type: "paragraph",
        content:
          "Ваша кредитная история (КИ) — это ключевой документ, который позволяет банкам оценить вашу платежеспособность и надежность как заемщика. Нам она необходима для того, чтобы:",
      },
      {
        type: "list",
        items: [
          "<strong>Точно оценить ваши шансы</strong> на получение кредита.",
          "<strong>Выявить возможные проблемы</strong> (просрочки, ошибки в КИ, высокая долговая нагрузка) и разработать стратегию их решения.",
          "<strong>Подобрать банки и кредитные программы</strong>, наиболее лояльные к вашей ситуации.",
          "<strong>Сформировать правильный пакет документов</strong> и корректно заполнить заявку.",
        ],
      },
      {
        type: "subheading",
        content: "Почему именно 3 кредитных истории?",
      },
      {
        type: "paragraph",
        content:
          "В России существует несколько основных бюро кредитных историй (БКИ). Информация в них может незначительно отличаться из-за разной скорости обновления данных банками или технических особенностей. Чтобы получить максимально полную и объективную картину вашего кредитного профиля, мы просим предоставить отчеты из трех крупнейших БКИ:",
      },
      {
        type: "list",
        items: [
          "<strong>НБКИ</strong> (Национальное бюро кредитных историй)",
          "<strong>ОКБ</strong> (Объединенное Кредитное Бюро)",
          "<strong>Скоринг Бюро</strong> (ранее Equifax)",
        ],
      },
      {
        type: "paragraph",
        content:
          "Анализ трех отчетов позволяет нам учесть все нюансы, увидеть полную картину по вашим обязательствам и не упустить важные детали, которые могут повлиять на решение банка.",
      },
      {
        type: "button",
        href: "https://wa.me/79682248261?text=Здравствуйте!%20У%20меня%20вопрос%20по%20предоставлению%20кредитной%20истории",
        text: "Задать вопрос по КИ",
      },
    ],
  },
  {
    id: "item-3",
    question:
      "3. Поможете ли Вы мне получить кредит, если у меня плохая кредитная история?",
    answer: [
      {
        type: "paragraph",
        content:
          '"Плохая КИ" – не всегда приговор. Многое зависит от <strong>давности, характера просрочек и вашего текущего положения дел</strong>.',
      },
      {
        type: "paragraph",
        content:
          "<strong>Наша задача</strong> – проанализировать вашу КИ и найти банки, лояльные к вашей ситуации.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Важно:</strong> Мы <strong>не сможем помочь</strong> при <em>текущих просрочках или банкротстве менее 5 лет назад</em>.",
      },
      {
        type: "subheading",
        content: "Чтобы дать точный ответ, нам нужно изучить вашу КИ.",
      },
      {
        type: "button",
        href: "https://wa.me/79682248261?text=Здравствуйте!%20Вопрос%20по%20КИ",
        text: "Написать в WhatsApp для анализа",
      },
      {
        type: "small",
        content: "Мы проведем <strong>бесплатный первичный анализ</strong>.",
      },
    ],
  },
  {
    id: "item-4",
    question: "4. Кто вы такие и почему стоит Вам доверять?",
    answer: [
      {
        type: "paragraph",
        content:
          'Мы — <strong>ГК "Академия Бизнеса и Финансов"</strong>, команда профессиональных кредитных брокеров. Помогаем <strong>физическим лицам и компаниям</strong> получить финансирование.',
      },
      {
        type: "subheading",
        content: "Почему нам доверяют:",
      },
      {
        type: "list",
        items: [
          "<strong>Опыт 8+ лет:</strong> Сотни успешных кейсов.",
          "<strong>Оплата по факту:</strong> Работаем по договору, без предоплат.",
          "<strong>Экспертиза:</strong> Знаем рынок и требования банков.",
          "<strong>Открытость:</strong> У нас есть официальный сайт и Telegram-канал.",
          "<strong>Конфиденциальность:</strong> Гарантируем сохранность ваших данных.",
        ],
      },
      {
        type: "paragraph",
        content: "<strong>Первичная консультация бесплатна.</strong>",
      },
    ],
  },
  {
    id: "item-5",
    question: "5. Как долго длится процесс получения кредита?",
    answer: [
      {
        type: "paragraph",
        content:
          "Сроки зависят от типа кредита, вашей ситуации и банка. В среднем:",
      },
      {
        type: "list",
        items: [
          "<strong>Анализ (включая КИ):</strong> 1-2 рабочих дня.",
          "<strong>Рассмотрение банком:</strong> От нескольких дней до 2-3 недель.",
        ],
      },
      {
        type: "paragraph",
        content: "Мы стараемся ускорить процесс, но ориентируем на реалистичные сроки.",
      },
    ],
  },
  {
    id: "item-6",
    question: "6. Можете ли вы гарантировать получение кредита?",
    answer: [
      {
        type: "paragraph",
        content:
          "Мы <strong>гарантируем</strong> наш профессионализм и максимальные усилия. Наша оплата по факту это подтверждает.",
      },
      {
        type: "paragraph",
        content:
          "Однако <strong>100% гарантию дать не может никто</strong>, так как финальное решение принимает банк. Мы честно оцениваем ваши шансы.",
      },
    ],
  },
  {
    id: "item-7",
    question: "7. С какими банками вы работаете?",
    answer: [
      {
        type: "paragraph",
        content:
          "Мы сотрудничаем с <strong>большинством ведущих федеральных и региональных банков</strong>, что позволяет нам подбирать лучшие условия, а не лоббировать один-два банка.",
      },
    ],
  },
  {
    id: "item-8",
    question: "8. Какие виды кредитов вы помогаете получить?",
    answer: [
      {
        type: "list",
        items: [
          "<strong>Для частных лиц:</strong> Потребительские, ипотека, автокредиты.",
          "<strong>Для бизнеса:</strong> Оборотные, инвестиционные, лизинг, гарантии.",
        ],
      },
      {
        type: "paragraph",
        content: "Поможем подобрать оптимальный вариант для вашей цели.",
      },
    ],
  },
]

// A helper component to render HTML strings safely
const UnsafeHtml = ({ html }: { html: string }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-4xl space-y-12">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            ГК &quot;Академия Бизнеса и Финансов&quot;
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
            Ответы на частые вопросы
          </p>
        </header>

        {/* Intro Section */}
        <section className="text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/90">
            Мы рады, что вы обратились в ГК &quot;Академию Бизнеса и Финансов&quot;! Мы
            ценим ваше время и хотим, чтобы наше сотрудничество было максимально
            понятным и эффективным. Ниже мы ответили на самые распространенные
            вопросы наших клиентов.
          </p>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 text-base">
                  {item.answer.map((el, index) => {
                    if (el.type === "paragraph") {
                      return (
                        <p key={index} className="leading-relaxed">
                          <UnsafeHtml html={el.content || ""} />
                        </p>
                      )
                    }
                    if (el.type === "subheading") {
                      return (
                        <h4
                          key={index}
                          className="font-semibold text-foreground"
                        >
                          <UnsafeHtml html={el.content || ""} />
                        </h4>
                      )
                    }
                    if (el.type === "list") {
                      return (
                        <ul
                          key={index}
                          className="list-disc space-y-2 pl-5"
                        >
                          {el.items?.map((li, liIndex) => (
                            <li key={liIndex}>
                              <UnsafeHtml html={li} />
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    if (el.type === "button" && el.href) {
                      return (
                        <Button key={index} asChild className="mt-2">
                          <Link href={el.href} target="_blank">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {el.text || ""}
                          </Link>
                        </Button>
                      )
                    }
                    if (el.type === "small") {
                      return (
                        <p key={index} className="text-sm text-muted-foreground">
                          <UnsafeHtml html={el.content || ""} />
                        </p>
                      )
                    }
                    return null
                  })}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-primary">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Просто свяжитесь с нами, и мы будем рады помочь!
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link
              href="https://wa.me/79682248261?text=Здравствуйте!%20У%20меня%20остались%20вопросы"
              target="_blank"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в WhatsApp
            </Link>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            (или +79682248261)
          </p>
        </section>

        {/* Footer Section */}
        <footer className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ГК &quot;Академия Бизнеса и Финансов&quot;.
            Все права защищены.
          </p>
          <div className="mt-2 flex items-center justify-center space-x-4">
            <Link
              href="https://academy-of-finance.ru/"
              target="_blank"
              className="inline-flex items-center hover:text-primary hover:underline"
            >
              Сайт <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="https://t.me/academy_of_finance"
              target="_blank"
              className="inline-flex items-center hover:text-primary hover:underline"
            >
              Telegram <Send className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
