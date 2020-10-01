import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
// import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Professional } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';

function TeacherList() {
  const [insFiltersVisible, setIsFilterVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [professionals, setProfessionals] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(()=>{
      AsyncStorage.getItem('favorites').then(response => {
        if (response){
          const favoritedTeachers = JSON.parse(response);
          const favoritedTeachersIds = favoritedTeachers.map( (teacher:Professional) => {

          }) ;
          setFavorites(favoritedTeachersIds);
        }
      })
  },[]);


  function handleToggleFiltersVisible() {
    setIsFilterVisible(!insFiltersVisible)
  }

  async function handleFiltersSubmit() {
    const response = await api.get('problems', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    console.log(response.data);

    setIsFilterVisible(false) 
    setProfessionals(response.data);
  }


  return (
    <View style={styles.container}>
      <PageHeader
        title="Profissionais disponíveis"
        headerRigth={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={25} color='#fff' />
          </BorderlessButton>
        )}

      >


        {insFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Profissão</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder='Qual é a profissão?'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder='Qual é o dia?'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder='Qual horário?'
                />
              </View>
            </View>
            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >

        {professionals.map((teacher: Professional) => {
          return (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited={favorites.includes(teacher.id)}   
          />)
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;