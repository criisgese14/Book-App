import { View, Text, Image, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native-paper";

export const Book = ({name, poster, id, author, categories}) => {

    const navigation = useNavigation();
    const indice = name.indexOf('/');
    const nameSplit = name.substring(0, indice);
    const image = poster ? poster : 'https://cdn.icon-icons.com/icons2/1875/PNG/512/book_120256.png';

    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.detailContainer}>
            <Text style={styles.title}>{nameSplit ? nameSplit : name}</Text>
            {author?.map((indice, index) => {
                return (
                    <Text key={index}>{indice}</Text>
                )
            })}
            {categories?.map((indice, index) => {
                return (
                    <Text key={index}>{indice}</Text>
                )
            })}
            <Button mode="contained" onPress={() => navigation.navigate('Detail', {id})} style={styles.button}>Mas info</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    image: {
        width: 100,
        height: 160,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
    },
    button: {
        width: 120,
        justifyContent: 'center',
    },
    detailContainer: {
        flexDirection: 'column', 
        marginHorizontal: 10, 
        justifyContent: 'space-around', 
        width: '70%'
    }
})