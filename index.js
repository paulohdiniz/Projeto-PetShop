const PETSHOP = "Petshop DH";
let pets = [{
    nome : "Kaká",
    tipo : "gato",
    raca : "vira-lata",
    idade : "4",
    genero : "F",
    vacinado : false,
    servicos : [],
},{
    nome : "Keké",
    tipo : "gato",
    raca : "vira-lata",
    idade : "3",
    genero : "M",
    vacinado : true,
    servicos : [],
},{
    nome : "Kikí",
    tipo : "gato",
    raca : "vira-lata",
    idade : "2",
    genero : "F",
    vacinado : true,
    servicos : ["banho", "tosa", "corte de unha"],
},{
    nome : "Kokó",
    tipo : "gato",
    raca : "vira-lata",
    idade : "1",
    genero : "M",
    vacinado : true,
    servicos : ["banho", "tosa", "corte de unha"],
}
];

const anoDeNascimento = (pet) => 2020 - pets[pet].idade;

const vacinarPet = pet => {
    if (!pets[pet].vacinado){
        pets[pet].vacinado = true;
        console.log ("Pet vacinado com sucesso");
    }else{
        console.log ("Esse pet já está vacinado");
    }
};

const tosarPet = pet => {
    pet.servicos.push("tosa");
    console.log("O Pet " + pet.nome + " foi tosado!");
};
const darBanhoPet = pet => {
    pet.servicos.push("banho");
    console.log (pet.nome + " está de banho tomado");
};
const cortarUnhasPet = pet => {
    pet.servicos.push("corte de unhas");
    console.log(pet.nome + " está de unhas cortadas");
}

const listarPet = () => {
    console.log (PETSHOP);
    var i = 0;
    while(i < pets.length){
        console.log('------------------------------------');
        console.log("Nome: " + pets[i].nome + '\n' + "Raça: " + pets[i].raca + '\n' + "Idade: " + pets[i].idade);
        console.log ("Genero: " + (pets[i].genero == "F" ? "Femea" : "Macho"));
        console.log ("Vacinado: " + (pets[i].vacinado ? "Sim" : "Não"));
        console.log ("Serviços: " + pets[i].servicos);
        i++;
    }
};

const validarDados = dadosPet => {
    return(
        dadosPet.nome && dadosPet.idade && dadosPet.genero && dadosPet.tipo && dadosPet.raca
    );
};

const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)){
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);
        if(!novoPet.servicos){
            novoPet.servicos = [];
        }
        pets.push(novoPet);
        console.log(novoPet.nome + " foi adicionado com sucesso");
    }else{
        console.log("Ops, insira um objeto válido!");
    }
};
const atenderPet = (pet, servicos) => {
    console.log ("Bem-vindo, " + pet.nome);
    for (let i = 0; i < servicos.length; i++){
        servicos[i](pet);
    }
    const pagar = () => {
        console.log ("Pagamento realizado com sucesso !");
    }
    pagar();
    console.log ("Volte Sempre!");
} ;
adicionarPet({
    nome : "Kuku",
    tipo : "gato",
    raca : "vira-lata",
    idade : "0",
    genero : "M",
    vacinado : false,
    }
);

const contPets = pets => {
    let contVac = 0, contNVac = 0;
    var arrayNVacinados = [];
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].vacinado == false){
            contNVac++;
            arrayNVacinados.push(pets[i].nome);
        }else{
            contVac++;
        }
    }
    console.log(`Foram encontradas ${contVac} pets vacinados`);
    console.log(`Foram encontradas ${contNVac} pets não vacinados`);
};

const campanhaVacina = (pets) => {
    let contadorNVacidos =0;
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].vacinado == false){
            vacinarPet(i);
            contadorNVacidos++;
        }
    }
    console.log(contadorNVacidos + " pets foram vacinados nessa campanha!");
};

contPets(pets);
campanhaVacina(pets);