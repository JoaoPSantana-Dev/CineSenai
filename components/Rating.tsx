import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type RatingProps = {
    value: number;
}

export default function Rating({
    value,
}:RatingProps) {
    return(

        <View style={styles.ratingBadge}>
            <Ionicons name="star" size={12} color="#FFB800"/>
            <Text style={styles.ratingText}>{value.toFixed(1)}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    ratingBadge:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        paddingHorizontal:10,
        paddingVertical:4,
        backgroundColor:"rgba(255,184,0,0.12)",
        borderWidth:1,
        borderColor:"rgba(255, 184, 0, 0.25)",
        borderRadius:8,
        gap:4       
    },

    ratingText:{
        fontSize:12,
        fontWeight:700,
        color:"#FFB800",  
    }

})