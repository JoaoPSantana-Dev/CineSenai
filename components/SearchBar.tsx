import { Pressable, StyleSheet, TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"


type SearchBarProps = {
    value: string;

    onChangeText: (text:string) => void;
    onClear?: ()=> void;
}


export default function SearchBar({
    value,
    onChangeText,
    onClear
    }: SearchBarProps){
        return (

            <View style={styles.container}>
                <Ionicons name="search" size={20} color="#94A3B8"></Ionicons>
                <TextInput
                placeholder="Busque o filme por título..."
                placeholderTextColor="#64748B"
                autoCapitalize="none"
                style={styles.input}
                autoCorrect={false}
                onChangeText={onChangeText}
                value={value}
                />

                {value?.length > 0 && onClear && (
                    <Pressable onPress={onClear}>
                        <Ionicons name="close-circle" size={18} color="#94A3B8"></Ionicons>
                    </Pressable>
                )}
            </View>
        )
}

const styles = StyleSheet.create({

    container:{
        height:52,
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#161A28",
        borderRadius:16,
        borderWidth:1,
        borderColor:"#262D42",
        paddingHorizontal:16,
        marginHorizontal:20,
    },

    input:{
        flex: 1,
        color:"#ffffff",
        marginLeft:10,
        fontSize:15,
        fontWeight:"500"

    }




})