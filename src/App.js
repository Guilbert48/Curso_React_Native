import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ListaProdutos from './components/Produtos/ListaProdutos'
//import Usuariologado from './components/Usuariologado'


export default () => (
    <View style={style.App}>
        <ListaProdutos />
    {/*
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