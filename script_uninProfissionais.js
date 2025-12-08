// video utilizado para referencia https://www.youtube.com/watch?v=DfUHpQIjVsg&list=WL&index=1

"use strict";


const profissionalData = [

    {
    title: "",
    category: "Dr. Pedro do Carmo",
    especializacao: "Pediatra",
    
    proxConsulta: "05/02/2026",
    agenda: "",
    },
    
    {
    title: "",
    category: "Dr. Rex",
    especializacao: "Pediatra",
    
    proxConsulta: "10/02/2026",
    agenda: "https://docs.google.com/spreadsheets/d/1SySFhgqBOilPG4IShV0ufLlTKeD6p-MUEbJGOPR-8QA/edit?usp=sharing",
    },
    
    {
    title: "",
    category: "Dra. Andréia SIqueira",
    especializacao: "Pediatra",
    
    proxConsulta: "09/01/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dra. Vanessa Borges",
    especializacao: "Dermatologista",
    
    proxConsulta: "13/01/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Luis da Cruz",
    especializacao: "Clínico Geral",
    
    proxConsulta: "21/01/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dra. Sônia José",
    especializacao: "Clínico Geral",
    
    proxConsulta: "26/12/2025",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Reginaldo Leite",
    especializacao: "Clínico Geral",
    
    proxConsulta: "18/12/2025",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Renato Amaral",
    especializacao: "Cardiologista",
    
    proxConsulta: "09/12/2025",
    agenda: "",
    },

    {
    title: "",
    category: "Dra. Vera Viana",
    especializacao: "Ortopedista",
    
    proxConsulta: "16/02/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Diogo Soares",
    especializacao: "Geriatra",
    
    proxConsulta: "14/02/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Roberto de Assis",
    especializacao: "Nutricionista",
    
    proxConsulta: "17/01/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Henrique Pinto",
    especializacao: "Dermatologista",
    
    proxConsulta: "17/01/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dra. Larissa de Azevedo",
    especializacao: "Endocrinologista",
    
    proxConsulta: "05/02/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Kauan Ribeiro",
    especializacao: "Oftalmologista",
    
    proxConsulta: "24/02/2026",
    agenda: "",
    },

    {
    title: "",
    category: "Dr. Raimundo de Lima",
    especializacao: "Oncologista",
    
    proxConsulta: "23/12/2025",
    agenda: "",
    },
    ];


    const productContainer = document.querySelector(".products_wrapper");
    const ulEl = document.querySelector(".dropdown-content");
    const btnEl = document.querySelector(".btn_search");
    const inputEl = document.querySelector(".form_control");


    //mostrar todos os dados
    window.addEventListener('DOMContentLoaded',()=>{
        // displayProfissionalData(profissionalData);

        //selecionando categorias unicas
        const categories = profissionalData.reduce(
            function (values,item) {

                if(!values.includes(item.category)) {
                    values.push(item.category);
                }
                return values;
            },
            [""],
        );

        const categoryBtns = categories.map(function(category){
            return `<a data-id="${category}">${category}</a>`
        })
        .join("");
        ulEl.innerHTML = categoryBtns;

        //links
        const linksEl = document.querySelectorAll("a");
        linksEl.forEach((links) => {
            links.addEventListener("click", (e) => {
                const category = e.target.dataset.id;
                const profissionalCategory = profissionalData.filter(function (data) {
                    if (data.category === category) {
                        return data;
                    }
                });
                
                if(category === "Todos os Profissionais") {
                    displayProfissionalData(profissionalData);
                } else {
                    displayProfissionalData(profissionalCategory);
                }
            });
        });
    });

    










    //function mostrar todos profissionais
    function displayProfissionalData(Profissional){
        let displayData = Profissional.map(function(cat_items){
            return `<div class="products">
                    <div class="pr_img">
                        <img src="${cat_items.img}" alt="" />
                    </div>
                    <div class="content">
                        <h4 class="category"><strong>${cat_items.category}</strong></h4>
                        <h3 class="title"><strong>${cat_items.title}</strong></h3>
                        <p>Especialização: <strong>${cat_items.especializacao}</strong></p>
                        <p>Próxima consulta: <strong>${cat_items.proxConsulta}</strong></p>
                        <a href="${cat_items.agenda}"><strong>Confira Aqui a Agenda</strong></a>
                    </div>
                </div>`;
        });
        displayData = displayData.join("");
        productContainer.innerHTML = displayData;
    };


    //pesquisa
    btnEl.addEventListener("click", (e) => {
        let searchValue = inputEl.value;

        if (searchValue !== "") {
            let searchCategory = profissionalData.filter(function (data) {
                if (data.title.toLowerCase().includes(searchValue)) {
                    return data;
                } else if (data.category.toLowerCase().includes(searchValue)) {
                    return data;
                } else if (data.title.toUpperCase().includes(searchValue)) {
                    return data;
                } else if (data.category.toUpperCase().includes(searchValue)) {
                    return data;
                } else if (data.title.includes(searchValue)) {
                    return data;
                } else if (data.category.includes(searchValue)) {
                    return data;
                }
            });

            if (searchCategory) {
                displayProfissionalData(searchCategory);
            }

            inputEl.value = "";
        } else {
            alert("Por favor pesquise por Profissional!");
        }
    });
