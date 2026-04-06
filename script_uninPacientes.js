"use strict";


const pacienteData = [

    {
    category: "Carlos Ibáñez",
    
    ultConsulta: "28/12/2017",
    proxConsulta: "05/02/2026",
    exame: "Exame de Sangue"
    },

    {
    category: "Jeferson José",
    
    ultConsulta: "28/12/2017",
    proxConsulta: "05/02/2026",
    exame: "Exame de Sangue"
    },
    
    {
    category: "Theo Strøm",
    
    ultConsulta: "19/11/2021",
    proxConsulta: "19/01/2026",
    exame: "Exame de vista"
    },
    
    {
    category: "Emma Sofía Ramos",
    
    ultConsulta: "06/02/2022",
    proxConsulta: "13/01/2026",
    exame: "Exame de Sangue"
    },

    {
    category: "Anastasia Wang",
    
    ultConsulta: "30/05/2014",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Jesper Mårtensson",
    
    ultConsulta: "25/05/2015",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Kristian Salo",
    
    ultConsulta: "13/07/2024",
    proxConsulta: "10/12/2025",
    exame: "Exame de coração"
    },

    {
    category: "Samuele Corradini",
    
    ultConsulta: "11/12/2016",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Iker Díaz",
    
    ultConsulta: "10/09/2015",
    proxConsulta: "26/01/2026",
    exame: "Exame de colesterol"
    },

    {
    category: "Jekaterina Rudzīte",
    
    ultConsulta: "09/08/2016",
    proxConsulta: "Sem consulta marcada",
    exame: "Exame de urina"
    },

    {
    category: "Oskar Procházka",
    
    ultConsulta: "18/01/2020",
    proxConsulta: "02/02/2026",
    exame: "Exame de glicemia"
    },

    {
    category: "Helena Černe",
    
    ultConsulta: "14/03/2017",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Lennart Bergqvist",
    
    ultConsulta: "19/09/2013",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Raija Aho",
    
    ultConsulta: "29/07/2025",
    proxConsulta: "25/02/2026",
    exame: "Exame de fezes"
    },
    ];


    const productContainer = document.querySelector(".products_wrapper");
    const ulEl = document.querySelector(".dropdown-content");
    const btnEl = document.querySelector(".btn_search");
    const inputEl = document.querySelector(".form_control");


    //mostrar todos os dados
    window.addEventListener('DOMContentLoaded',()=>{
        // displayPacienteData(pacienteData);

        //selecionando categorias unicas
        const categories = pacienteData.reduce(
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
                const pacienteCategory = pacienteData.filter(function (data) {
                    if (data.category === category) {
                        return data;
                    }
                });
                
                if(category === "Todos os Pacientes") {
                    displayPacienteData(pacienteData);
                } else {
                    displayPacienteData(pacienteCategory);
                }
            });
        });
    });

    










    //function mostrar todos pacientes
    function displayPacienteData(Paciente){
        let displayData = Paciente.map(function(cat_items){
            return `<div class="products">
                    <div class="pr_img">
                        <img src="${cat_items.img}" alt="" />
                    </div>
                    <div class="content">
                        <h4 class="category"><strong>${cat_items.category}</strong></h4>
                        <p>Última Consulta: <strong>${cat_items.ultConsulta}</strong></p>
                        <p>Próxima consulta: <strong>${cat_items.proxConsulta}</strong></p>
                        <p>Exame pendente: <strong>${cat_items.exame}</strong></p>
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
            let searchCategory = pacienteData.filter(function (data) {
                if (data.category.toLowerCase().includes(searchValue)) {
                    return data;
                } else if (data.category.toUpperCase().includes(searchValue)) {
                    return data;
                } else if (data.category.includes(searchValue)) {
                    return data;
                }
            });

            if (searchCategory) {
                displayPacienteData(searchCategory);
            }

            inputEl.value = "";
        } else {
            alert("Por favor pesquise por Paciente!");
        }
    });
