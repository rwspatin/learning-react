const catFormData = {
    "catName": {
        "controlId": "CatName",
        "labelName": "Nome do Gato",
        "labelClassName": "cat-name",
        "inputName": "catName",
        "placeholder": "Digite o nome do seu gato",
        "inputClassName": "cat-name",
    },
    "bornDate": {
        "controlId": "bornDate",
        "labelName": "Data de Nascimento",
        "labelClassName": "born-date",
        "inputName": "bornDate",
        "placeholder": "00/00/0000",
        "inputClassName": "born-date",
    },
    "vaccineDate": {
        "controlId": "vaccineDate",
        "labelName": "Data da Ultima Vacina",
        "labelClassName": "vaccine-date",
        "inputName": "vaccineDate",
        "placeholder": "00/00/0000",
        "inputClassName": "vaccineDate",
    },
    "race": {
        "controlId": "race",
        "labelName": "Raça",
        "labelClassName": "race",
        "inputName": "race",
        "defaultValue": "srd",
        "inputClassName": "race",
        "options": [
            "srd",
            "persa",
            "siames",
            "mainecoon"
        ]
    },
    "color": {
        "controlId": "color",
        "labelName": "Cor do Gato",
        "labelClassName": "color",
        "inputName": "color",
        "defaultValue": "black",
        "inputClassName": "color",
        "options": [
            "black",
            "orange",
            "white"
        ]
    },
    "button": {
        "variant": "primary",
        "value": "Enviar"
    },
    "header": {
        "value": "Cat Form",
    },
}

export default catFormData;