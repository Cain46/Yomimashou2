# Yomimashou! 読みましょう

> *"Aquí no pedimos fama. Aquí la creamos."*

Portal de lectura y creación para autores independientes de manga, cómic y libros.

---

## ¿Qué es Yomimashou!?

Un santuario narrativo para obras independientes. La plataforma está pensada para que lectores descubran historias fuera del circuito mainstream y para que autores emergentes puedan existir, mostrarse y crecer.

Soporta tres formatos: **Manga**, **Cómic** y **Libros**.

---

## Stack

| Parte | Herramienta |
|---|---|
| Frontend | HTML + CSS + JavaScript vanilla |
| Backend | Por definir — Firebase o Supabase (Fase 3) |
| Autenticación | Por definir — Firebase Auth o JWT (Fase 3) |
| Hosting | Por definir — Vercel o Netlify (Fase 3) |

---

## Cómo correrlo localmente

No requiere instalación. Abrí `index.html` directamente en el browser.

Para desarrollo con live reload, usá la extensión **Live Server** de VS Code.

---

## Estructura del proyecto

```
yomimashou/
├── index.html              # Landing principal
├── README.md
├── CHANGELOG.md
├── assets/
│   ├── css/
│   │   ├── variables.css   # Variables de diseño
│   │   └── main.css        # Estilos globales y componentes
│   ├── js/
│   │   └── main.js         # Scripts base
│   └── img/
│       ├── favicon.svg     # Favicon del proyecto
│       ├── 3_dias.JPG
│       ├── bujinkan.JPG
│       ├── civil_war.JPG
│       └── evangelion.jpg
├── pages/
│   ├── manga.html
│   ├── comic.html
│   ├── libros.html
│   └── autores.html
└── components/             # Fragmentos reutilizables (Fase 2+)
```

---

## Estado del proyecto

| Fase | Descripción | Estado |
|---|---|---|
| Fase 1 | Fundación técnica: estructura, estilos base, landing estática, favicon | ✅ Cerrada |
| Fase 2 | Registro, login, roles lector/autor, datos simulados | 🔜 Próxima |
| Fase 3 | Backend, base de datos, autenticación real | ⏳ Pendiente |
| Fase 4 | Módulos completos, panel autor/lector, carga de obras | ⏳ Pendiente |
| Fase 5 | Comunidad, gamificación, expansiones futuras | ⏳ Pendiente |

---

## Documentación

Ver `FASE1_YOMIMASHOU.md` para el documento funcional completo de Fase 1.

---

*Proyecto Yomimashou! | Moth Academy*
