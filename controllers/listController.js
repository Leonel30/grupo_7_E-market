
 let userList =[
    {
        id:1,
        nombre : 'Julian',
        apellido : 'Gorospe',
        cargo : 'Administrador Local',
        nivelAcceso : 'moderado'
    },
    {
        id:2,
        nombre : 'Claudia',
        apellido : 'Higa',
        cargo : 'Gerente',
        nivelAcceso : 'alto'
    },
    {
        id:3,
        nombre : 'Pedro',
        apellido : 'Rojas',
        cargo : 'Administrador Norte',
        nivelAcceso : 'moderado'
    },
    {
        id:4,
        nombre : 'Michael',
        apellido : 'Villamizar',
        cargo : 'CEO',
        nivelAcceso : 'Alto'
    },
    {
        id:5,
        nombre : 'Ruth',
        apellido : 'Garcia',
        cargo : 'Consulter',
        nivelAcceso : 'moderado'
    }
];

const listController = {
    
    index : (req,res)=>{
        let usuarios  = userList;   
        res.render('./users/list', { 'usuarios': usuarios })
    }
}

module.exports = listController;