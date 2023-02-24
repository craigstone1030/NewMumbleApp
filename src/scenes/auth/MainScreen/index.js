import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import MenuIcon from '../../../../assets/menu.svg';
import RingIcon from '../../../../assets/ring.svg';
import CircleIcon from '../../../../assets/Circle.svg';
import SearchIcon from '../../../../assets/searchBtn.svg';
import { wScale } from '../../../utils/scailing';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ACommentIcon from '../../../../assets/a_comment.svg';
import InCommentIcon from '../../../../assets/in_comment.svg';
import AGroupIcon from '../../../../assets/a_group.svg';
import InGroupIcon from '../../../../assets/in_group.svg';
import APersonIcon from '../../../../assets/a_person.svg';
import InPersonIcon from '../../../../assets/in_person.svg';
import ASettingIcon from '../../../../assets/a_setting.svg';
import InSettingIcon from '../../../../assets/in_setting.svg';
import ListItem from '../../../components/ListItem';

const BottomModes = { Comment: 'Comment', Group: 'Group', Person: 'Person', Setting: 'Setting' };

const MainScreen = props => {

  const [tab, setTab] = useState(BottomModes.Comment);

  const onPressComment = () => {
    setTab(BottomModes.Comment);
  }

  const onPressGroup = () => {
    setTab(BottomModes.Group);
  }
  const onPressPerson = () => {
    setTab(BottomModes.Person);
  }
  const onPressSetting = () => {
    setTab(BottomModes.Setting);
  }



  return (
    <View style={styles.container}>
      <View>
        <View style={{ padding: wScale(30) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.title}>
              Contacts
            </Text>
            <CircleIcon />
          </View>
          <View style={styles.searchBar}>
            <TouchableOpacity>
              <SearchIcon style={{ marginLeft: wScale(20) }} />
            </TouchableOpacity>
            <TextInput placeholder='Find your friends?' style={{ marginLeft: wScale(5) }} />
          </View>
        </View>
        <ScrollView style={styles.panel}>
          <Text style={styles.subText}>
            #
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/15.jpg" />
          <Text style={styles.subText}>
            A
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/16.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/1.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/2.jpg" />
          <Text style={styles.subText}>
            B
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/3.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/4.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/5.jpg" />
          <Text style={styles.subText}>
            B
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <Text style={styles.subText}>
            B
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <Text style={styles.subText}>
            B
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <Text style={styles.subText}>
            B
          </Text>
          <ListItem capture={true} imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />
          <ListItem imgUri="https://xsgames.co/randomusers/assets/avatars/male/14.jpg" />

        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBtn} onPress={onPressComment}>
          {
            tab == BottomModes.Comment ?
              <ACommentIcon /> :
              <InCommentIcon />
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn} onPress={onPressGroup}>
          {
            tab == BottomModes.Group ?
              <AGroupIcon /> :
              <InGroupIcon />
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn} onPress={onPressPerson}>
          {
            tab == BottomModes.Person ?
              <APersonIcon /> :
              <InPersonIcon />
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn} onPress={onPressSetting}>
          {
            tab == BottomModes.Setting ?
              <ASettingIcon /> :
              <InSettingIcon />
          }
        </TouchableOpacity>
      </View>
    </View >
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
