import { View, SafeAreaView, Text, Pressable, Image, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { giveLike } from '../../api/books';

const BookGalleryItem = ({ book, index, pan, updateBooks, goToBook }) => {
    const [scrollViewWidth, setScrollViewWidth] = useState(useWindowDimensions().width);
    const boxWidth = scrollViewWidth * 0.8;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;

    async function setLike() {
        const response = await giveLike(book.id)
        if (response.success == true) {
            updateBooks()
        }
    }

    return (
        <SafeAreaView key={index}>
            <Animated.View
                style={{
                    transform: [
                        {
                            scale: pan.x.interpolate({
                                inputRange: [
                                    (index - 1) * boxWidth - halfBoxDistance,
                                    index * boxWidth - halfBoxDistance,
                                    (index + 1) * boxWidth - halfBoxDistance, // adjust positioning
                                ],
                                outputRange: [0.8, 1, 0.8], // scale down when out of scope
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                    width: boxWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View style={{ width: 280 }}>
                    <View style={styles.likeHeader}>
                        <Pressable onPress={() => setLike()}>
                            <IconMCI name='heart' size={32} color={book.liked ? "#BC5F51" : "#A0A0A0"} />
                        </Pressable>
                    </View>

                    <Pressable onPress={goToBook}>
                        <Image style={styles.img} source={{ uri: book.imgBook }} />
                        <Text style={styles.bookName}>{book.name}</Text>
                        <View style={styles.footerContainer}>
                            <View style={styles.ratingContainer}>
                                <Image style={styles.star} source={require('../../assets/icons/bookStar.png')} />
                                <Text style={styles.rating}>{book.rating}</Text>
                            </View>
                            <View style={styles.bookCategoryContainer}>
                                <Text style={styles.bookCategory}>{book.category}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    likeHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },
    img: {
        width: 280,
        height: 360,
        paddingHorizontal: 10,
        borderRadius: 13
    },
    bookName: {
        fontSize: 18,
        fontFamily: 'Sora-SemiBold',
        color: "white",
        marginTop: 20,
        marginBottom: 7,
        textAlign: 'left'
    },
    footerContainer: {
        width: 240,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center"
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
    },
    bookCategoryContainer: {
        height: 25,
        width: 60,
        backgroundColor: "#424242",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    bookCategory: {
        fontSize: 11,
        fontFamily: 'Sora-Regular',
        color: "white"
    }
});

export default BookGalleryItem;