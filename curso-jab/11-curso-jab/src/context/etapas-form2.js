const etapas=[{
        texto: "Escribe tu nombre y apellidos:",
        sufijo: " como nombre de usuario",
        obligatorio:true,
        minimo:null,
        maximo:null
    }, 
    {
        texto: "¿Cuántas habitaciones quiere?:",
        sufijo: " habitaciones",
        obligatorio:true,
        minimo:1,
        maximo:10
    },
    {
        texto: "¿Cuántas personas son?:",
        sufijo: " personas",
        obligatorio:true,
        minimo:1,
        maximo:7
    },
    {
        texto: "Seleccione el número de días:",
        sufijo: " días",
        obligatorio:true,
        minimo:1,
        maximo:7
    },
    {
        texto: "¿Quieres modificar los datos o finalizar e imprimir tu pedido?",
        sufijo: "",
        obligatorio:false,
        minimo:null,
        maximo:null
    }
];

export default etapas;