
// porpiedades de alineacion en botones
const ElementosItems = document.getElementsByName('propiedadesItems');
const ElmentosContent = document.getElementsByName('propiedadesContent');
//botones con valores de items
const valoresItems = document.getElementsByName('valoresItems');
const valoresContent = document.getElementsByName('valorescontent');
// contenedores  de grillas 
const gridJAItems = document.getElementById('gridJAItems');
const gridJAcontens = document.getElementById('gridJAcontens');
// grillas
const gridContent = document.getElementById('grid-content');
const gridItems = document.getElementById('grid-items');
// elementos hijos de la grid
const elem = document.getElementsByName('Elemento');
const elemC = document.getElementsByName('ElementoC');
// botones con valores de items
const AItems = document.getElementById('alingItems');
const jItems = document.getElementById('justifyItems');
// botones con valores de propiedades
const aContent = document.getElementById('alingContent');
const jContent = document.getElementById('justifyContent');
//valor incial de la propiedad
const start = document.getElementById('start');
const startC = document.getElementById('startContent');

let count = 0;

/**
* evento que activa alineaccion de los elementos internos de la grid
 */
gridJAItems.addEventListener('focusin', (event) => {
    activarPropiedades(ElementosItems);
    removeEventListener('focus', gridJAcontens);
});
/**
*Alineacion de la grid dentro de su contenedor
 */
gridJAcontens.addEventListener('focusin', (event) => {
    activarPropiedades(ElmentosContent)
    removeEventListener('focus', gridJAItems);
});

// activar propiedades
let activarPropiedades = (propieadad) => {
    propieadad.forEach(E => {
        E.addEventListener('click', (event) => {
            switch (event.target.id) {
                case 'justifyItems':
                    E.style.opacity = .4;
                    E.disabled = true;
                    AItems.disabled = false;
                    AItems.style.opacity = 1;
                    addAliniamiento(E.value);
                    break;
                case 'alingItems':
                    E.style.opacity = .4;
                    E.disabled = true;
                    jItems.disabled = false;
                    jItems.style.opacity = 1;
                    addAliniamiento(E.value);
                    break;
                case 'justifyContent':
                    E.style.opacity = .4;
                    E.disabled = true;
                    aContent.style.opacity = 1;
                    aContent.disabled = false;
                    addAliniamiento(E.value);
                    break;
                case 'alingContent':
                    E.style.opacity = .4;
                    E.disabled = true;
                    jContent.style.opacity = 1;
                    jContent.disabled = false;
                    addAliniamiento(E.value);
                    break;
                default:
                    break;
            }
        });
    })
}

let eliminarClass = (propiedad) => {
    if (propiedad === 'align-items' || propiedad === 'justify-items') {
        for (let i = 0; i < gridItems.classList.length; i++) {
            if (gridItems.classList.length > 0) {
                gridItems.classList.remove(gridItems.classList[1]);
            }
        }
    } else if (propiedad === 'justify-content' || propiedad === 'align-content') {
        for (let i = 0; i < gridContent.classList.length; i++) {
            if (gridContent.classList.length > 0) {
                gridContent.classList.remove(gridContent.classList[1]);
            }
        }
    }
};

let addAliniamiento = (propiedad) => {
    eliminarClass(propiedad);
    switch (propiedad) {
        case 'justify-items':
            botonera(propiedad, valoresItems);
            gridItems.classList.add('Jstart');
            resetPropiedad(valoresItems);
            for (let i = 0; i < elem.length; i++) {
                elem[i].innerText = `justify-items: start`;
            }
            disableValueStart(start);
            break;
        case 'align-items':
            botonera(propiedad, valoresItems);
            gridItems.classList.add('Astart');
            resetPropiedad(valoresItems);
            for (let i = 0; i < elem.length; i++) {
                elem[i].innerText = `aling-items: start`;
            }
            disableValueStart(start);
            break;
        case 'justify-content':
            botonera(propiedad, valoresContent);
            gridContent.classList.add('JCstart');
            resetPropiedad(valoresContent);
            for (let i = 0; i < elemC.length; i++) {
                elemC[i].innerText = `justify-content : start`
            }
            disableValueStart(startC);
            break;
        case 'align-content':
            botonera(propiedad, valoresContent);
            gridContent.classList.add('ACstart');
            resetPropiedad(valoresContent);
            for (let i = 0; i < elemC.length; i++) {
                elemC[i].innerText = `aling-content: start`
            }
            disableValueStart(startC);
            break;
        default:
            break;
    }
};


let botonera = (pro, valores) => {
    if (pro === 'justify-items' || pro === 'align-items') {
        valores.forEach(E => {
            E.addEventListener('click', event => {
                habilitarBTNS(valores);
                eliminarClass(pro)
                if (event.target.id === 'start') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.id);
                } else if (event.target.id === 'end') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.id);
                } else if (event.target.id === 'center') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.id);
                } else if (event.target.id === 'stretch') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.id);
                }
            })
        });
    } else {
        valores.forEach(E => {
            E.addEventListener('click', event => {
                habilitarBTNS(valores);
                eliminarClass(pro)
                if (event.target.value === 'start') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                } else if (event.target.value === 'center') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                } else if (event.target.value === 'end') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                } else if (event.target.value === 'stretch') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                } else if (event.target.value === 'space-around') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                } else if (event.target.value === 'space-between') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                } else if (event.target.value === 'space-evenly') {
                    E.disabled = true;
                    E.style.opacity = .5;
                    agregaClase(pro, event.target.value);
                }
            })
        });
    }
}

let agregaClase = (pro, valor) => {
    switch (pro) {
        case 'justify-items':
            eliminarClass(pro)
            gridItems.classList.add(`J${valor}`);
            for (let i = 0; i < elem.length; i++) {
                elem[i].innerText = `justify-items: ${valor}`;
            }
            break;
        case 'align-items':
            eliminarClass(pro);
            gridItems.classList.add(`A${valor}`);
            for (let i = 0; i < elem.length; i++) {
                elem[i].innerText = `aling-items: ${valor}`;
            }
            break;
        case 'justify-content':
            eliminarClass(pro)
            gridContent.classList.add(`JC${valor}`);
            for (const i of elemC) {
                i.innerText = `justify-content: ${valor}`;
            }
            break;
        case 'align-content':
            eliminarClass(pro)
            gridContent.classList.add(`AC${valor}`);
            for (const i of elemC) {
                i.innerText = `justify-content: ${valor}`;
            }
            break;
        default:
            break;
    }
}

let resetPropiedad = (valores) => {
    valores.forEach(element => {
        element.disabled = false;
        element.style.opacity = 1;
    });
}
let disableValueStart = (valor) => {
    valor.disabled = true;
    valor.style.opacity = .5;
}
let habilitarBTNS = (elementsBtn) => {
    elementsBtn.forEach(E => {
        E.disabled = false;
        E.style.opacity = 1;
    })
}

let descativarAddEve = (E) => {
    console.log(E)
    ElementosItems.forEach(E => {
        console.log(E)
        E.removeEventListener('click')
    })
}

