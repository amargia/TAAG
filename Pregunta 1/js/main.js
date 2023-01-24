const items = [
    {
        Id: 1,
        titulo: "Inicio",
        href: "home.php"
    },
    {
        Id: 7,
        titulo: "Contacto",
        href: "contact.php"
    },
    {
        Id: 6,
        titulo: "Empresa",
        href: "about.php"
    },
    {
        Id: 2,
        titulo: "Laboratorio",
        href: "laboratory.php"
    },
    {
        Id: 4,
        titulo: "Alimentos",
        href: "foods.php",
        subitme: [

        ]
    },
    {
        Id: 5,
        titulo: "Diagnóstico Clínico",
        href: "clinical-diagnostic.php"
    },
    {
        Id: 2,
        titulo: "Productos",
        href: "products.php"
    },
    {
        Id: 3,
        titulo: "Software",
        href: "software.php"
    }
];

//menu ordenado por Id
const menu = document.querySelector("#menu");
items.sort((a, b) => a.Id - b.Id);
const menuItems = items.map(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href
    a.textContent = item.titulo;
    li.appendChild(a);
    return li;
});

menuItems.forEach(item => menu.appendChild(item));