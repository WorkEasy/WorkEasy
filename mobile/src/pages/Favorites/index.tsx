import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Profissionais favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal:16,
          paddingBottom:16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;


// import React, { useState } from 'react';
// import { View, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import { useFocusEffect } from '@react-navigation/native';

// import PageHeader from '../../components/PageHeader';
// import TeacherItem, { Teacher } from '../../components/TeacherItem';

// import styles from './styles';

// function Favorites() {
//   const [favorites, setFavorites] = useState([]);

//   function loadFavorites() {
//     AsyncStorage.getItem('favorites').then(response => {
//       if (response) {
//         const favoritedTeachers = JSON.parse(response);

//         setFavorites(favoritedTeachers);
//       }
//     });
//   }

//   useFocusEffect(
//     React.useCallback(() => {
//       loadFavorites();
//     }, [])
//   );

//   return (
//     <View style={styles.container}>
//       <PageHeader title="Meus proffys favoritos" />

//       <ScrollView
//         style={styles.teacherList}
//         contentContainerStyle={{
//           paddingHorizontal: 16,
//           paddingBottom: 16,
//         }}
//       >
//         {favorites.map((teacher: Teacher) => {
//           return (
//             <TeacherItem
//               key={teacher.id}
//               teacher={teacher}
//               favorited
//             />
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// }

// export default Favorites;