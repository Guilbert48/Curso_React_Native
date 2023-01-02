import React from 'react'
import { View, StyleSheet } from 'react-native'
import FlexboxV1 from './components/layout/FlexboxV1'
import Mega from './components/mega/Mega'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import Lista2 from './components/Produtos/Lista2'
//import ListaProdutos from './components/Produtos/ListaProdutos'
//import Usuariologado from './components/Usuariologado'


export default () => (
    <View style={style.App}>
        <Mega qtdeNumeros={7} /> 
    {/*
        <FlexboxV1/>
        <DigiteSeuNome />
        <Lista2 />
        <ListaProdutos />
        }
        <Usuariologado usuario={{ nome: 'Guilbert', email: 'guilberts48@gmail.com' }} />
        <Usuariologado usuario={{ email: 'guilberts48@gmail.com' }} />
        <Usuariologado usuario={{}} />
        <Usuariologado usuario={null} />
        <Usuariologado usuario={{ nome: 'ana' }} />
    */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        
    }
})