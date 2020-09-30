import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import heartOulineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/wrtinho.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Wellington </Text>
                    <Text style={styles.subject}>Eletricista</Text>
                </View>
            </View >
            <Text style={styles.bio}>
                adipisicing elit. Corporis, ratione!
                {'\n'}{'\n'}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deleniti dolores maxime, optio voluptatum esse molestiae facere exercitationem autem ut!
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}> R$ 20,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOulineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View >
    )
}

export default TeacherItem;