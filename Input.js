import { TextInput, StyleSheet, View, Image } from 'react-native'

export function Input(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...props} />
            <Image source={props.source} style={styles.prefixImg} resizeMode="contain" />
        </View>

    )

}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        marginBottom:15,
        width:280,
        height:40,
        borderRadius:4,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid rgba(0,0,0,0.1)"
    },
    input: {
        outlineStyle: 'none',
        width:"100%",
        height:"100%",
        direction:"rtl",
        textAlign:"right"
    },
    prefixImg:{
        marginRight:4,
        marginLeft:4,
        width:20,
        height:20
    }
});