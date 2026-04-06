const DB = {
    blog: [
        {
            date: "2026-04-06",
            title: { es: "Migración a Rust", en: "Moving to Rust" },
            content: { es: "Hoy decidí portar mis scripts de Python a Rust...", en: "Today I decided to port my Python scripts..." }
        }
    ],
    projects: [
        {
            name: "Arch Setup",
            desc: { es: "Mis dotfiles de Hyprland", en: "My Hyprland dotfiles" },
            link: "https://github.com/hamyori/dotfiles"
        }
    ],
    books: [
        { title: "Forall X", author: "P.D. Magnus", rating: "5/5", review: { es: "Esencial para lógica.", en: "Essential for logic." } }
    ],
    media: [
        { title: "Kanon (2006)", type: "Anime", review: { es: "Increíble banda sonora.", en: "Amazing OST." } }
    ],
    // Diccionario de traducción para la interfaz
    ui: {
        es: { "nav-blog": "Bitácora", "nav-projects": "Proyectos", "nav-books": "Libros", "nav-media": "Media" },
        en: { "nav-blog": "Blog", "nav-projects": "Projects", "nav-books": "Library", "nav-media": "Media" },
        zh: { "nav-blog": "博客", "nav-projects": "项目", "nav-books": "图书", "nav-media": "媒体" }
    }
};
