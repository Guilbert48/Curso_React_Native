import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produto'


export default props => {
    function obterLista() {
        return Produtos.map( p =>{
            return <Text key={p.id} style={Estilo.txtG}>{p.id} {p.nome} custa R$ {p.preco}</Text>
        })

    }
    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de produtos 
            </Text>
            {obterLista()}
        </>
    )
}