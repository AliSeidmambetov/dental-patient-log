import React, {useState} from "react";
import {ListItem} from '@rneui/themed';
import styled from "styled-components/native";
import {StyleSheet} from 'react-native';
import {View} from "react-native";

const NumberOfPatients = styled.Text`
    color: #006aff;
    font-weight: bold;
`;

const PatientInfo = styled.Text`
    font-size: 16px;
    color: #8B979F;
    padding-left: 10px;
`;

const DateList = ({dataOfSection, numberOfPatients, children}) => {
    const [expanded, setExpanded] = useState(false);

    console.log(dataOfSection);

    return (
        <>
            {dataOfSection === "Today" ?
                <ListItem
                    content={
                        <ListItem.Content>
                            <ListItem.Title style={styles.date}>{dataOfSection}</ListItem.Title>
                            <PatientInfo>
                                Patients:
                                <NumberOfPatients>
                                    {numberOfPatients}
                                </NumberOfPatients>
                            </PatientInfo>
                        </ListItem.Content>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                        {children}
                </ListItem>
                :
                <ListItem.Accordion
                    content={
                        <ListItem.Content>
                            <ListItem.Title style={styles.date}>{dataOfSection}</ListItem.Title>
                            <PatientInfo>
                                Patients:
                                <NumberOfPatients>
                                    {numberOfPatients}
                                </NumberOfPatients>
                            </PatientInfo>
                        </ListItem.Content>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <View style={{display: "flex", flexDirection: "column"}}>
                    {children}
                    </View>
                </ListItem.Accordion>
            }
        </>
    )
}

const styles = StyleSheet.create({
    date: {
        fontSize: 22,
        fontWeight: 800,
        color: '#000000'
    },
    numberOfPatients: {
        color: '#006aff',

    }
})

export default DateList;
