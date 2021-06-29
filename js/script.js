const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

function FunMudaCorFundo()
{

    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)

}

const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

for (obj_rb_fonte of array_rb_fonte)
{

    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)

}

function FunMudaCorFonte()
{

    for (obj_rb_fonte of array_rb_fonte)
    {
        if (obj_rb_fonte.checked)
        {
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else
        {
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}

const obj_cb_linha_meio = document.querySelector("#cb_linha_meio")
const obj_cb_borda = document.querySelector("#cb_borda")

obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)

function FunLinhaMeio()
{

    if (obj_cb_linha_meio.checked)
    {

        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)

    }
    else
    {

        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)

    }

}

function FunBorda()
{

    if (obj_cb_borda.checked)
    {

        obj_div_area_teste.classList.add(obj_cb_borda.value)

    }
    else
    {

        obj_div_area_teste.classList.remove(obj_cb_borda.value)

    }

}

const obj_txt_texto_novo = document.querySelector("#txt_texto_novo")
const obj_bt_troca_texto = document.querySelector("#bt_troca_texto")

obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

function FunTrocaTexto()
{

    if (obj_txt_texto_novo.value != "")
    {

        obj_div_area_teste.innerText = obj_txt_texto_novo.value

    }
    else
    {

        alert("O espaço para troca de texto está vazio!")

    }

}

const obj_sel_fundo_header = document.querySelector("#sel_fundo_header")
const obj_fundo_header = document.querySelector("#fundo_header")

obj_sel_fundo_header.addEventListener('change', FunMudaCorFundoCabec)

function FunMudaCorFundoCabec()
{

    obj_fundo_header.setAttribute('class', obj_sel_fundo_header.value)

}

const obj_cb_imagem_fundo = document.querySelector("#cb_imagem_fundo")
const obj_div_imagem_fundo_teste = document.querySelector("#div_imagem_fundo_teste")

obj_cb_imagem_fundo.addEventListener('click', FunImagemFundo)

function FunImagemFundo()
{

    if(obj_cb_imagem_fundo.checked)
    {

        obj_div_imagem_fundo_teste.setAttribute('class', obj_cb_imagem_fundo.value)

    }
    else
    {

        obj_div_imagem_fundo_teste.removeAttribute('class')

    }

}

const obj_cb_opacidade = document.querySelector("#cb_opacidade")
const obj_img_opacidade = document.querySelector("#img_opacidade")

obj_cb_opacidade.addEventListener('click', FunOpacidade)

function FunOpacidade()
{

    if(obj_cb_opacidade.checked)
    {

        obj_img_opacidade.setAttribute('class', obj_cb_opacidade.value)

    }
    else
    {

        obj_img_opacidade.removeAttribute('class')

    }

}

const obj_btn_Audiowide = document.querySelector(".Audiowide")
const obj_btn_Monoton = document.querySelector(".Monoton")
const obj_texto_de_teste = document.querySelector("#texto_de_teste")

obj_btn_Audiowide.addEventListener('click', FunTrocaFonteAudiowide)
obj_btn_Monoton.addEventListener('click', FunTrocaFonteMonoton)

function FunTrocaFonteAudiowide()
{

    obj_texto_de_teste.setAttribute('class', obj_btn_Audiowide.value)

}

function FunTrocaFonteMonoton()
{

    obj_texto_de_teste.setAttribute('class', obj_btn_Monoton.value)

}