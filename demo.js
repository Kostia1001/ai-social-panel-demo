// Makes the static pages of the demo clickable: moves between captured screens, nothing else.
(function () {
  var MAP = {"routes":{"inbox":{"О Оксана Руденко 02:44 директ· Добрий день! Такі подушки ще є? Чекає менеджера":"index.html","А Андрій Мельник 02:40 директ· Скільки йде доставка у Львів? І чи можна оплатити при отриманні? Чернетка AI":"inbox-1.html","О Олена Коваль 02:32 директ· Чудово! Напишіть, будь ласка, ПІБ, телефон і місто з відділенням Нової пошти, і ми оформимо замовлен":"inbox-2.html","С Софія Лисенко 02:17 директ· Скільки коштує плед з вашого відео? Той теракотовий 😍 Чернетка AI":"inbox-3.html","К Катерина Мороз 02:12 коментар· Де купити? 😍 Чернетка AI":"inbox-4.html","М Марина Ткаченко 02:06 директ· Добре, чекаю. І ще: чи можна вишити логотип на наволочках? Чекає менеджера":"inbox-5.html","Н Наталія Поліщук 00:52 коментар· А є двоспальний євро розмір? Чернетка AI":"inbox-6.html","В Віктор Шевчук 00:12 директ· Добре, дякую, чекаю":"inbox-7.html","Т Тарас Гнатюк Вчора коментар· Тарасе, вітаю! Сірий плед 150×200 зараз коштує 120 ₴ замість 400 ₴ 🙂":"inbox-8.html","Р Роман Захарченко Вчора коментар· Вже другий тиждень чекаю відповіді в директ, це нормально? Чекає менеджера":"inbox-9.html","Ю Юлія Кравець Вчора директ· Юліє, вітаю! Поставка очікується в пʼятницю. Напишу вам, щойно рушники зʼявляться.":"inbox-10.html","О Олена Коваль Вчора коментар· Олено, дякуємо, що ви з нами! 🧡":"inbox-11.html","Т Тетяна Гончар Вчора директ· Дякую!":"inbox-12.html","І Ірина Бондар чт директ· Дякую!":"inbox-13.html","Д Дарина Савчук пн директ· Дарино, дуже раді! Будемо вдячні за відгук у сторіз з позначкою @zatyshok.home 🙂":"inbox-14.html","Директ":"inbox-direct.html","Коментарі":"inbox-comments.html","Усі":"index.html"},"contacts":{"Усі":"contacts.html","Опт":"contacts-tag-0.html","Постійний клієнт":"contacts-tag-1.html","Скарга":"contacts-tag-2.html"},"agent":{"Промпти":"agent.html","База знань":"agent-1.html","Передача менеджеру":"agent-2.html","Режими":"agent-3.html","Тестування":"agent-4.html","Розширені":"agent-5.html"},"studio":{"Один пост":"studio.html","Карусель":"studio-1.html","План постів":"studio-2.html","Відео":"studio-3.html"},"plan":{"12:00 IG FB TT Новий льон Опубліковано":"plan-post-0.html","12:00 IG Чорна пʼятниця: анонс Помилка":"plan-post-1.html","19:00 IG Відгук Олени з Вінниці Опубліковано":"plan-post-2.html","10:00 IG FB Подарунок від 1500 ₴ Заплановано":"plan-post-3.html","IG Знижка на рушники Без дати":"plan-post-4.html","Новий пост":"plan-new.html"},"channels":{"Підключити канал":"channels-connect.html"},"stats":{"7 днів":"stats-0.html","30 днів":"stats-1.html","90 днів":"stats-2.html","Усі мережі":"stats-3.html","Instagram":"stats-4.html","Facebook":"stats-5.html","TikTok":"stats-6.html","Telegram":"stats-7.html","WhatsApp":"stats-8.html"},"*":{"Помічник":"assistant.html"}},"hrefs":{"/dashboard/inbox?c=de000000-0000-4000-8000-000000000403":"index.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000402":"inbox-1.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000400":"inbox-2.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000404":"inbox-3.html","/dashboard/inbox?cm=de000000-0000-4000-8000-000000000502":"inbox-4.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000401":"inbox-5.html","/dashboard/inbox?cm=de000000-0000-4000-8000-000000000501":"inbox-6.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000405":"inbox-7.html","/dashboard/inbox?cm=de000000-0000-4000-8000-000000000500":"inbox-8.html","/dashboard/inbox?cm=de000000-0000-4000-8000-000000000503":"inbox-9.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000406":"inbox-10.html","/dashboard/inbox?cm=de000000-0000-4000-8000-000000000504":"inbox-11.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000407":"inbox-12.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000408":"inbox-13.html","/dashboard/inbox?c=de000000-0000-4000-8000-000000000409":"inbox-14.html","/dashboard/inbox":"index.html","/dashboard":"index.html","/dashboard/contacts":"contacts.html","/dashboard/contacts/de000000-0000-4000-8000-000000000208":"contact-0.html","/dashboard/contacts/de000000-0000-4000-8000-000000000202":"contact-1.html","/dashboard/contacts/de000000-0000-4000-8000-000000000200":"contact-2.html","/dashboard/contacts/de000000-0000-4000-8000-000000000204":"contact-3.html","/dashboard/contacts/de000000-0000-4000-8000-00000000020c":"contact-4.html","/dashboard/contacts/de000000-0000-4000-8000-000000000201":"contact-5.html","/dashboard/contacts/de000000-0000-4000-8000-00000000020b":"contact-6.html","/dashboard/contacts/de000000-0000-4000-8000-000000000205":"contact-7.html","/dashboard/contacts/de000000-0000-4000-8000-00000000020a":"contact-8.html","/dashboard/contacts/de000000-0000-4000-8000-00000000020d":"contact-9.html","/dashboard/contacts/de000000-0000-4000-8000-000000000207":"contact-10.html","/dashboard/contacts/de000000-0000-4000-8000-000000000209":"contact-11.html","/dashboard/contacts/de000000-0000-4000-8000-000000000203":"contact-12.html","/dashboard/contacts/de000000-0000-4000-8000-000000000206":"contact-13.html","/dashboard/agent":"agent.html","/dashboard/studio":"studio.html","/dashboard/plan":"plan.html","/dashboard/plan?week=2026-10-26":"plan-0.html","/dashboard/plan?week=2026-11-09":"plan-1.html","/dashboard/plan?week=2026-11-02":"plan-2.html","/dashboard/plan?view=month&month=2026-11&week=2026-11-02":"plan-3.html","/dashboard/plan?week=2026-11-07":"plan-4.html","/dashboard/voice":"voice.html","/dashboard/channels":"channels.html","/dashboard/settings":"settings.html","/dashboard/stats":"stats.html"}};
  var body = document.body;
  var group = body.dataset.demoGroup;
  var back = body.dataset.demoBack;

  function norm(text) {
    return (text || "").replace(/\s+/g, " ").trim();
  }
  function rowKey(text) {
    return norm((text || "").replace(/(^|\s)\d{1,2}(?=\s|$)/g, " "));
  }

  var chip = document.createElement("div");
  chip.className = "demo-chip";
  chip.textContent = "Демо · дані вигадані";
  body.appendChild(chip);

  var toast = document.createElement("div");
  toast.className = "demo-toast";
  toast.setAttribute("role", "status");
  body.appendChild(toast);
  var timer;
  function say(text) {
    toast.textContent = text;
    toast.classList.add("demo-toast-on");
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove("demo-toast-on");
    }, 2600);
  }
  var OFF = "У демо ця дія вимкнена. У справжній панелі вона працює.";

  function setThemeLabel(button) {
    var dark = document.documentElement.classList.contains("dark");
    var walker = document.createTreeWalker(button, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (/тема/i.test(node.nodeValue)) node.nodeValue = dark ? "Світла тема" : "Темна тема";
    }
  }
  function isThemeButton(text) {
    return text === "Темна тема" || text === "Світла тема";
  }
  document.querySelectorAll("button").forEach(function (b) {
    if (isThemeButton(norm(b.innerText))) setThemeLabel(b);
  });

  // On a phone the inbox is either the list or one dialog: the panel's script decides, here this does.
  function showList() {
    var list = document.querySelector('[class*="inbox-list-w"]');
    if (!list) return;
    list.classList.remove("max-md:hidden");
    var next = list.nextElementSibling;
    while (next) {
      if (next.classList.contains("flex-1")) {
        next.classList.remove("flex");
        next.classList.add("hidden", "md:flex");
      }
      next = next.nextElementSibling;
    }
  }
  if (group === "inbox" && location.hash !== "#t") showList();
  function toInbox(file) {
    return file + "#t";
  }

  // The phone menu's «Ще» holds the sections that do not fit the bottom bar.
  var MORE = [["AI-агент", "agent.html"], ["AI-студія", "studio.html"], ["Голос бренду", "voice.html"], ["Канали", "channels.html"], ["Налаштування", "settings.html"]];
  function openMore() {
    var sheet = document.createElement("div");
    sheet.className = "demo-more";
    var panel = document.createElement("div");
    panel.className = "demo-more-panel";
    MORE.forEach(function (item) {
      var a = document.createElement("a");
      a.href = item[1];
      a.textContent = item[0];
      a.dataset.go = item[1];
      panel.appendChild(a);
    });
    sheet.appendChild(panel);
    sheet.addEventListener("click", function (e) {
      if (e.target === sheet) sheet.remove();
    });
    body.appendChild(sheet);
  }

  function closes(button, text) {
    var label = (button.getAttribute("aria-label") || "") + " " + (button.getAttribute("title") || "") + " " + text;
    return /закрити|скасувати|назад|close/i.test(label);
  }
  function isBackdrop(el) {
    return el === document.documentElement || el === body || /(^|\s)fixed(\s|$)/.test(el.className && el.className.baseVal === undefined ? el.className : "") && /inset-0/.test(el.className);
  }

  document.addEventListener(
    "click",
    function (e) {
      var target = e.target;
      var link = target.closest && target.closest("a");
      if (link) {
        e.preventDefault();
        if (link.dataset.go) {
          location.href = link.dataset.go;
          return;
        }
        var href = link.dataset.href;
        var file = href && MAP.hrefs[href];
        if (file) location.href = /^\/dashboard\/inbox\?/.test(href) ? toInbox(file) : file;
        else say(OFF);
        return;
      }
      var button = target.closest && target.closest('button,[role="button"],[role="tab"],[role="menuitem"]');
      if (button) {
        e.preventDefault();
        var text = norm(button.innerText);
        if (isThemeButton(text)) {
          var dark = document.documentElement.classList.toggle("dark");
          try {
            localStorage.setItem("theme", dark ? "dark" : "light");
          } catch (err) {}
          setThemeLabel(button);
          return;
        }
        if (text === "Ще") {
          openMore();
          return;
        }
        if (button.getAttribute("aria-label") === "До списку діалогів") {
          showList();
          return;
        }
        if (back && closes(button, text)) {
          location.href = back;
          return;
        }
        var routes = MAP.routes[group] || {};
        var go = routes[group === "inbox" ? rowKey(button.innerText) : text] || routes[text] || (MAP.routes["*"] || {})[text];
        if (go) {
          var opensDialog = group === "inbox" && !/^(Усі|Директ|Коментарі)$/.test(text);
          location.href = opensDialog ? toInbox(go) : go;
        } else say(OFF);
        return;
      }
      if (back && isBackdrop(target)) location.href = back;
    },
    true
  );

  document.addEventListener("submit", function (e) {
    e.preventDefault();
    say(OFF);
  }, true);

  document.addEventListener("keydown", function (e) {
    if (back && e.key === "Escape") location.href = back;
  });
})();
