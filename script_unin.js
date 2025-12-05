// video utilizado para referencia https://www.youtube.com/watch?v=DfUHpQIjVsg&list=WL&index=1

"use strict";


const pacienteData = [

    {
    title: "",
    category: "Carlos Ibáñez",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "28/12/2017", // link edital
    proxConsulta: "05/02/2026",
    exame: "Exame de Sangue"
    },
    
    {
    title: "",
    category: "Theo Strøm",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "19/11/2021", // link edital
    proxConsulta: "19/01/2026",
    exame: "Exame de vista"
    },
    
    {
    title: "",
    category: "Emma Sofía Ramos",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "06/02/2022", // link edital
    proxConsulta: "13/01/2026",
    exame: "Exame de Sangue"
    },

    {
    title: "",
    category: "Anastasia Wang",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "30/05/2014", // link edital
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    title: "",
    category: "Jesper Mårtensson",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "25/05/2015", // link edital
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    title: "",
    category: "Kristian Salo",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "13/07/2024", // link edital
    proxConsulta: "10/12/2025",
    exame: "Exame de coração"
    },

    {
    title: "",
    category: "Samuele Corradini",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "11/12/2016", // link edital
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    title: "",
    category: "Iker Díaz",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "10/09/2015", // link edital
    proxConsulta: "26/01/2026",
    exame: "Exame de colesterol"
    },

    {
    title: "",
    category: "Jekaterina Rudzīte",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "09/08/2016", // link edital
    proxConsulta: "Sem consulta marcada",
    exame: "Exame de urina"
    },

    {
    title: "",
    category: "Oskar Procházka",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "18/01/2020", // link edital
    proxConsulta: "02/02/2026",
    exame: "Exame de glicemia"
    },

    {
    title: "",
    category: "Helena Černe",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "14/03/2017", // link edital
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    title: "",
    category: "Lennart Bergqvist",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "19/09/2013", // link edital
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    title: "",
    category: "Raija Aho",
    releaseDate: "Ainda Não Definida", // data de lançamento edital
    
    ultConsulta: "29/07/2025", // link edital
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
                        <h3 class="title"><strong>${cat_items.title}</strong></h3>
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
                displayPacienteData(searchCategory);
            }

            inputEl.value = "";
        } else {
            alert("Por favor pesquise por Paciente!");
        }
    });
