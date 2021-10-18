import React, {useRef, useState} from 'react';
import {Transition, Transitioning} from 'react-native-reanimated';
import {View} from 'react-native';
import styled from 'styled-components';
import {
  ArrowRightIcon,
  CalendarImportantIcon,
  FemaleIcon,
  MaleIcon,
  StarIcon,
} from '../../../assets/icons';
import {Button} from '../../buttons/button';
import {FlexContainer} from '../../containers/flex';
import {Body3, Title3} from '../../text';
import {SwipeRow} from 'react-native-swipe-list-view';
import {IconContainer} from '../../containers/icon';
import {useNavigation} from '@react-navigation/core';
import * as ROUTES from '../../../constants/routes';

interface ISchedulesCardProps {
  item: any;
  cancelSheet?(): any;
  reportSheet?(): any;
}

interface IContainerProps {
  backgroundColor: string;
  borderColor: string;
}
const Container = styled.TouchableOpacity<IContainerProps>`
  width: 100%;
  flex-grow: 1;
  background: ${p => (p.backgroundColor ? p.backgroundColor : '#f5fafb')};
  border-radius: 4px;
  border-left-width: 4px;
  border-left-color: ${p => (p.borderColor ? p.borderColor : '#41a7b3')};

  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #0d1829;
`;

const Body = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #445668;
`;

const Time = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  text-align: right;
  color: #304254;
`;

export function SchedulesCard(props: ISchedulesCardProps) {
  const {item, cancelSheet, reportSheet} = props;

  const {title, body1, body2, time, backgroundColor, borderColor} = item;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef();
  const navigation = useNavigation();

  const transition = (
    <Transition.Together>
      <Transition.In type="scale" durationMs={200} />
      <Transition.Change />
      <Transition.Out type="scale" durationMs={200} />
    </Transition.Together>
  );

  return (
    <SwipeRow leftOpenValue={116} rightOpenValue={-116}>
      <FlexContainer
        width="30%"
        style={{alignSelf: 'flex-end', marginVertical: '5%'}}>
        <IconContainer
          onPress={reportSheet}
          icon={<StarIcon style={{color: '#ffffff'}} />}
        />
        <IconContainer
          onPress={cancelSheet}
          backgroundColor="#DB025B"
          icon={<CalendarImportantIcon />}
        />
      </FlexContainer>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={{flex: 1, flexGrow: 1}}>
        <Container
          activeOpacity={0.9}
          onPress={() => {
            ref.current.animateNextTransition();
            setIsOpen(prev => !prev);
          }}
          backgroundColor={backgroundColor}
          borderColor={borderColor}>
          <FlexContainer alignItems="flex-start" style={{flexGrow: 1}}>
            <View>
              <Title>{title}</Title>
              <Body>{body1}</Body>
              <Body>Class {body2}</Body>
            </View>
            <Time>{time}</Time>
          </FlexContainer>

          {isOpen && (
            <>
              <FlexContainer width="50%" style={{flexGrow: 1}}>
                <View style={{marginVertical: 20}}>
                  <Title3>22</Title3>
                  <FlexContainer justifyContent="flex-start">
                    <Body3 style={{marginRight: 7}}>boys</Body3>
                    <MaleIcon />
                  </FlexContainer>
                </View>
                <View style={{marginVertical: 20}}>
                  <Title3>18</Title3>
                  <FlexContainer justifyContent="flex-start">
                    <Body3>girls</Body3>
                    <FemaleIcon />
                  </FlexContainer>
                </View>
              </FlexContainer>

              <Button
                text="Go to Class"
                borderRadius={11}
                backgroundColor={borderColor}
                icon={<ArrowRightIcon />}
                iconPosition="end"
                onPress={() => navigation.navigate(ROUTES.ClassScreen, item)}
              />
            </>
          )}
        </Container>
      </Transitioning.View>
    </SwipeRow>
  );
}
