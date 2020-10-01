import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import heartOulineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Professional {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    nome: string;
    subject: string;
    whatsapp: string;
}
interface ProfisionalItemProps {
    teacher: Professional;
    favorited: boolean;
}

const TeacherItem: React.FC<ProfisionalItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinktoWhatsapp() {
        Linking.openURL(`whatsapp://send?text=Olá vim através do Workeasy, vamos conversar!&phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }
        favoritesArray.push
    } 
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: teacher.avatar }}
                    />

                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>{teacher.nome}</Text>
                        <Text style={styles.subject}>{teacher.subject}</Text>
                    </View>
                </View >
                <Text style={styles.bio}>{teacher.bio}</Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>
                        Preço/hora {'   '}
                        <Text style={styles.priceValue}> R$ {teacher.cost}</Text>
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <RectButton style={[styles.favoriteButton, styles.favorited]}>
                            {/* <Image source={heartOulineIcon} /> */}
                            <Image source={unfavoriteIcon} />
                        </RectButton>

                        <RectButton onPress={handleLinktoWhatsapp} style={styles.contactButton}>
                            <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                        </RectButton>
                    </View>
                </View>
            </View >
        )
    }

    export default TeacherItem;