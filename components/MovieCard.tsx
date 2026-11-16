import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import Rating from "./Rating";

export type MovieCardProps = {
    image: ImageSourcePropType;
    title: string;
    category: string;
    rating: number;
    favorite: boolean;
    onDetails: ()=> void;
    onFavorite: ()=>void;
}

export function MovieCard({
    image,
    title,
    category,
    rating,
    favorite,
    onDetails,
    onFavorite
}:MovieCardProps) {
    return(
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={image}
            />

            <View style={styles.information}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
            
                <View style={styles.row}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryTitle}>{category}</Text>
                    </View>

                    <View>
                        <Rating value={rating} />
                    </View>
                </View>

                <View style={styles.cardBottom}>
                    <Pressable style={styles.detailsButton}>
                        <Text style={styles.detailsText}>Ver detalhes</Text>
                    </Pressable>

                </View>
            
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    card:{
        backgroundColor:"#141724",
        borderRadius: 18,
        borderWidth:1,
        borderColor:"#242b40",
        overflow:"hidden"
    },

    image:{
        width:"100%",
        height:195
    },

    information:{
        padding:16
    },

    title:{
        fontSize:18,
        fontWeight:800,
        color:"#ffffff",
        marginBottom:8
    },

    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },

    categoryBadge:{
        paddingHorizontal:10,
        paddingVertical:6,
        borderWidth:1,
        borderColor:"#2c344e",
        backgroundColor:"#1e2437",
        borderRadius:12        

    },

    categoryTitle:{
        fontSize:12,
        fontWeight:700,
        color:"#ffffff"
    },

    cardBottom:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:20
    },

    detailsButton:{
        flex:1,
        height:42,
        backgroundColor: "#1e2437",
        borderRadius:12,
        borderColor:"#2d3650",
        alignItems:"center",
        justifyContent:"center"
    },

    detailsText:{
        fontSize:14,
        fontWeight:"700",
        color:"#ffffff"
    }
    
})