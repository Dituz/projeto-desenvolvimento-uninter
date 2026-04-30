"use strict";


const profissionalData = [

    {
    category: "Dr. Pedro do Carmo",
    especializacao: "Pediatra",
    
    proxConsulta: "05/05/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },
    
    {
    category: "Dr. Rex",
    especializacao: "Pediatra",
    
    proxConsulta: "09/04/2026",
    agenda: "https://docs.google.com/spreadsheets/d/1SySFhgqBOilPG4IShV0ufLlTKeD6p-MUEbJGOPR-8QA/edit?usp=sharing",
    textoAgenda: "Confira aqui a agenda",
    },
    
    {
    category: "Dra. Andréia Siqueira",
    especializacao: "Pediatra",
    
    proxConsulta: "09/04/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dra. Vanessa Borges",
    especializacao: "Dermatologista",
    
    proxConsulta: "13/04/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Luis da Cruz",
    especializacao: "Clínico Geral",
    
    proxConsulta: "21/04/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dra. Sônia José",
    especializacao: "Clínico Geral",
    
    proxConsulta: "Sem consulta marcada nos próximos meses",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Reginaldo Leite",
    especializacao: "Clínico Geral",
    
    proxConsulta: "Sem consulta marcada nos próximos meses",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Renato Amaral",
    especializacao: "Cardiologista",
    
    proxConsulta: "Sem consulta marcada nos próximos meses",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dra. Vera Viana",
    especializacao: "Ortopedista",
    
    proxConsulta: "16/05/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Diogo Soares",
    especializacao: "Geriatra",
    
    proxConsulta: "14/05/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Roberto de Assis",
    especializacao: "Nutricionista",
    
    proxConsulta: "17/04/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Henrique Pinto",
    especializacao: "Dermatologista",
    
    proxConsulta: "17/04/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dra. Larissa de Azevedo",
    especializacao: "Endocrinologista",
    
    proxConsulta: "05/05/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Kauan Ribeiro",
    especializacao: "Oftalmologista",
    
    proxConsulta: "24/05/2026",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
    },

    {
    category: "Dr. Raimundo de Lima",
    especializacao: "Oncologista",
    
    proxConsulta: "Sem consulta marcada nos próximos meses",
    agenda: "",
    textoAgenda: "Agenda não disponível no momento",
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
                        <p class="especializacao">Especialização: <strong>${cat_items.especializacao}</strong></p>
                        <p>Próxima consulta: <strong>${cat_items.proxConsulta}</strong></p>
                        <a href="${cat_items.agenda}" target="_blank"><strong>${cat_items.textoAgenda}</strong></a>
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
                if (data.category.toLowerCase().includes(searchValue)) {
                    return data;
                } else if (data.category.toUpperCase().includes(searchValue)) {
                    return data;
                } else if (data.category.includes(searchValue)) {
                    return data;
                } else if (data.especializacao.toLowerCase().includes(searchValue)) {
                    return data;
                } else if (data.especializacao.toUpperCase().includes(searchValue)) {
                    return data;
                } else if (data.especializacao.includes(searchValue)) {
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
