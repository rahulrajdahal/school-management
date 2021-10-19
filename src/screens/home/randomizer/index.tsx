import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import {ArrowDownIllustration} from '../../../assets/illustrations';
import {
  attendance1,
  attendance2,
  attendance3,
  attendance4,
  attendance5,
  attendance6,
  attendance7,
  attendance8,
} from '../../../assets/images';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {MenuHeader} from '../../../components/headers/menu';
import {Body3, Title5} from '../../../components/text';

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  resize-mode: cover;
`;

export function RandomizerScreen({route, random}: any) {
  const data = [
    {
      id: 1,
      avatar: attendance1,
      name: 'Aakash Raj Dahal',
      presence: '4/6',
      value: false,
    },
    {
      id: 2,
      avatar: attendance2,
      name: 'Animesh Pandey',
      presence: '6/6',
      value: false,
    },
    {
      id: 3,
      avatar: attendance3,
      name: 'Bibek Acharya',
      presence: '5/6',
      value: false,
    },
    {
      id: 4,
      avatar: attendance4,
      name: 'Chandra Rokka',
      presence: '6/6',
      value: false,
    },
    {
      id: 5,
      avatar: attendance5,
      name: 'Icchya Chaudhary',
      presence: '6/6',
      value: false,
    },
    {
      id: 6,
      avatar: attendance6,
      name: 'Kazol RajyaLaxmi Shah',
      presence: '4/6',
      value: true,
    },
    {
      id: 7,
      avatar: attendance7,
      name: 'Pranish Shrestha',
      presence: '3/6',
      value: true,
    },
    {
      id: 8,
      avatar: attendance8,
      name: 'Prayush Bijukchchhe',
      presence: '4/6',
      value: false,
    },
  ];

  const [student, setStudent] = useState<object>({});

  useEffect(() => {
    const item = data.filter(item => item.id === random);

    setStudent(item[0]);
  }, [random]);

  return (
    <ScreenContainer style={{paddingHorizontal: 16}}>
      <MenuHeader title="Randomizer" />
      {student && (
        <FlexContainer
          direction="column"
          style={{
            marginVertical: '25%',
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <Avatar source={student.avatar} />

          <Title5 color="#1C2A3A" marginTop={16}>
            {student.name}
          </Title5>
          <Body3>{student.presence} sessions present </Body3>
        </FlexContainer>
      )}

      <Body3 marginBottom={12} textAlign="center" style={{width: '50%'}}>
        Press the Dice Button again to randomize another student
      </Body3>
      <ArrowDownIllustration />
    </ScreenContainer>
  );
}
