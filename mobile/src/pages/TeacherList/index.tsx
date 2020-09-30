import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
// import {Picker} from '@react-native-community/picker';


import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [insFiltersVisible, setIsFilterVisible] = useState(false);

  function handleToggleFiltersVisible(){
    setIsFilterVisible(!insFiltersVisible)
  }

  return (
    <View style={styles.container}>
      <PageHeader 
          title="Profissionais disponíveis"   
          headerRigth={(
            <BorderlessButton onPress={handleToggleFiltersVisible}>
               <Feather name="filter" size={25} color='#fff'/>
            </BorderlessButton>
          )} 

      >


        { insFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Profissão</Text>
            <TextInput
              style={styles.input}
              placeholder='Qual é a profissão?'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Qual é o dia?'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Qual horário?'
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
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

export default TeacherList;