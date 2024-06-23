import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { giveLike } from '../../api/books';


const BookListItem = ({ book, goToBook, updateBooks }) => {

    async function setLike() {
        const response = await giveLike(book.id)
        if (response.success == true) {
            updateBooks()
        }
    }

    return (
        <View style={[styles.dirRow, styles.container]}>
            <Pressable onPress={() => { goToBook() }}>
                <View style={styles.dirRow}>
                    <Image style={styles.img} source={{ uri: book.imgBook }} />
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.bookName}>{book.name}</Text>
                            <Text style={styles.bookAuthor}>{book.authors}</Text>
                            <View style={[styles.bookCategoryContainer, styles.alignCenter]}>
                                <Text style={styles.bookCategory}>{book.category}</Text>
                            </View>
                        </View>
                        <View style={[styles.dirRow, styles.alignCenter]}>
                            <Image style={styles.star} source={require('../../assets/icons/bookStar.png')} />
                            <Text style={styles.rating}>{book.rating}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={() => { setLike() }}>
                <IconMCI name='heart' size={32} color={book.liked ? "#BC5F51" : "#A0A0A0"} />
            </Pressable>

        </View>

    );
};

const styles = StyleSheet.create({
    dirRow: {
        flexDirection: "row"
    },
    alignCenter: {
        alignItems: "center"
    },
    container: {
        justifyContent: "space-between",
        marginBottom: 40
    },
    img: {
        width: 87,
        height: 132,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    info: {
        paddingLeft: 13,
        justifyContent: "space-between"
    },
    bookName: {
        fontSize: 13,
        fontFamily: 'Sora-SemiBold',
        color: "white"
    },
    bookAuthor: {
        fontSize: 12,
        fontFamily: 'Sora-Regular',
        color: "#A0A0A0",
        marginTop: 10,
        width: 200,
        flexWrap: "wrap"
    },
    bookCategoryContainer: {
        marginTop: 10,
        height: 25,
        width: 60,
        backgroundColor: "#424242",
        borderRadius: 7,
        justifyContent: "center"
    },
    bookCategory: {
        fontSize: 11,
        fontFamily: 'Sora-Regular',
        color: "white"
    },
    star: {
        width: 19,
        height: 18
    },
    rating: {
        fontSize: 15,
        fontFamily: 'Sora-Regular',
        color: "white",
        paddingHorizontal: 10
    }
});

export default BookListItem;