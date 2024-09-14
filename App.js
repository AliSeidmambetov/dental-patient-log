import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import {Data} from "./data/userData";
import DateList from "./components/DateList";
import UserList from "./components/UserList";
import {ScrollView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {View} from "react-native";


const Container = styled.View`
    flex: 1;
    padding: 5px;
    margin-top: 40px;
    background-color: #fff;
`;

const AddButtonBody = styled.TouchableOpacity`
    background-color: #189e03;
    position: absolute;
    right: 20px;
    bottom: 25px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(0, 0, 0) 0 1px 10px;
    elevation: 5;
`;

const AddButtonText = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;


 const App = () => {

         const activeItem = Data.flatMap(section => {
             return section.data.filter(date => date.active);
         });

         const inactiveItems = Data.flatMap(section => {
             return section.data.filter(date => !date.active);
         });

    console.log(activeItem);
    console.log(inactiveItems);

    return (
        <Container>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <UserList item={activeItem[0]} />
            </View>
            <ScrollView>
                {Data.map((section, index) => (
                    <DateList
                        key={index}
                        dataOfSection={section.sectionTitle}
                        numberOfPatients={section.data.length}
                    >
                        {
                            section.data.map((item, subIndex) =>
                                        <UserList key={subIndex}
                                                item={item}
                                                index={subIndex}/>)
                        }
                    </DateList>
                ))}
            </ScrollView>
            <AddButtonBody>
                {/*<Ionicons name="add-circle" size={75} color="green" />*/}
                <AddButtonText>Add</AddButtonText>
            </AddButtonBody>
        </Container>
    );
}

export default App;

