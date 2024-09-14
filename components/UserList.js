import styled from "styled-components/native";
import {View} from "react-native";

const UserInfo = styled.View`
    flex: 1;
    margin-right: 17px;
`;

const GroupDate = styled.Text`
    background: ${({active}) =>
            active ? '#109e12' : '#e9f5ff'
    };
    color: ${({active}) =>
            active ? '#fff' : '#4294ff'
    };
    border-radius: 18px;
    font-weight: 700;
    font-size: 15px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 30px;
`;

const UserDiagnos = styled.Text`
    font-size: 16px;
    color: #8B979F
`;

const FullName = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

const Avatar = styled.Image`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    align-items: stretch;
    align-content: space-between;
    border-bottom-width: 2px;
    border-bottom-color: #f3f3f3;
    margin-left: 30px;
    margin-right: 10px;
`;

const GroupBlock = styled.View`
    padding: 0;
    //margin-bottom: 25px;
    //align-items: stretch; 
    //align-content: space-around;
`;

const UserList = ({item}) => {
    const {user: {avatar, fullName}, diagnosis, active, time} = item;

    console.log(item);

    return (
        <GroupBlock>
            <GroupItem>
                <View>
                    <Avatar source={{
                        uri: avatar
                    }}/>
                </View>
                <View>
                    <UserInfo>
                        <FullName>{fullName}</FullName>
                        <UserDiagnos>{diagnosis}</UserDiagnos>
                    </UserInfo>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', top: 5 }}>
                    <GroupDate active={active}>{time}</GroupDate>
                </View>
            </GroupItem>
        </GroupBlock>
    )
}

export default UserList;
