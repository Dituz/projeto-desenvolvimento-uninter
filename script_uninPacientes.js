"use strict";


const pacienteData = [

    {
    category: "Carlos Ibáñez",
    
    dataNascimento: "01/06/1995",
    tipoSangue: "O+",
    peso: "70,2 Kg",
    altura: "1,78m",
    alergia: "Amendoim",
    ultConsulta: "28/12/2017",
    proxConsulta: "05/02/2026",
    exame: "Exame de Sangue"
    },

    {
    category: "Jeferson José",
    
    dataNascimento: "02/04/1948",
    tipoSangue: "O+",
    peso: "84 Kg",
    altura: "1,76m",
    alergia: "",
    ultConsulta: "28/12/2017",
    proxConsulta: "05/02/2026",
    exame: "Exame de Sangue"
    },
    
    {
    category: "Theo Strøm",
    
    dataNascimento: "17/01/2000",
    tipoSangue: "AB+",
    peso: "59 Kg",
    altura: "1,54m",
    alergia: "",
    ultConsulta: "19/11/2021",
    proxConsulta: "19/01/2026",
    exame: "Exame de vista"
    },
    
    {
    category: "Emma Sofía Ramos",
    
    dataNascimento: "15/01/1976",
    tipoSangue: "AB-",
    peso: "108 Kg",
    altura: "1,92m",
    alergia: "",
    ultConsulta: "06/02/2022",
    proxConsulta: "13/01/2026",
    exame: "Exame de Sangue"
    },

    {
    category: "Anastasia Wang",
    
    dataNascimento: "21/03/2002",
    tipoSangue: "B-",
    peso: "107 Kg",
    altura: "1,99m",
    alergia: "",
    ultConsulta: "30/05/2014",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Jesper Mårtensson",
    
    dataNascimento: "16/01/1995",
    tipoSangue: "A+",
    peso: "52 Kg",
    altura: "1,83m",
    alergia: "",
    ultConsulta: "25/05/2015",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Kristian Salo",
    
    dataNascimento: "04/08/2017",
    tipoSangue: "A-",
    peso: "25 Kg",
    altura: "1,30m",
    alergia: "Não possui",
    ultConsulta: "13/07/2024",
    proxConsulta: "10/12/2025",
    exame: "Exame de coração"
    },

    {
    category: "Samuele Corradini",
    
    dataNascimento: "26/01/1974",
    tipoSangue: "A+",
    peso: "58 Kg",
    altura: "1,70m",
    alergia: "",
    ultConsulta: "11/12/2016",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Iker Díaz",
    
    dataNascimento: "13/04/1988",
    tipoSangue: "O-",
    peso: "93 Kg",
    altura: "1,77m",
    alergia: "",
    ultConsulta: "10/09/2015",
    proxConsulta: "26/01/2026",
    exame: "Exame de colesterol"
    },

    {
    category: "Jekaterina Rudzīte",
    
    dataNascimento: "15/04/1998",
    tipoSangue: "A+",
    peso: "60 Kg",
    altura: "1,62m",
    alergia: "",
    ultConsulta: "09/08/2016",
    proxConsulta: "Sem consulta marcada",
    exame: "Exame de urina"
    },

    {
    category: "Oskar Procházka",
    
    dataNascimento: "23/01/1966",
    tipoSangue: "O-",
    peso: "55 Kg",
    altura: "1,98m",
    alergia: "",
    ultConsulta: "18/01/2020",
    proxConsulta: "02/02/2026",
    exame: "Exame de glicemia"
    },

    {
    category: "Helena Černe",
    
    dataNascimento: "16/04/1951",
    tipoSangue: "A+",
    peso: "60 Kg",
    altura: "1,65m",
    alergia: "",
    ultConsulta: "14/03/2017",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Lennart Bergqvist",
    
    dataNascimento: "16/02/1979",
    tipoSangue: "AB-",
    peso: "81 Kg",
    altura: "1,63m",
    alergia: "",
    ultConsulta: "19/09/2013",
    proxConsulta: "Sem consulta marcada",
    exame: "Sem exame pendente"
    },

    {
    category: "Raija Aho",
    
    dataNascimento: "17/03/1984",
    tipoSangue: "O-",
    peso: "109 Kg",
    altura: "1,68m",
    alergia: "",
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
                        <p>Data de Nascimento: <strong>${cat_items.dataNascimento}</strong><p>
                        <p>Tipo Sanguíneo: <strong>${cat_items.tipoSangue}</strong><p>
                        <p>Peso: <strong>${cat_items.peso}</strong><p>
                        <p>Altura: <strong>${cat_items.altura}</strong><p>
                        <p>Alergias: <strong>${cat_items.alergia}</strong><p><br>
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
