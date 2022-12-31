import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'

import Produto from './Produto'

export default props => {
    const produtoRender = (({item: p}) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    })
    return(
        <>
        <Text style={Estilo.txtG}>
            Lista de produtos V2
        </Text>
        <FlatList
            data={Produto}
            keyExtractor={i => i.id}
            renderItem={produtoRender}
        />
    </>
    )
}